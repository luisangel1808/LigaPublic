import React from 'react';
import '../styles/components/Home.css';
import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import logo from '../assets/static/logoLiga.jpg';
import lig1 from '../assets/static/lig1.jpg';
import lig2 from '../assets/static/lig2.jpg';
import lig3 from '../assets/static/lig3.jpg';

const images = [
  {src:lig1, sizes: '(max-width: 1000px) 1000px, (max-width: 2000px) 1000px, 1000px'},
  {src:lig2},
  {src:lig3}]

const Home = () => (
  <section className="Home">
    <img src={logo} alt="logo" />
    <div className="Home-container">
      <h1>Bienvenido al sitio web del ajedrez caucano</h1>
      <p>
        El lugar para los amantes del juego ciencia de la región.
      </p>
    </div>
    <div className="Home_imgs">
      <Carousel 
        images={images} 
        isAutoPlaying={true}
        autoPlayInterval={3000}
        hasMediaButton={false}
        hasSizeButton={false}
        hasThumbnails={false}
        hasIndexBoard={false}
        />
    </div>
  </section>
);

export default Home;
