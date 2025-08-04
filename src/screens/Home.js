// src/pages/Home.js
import Header from '../components/Header';
import Banner from '../components/Banner';
import Products from '../components/Products';
import Footer from '../components/Footer';
import Services from '../components/Services';

const Home = () => {
  return (
    <div style={{ backgroundColor: '#FFF0F5', minHeight: '100vh' }}>
      <Header />
      <Banner />
      <Services />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
