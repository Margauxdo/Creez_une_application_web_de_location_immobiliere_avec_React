/* eslint-disable jsx-a11y/img-redundant-alt */
/* Slideshow.js */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slideshow = ({ images }) => {
  return (
    <div>
      <Carousel
        showArrows={true} // Affiche les flèches de navigation
        showThumbs={false} // Cache les indicateurs de page en dessous
        showStatus={true} // Cache le numéro d'image en cours
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;


