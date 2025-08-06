import React from 'react';
import { Carousel, Card, Row, Col, Container, Button } from 'react-bootstrap';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const petsData = [
 
  {
    id: 2,
    name: 'Luna',
    photo: 'https://placedog.net/300/300?id=2',
    description: 'Tosa higiênica e corte estilizado',
  },
  {
    id: 3,
    name: 'Tobby',
    photo: 'https://placedog.net/300/300?id=3',
    description: 'Banho com hidratação especial',
  },
  {
    id: 4,
    name: 'Mimi',
    photo: 'https://placedog.net/300/300?id=4',
    description: 'Tosa padrão e escovação',
  },
];

// Cria os slides quebrando o array conforme itemsPorSlide
const createSlides = (pets, itemsPerSlide) => {
  const slides = [];
  for (let i = 0; i < pets.length; i += itemsPerSlide) {
    slides.push(pets.slice(i, i + itemsPerSlide));
  }
  return slides;
};

const CardsBanhoTosa = () => {
  const [itemsPerSlide, setItemsPerSlide] = React.useState(3);

  React.useEffect(() => {
    const updateItemsPerSlide = () => {
      const width = window.innerWidth;
      if (width < 576) setItemsPerSlide(1);
      else if (width < 992) setItemsPerSlide(2);
      else setItemsPerSlide(3);
    };

    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const colSize = itemsPerSlide === 1 ? 12 : itemsPerSlide === 2 ? 6 : 4;
  const slides = createSlides(petsData, itemsPerSlide);

  return (
    <Container
      className="my-5"
      style={{
        position: 'relative',
        backgroundColor: '#FFF0F5', // fundo igual ao da Home
        borderRadius: '10px',
        padding: '20px',
      }}
    >
      <h2 className="mb-4 text-center" style={{ color: '#D63384' }}>
        Animais que já fizeram Banho e Tosa
      </h2>
      <Carousel
        indicators={false}
        interval={5000}
        pause="hover"
        prevIcon={
          <Button
            variant="light"
            style={{
              borderRadius: '4px',
              padding: '10px',
              backgroundColor: 'white',
              color: '#D63384',
              border: 'none',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)',
              position: 'absolute',
              top: '50%',
              left: '10px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FaChevronLeft size={20} />
          </Button>
        }
        nextIcon={
          <Button
            variant="light"
            style={{
              borderRadius: '4px',
              padding: '10px',
              backgroundColor: 'white',
              color: '#D63384',
              border: 'none',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)',
              position: 'absolute',
              top: '50%',
              right: '10px',
              transform: 'translateY(-50%)',
              zIndex: 10,
              width: '40px',
              height: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FaChevronRight size={20} />
          </Button>
        }
      >
        {slides.map((group, idx) => (
          <Carousel.Item key={idx}>
            <Row className="justify-content-center">
              {group.map((pet) => (
                <Col
                  key={pet.id}
                  xs={12}
                  sm={6}
                  md={colSize}
                  className="d-flex justify-content-center"
                >
                  <Card
                    style={{ width: '100%', maxWidth: '18rem' }}
                    className="mb-3 shadow-sm"
                  >
                    <Card.Img
                      variant="top"
                      src={pet.photo}
                      alt={pet.name}
                      className="img-fluid"
                      style={{ objectFit: 'cover', height: '250px' }}
                    />
                    <Card.Body>
                      <Card.Title>{pet.name}</Card.Title>
                      <Card.Text>{pet.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default CardsBanhoTosa;
