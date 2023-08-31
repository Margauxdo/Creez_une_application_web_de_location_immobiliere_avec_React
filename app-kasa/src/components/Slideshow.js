/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slideshow = ({ images }) => {
  return (
    <div>
      <Carousel>
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

