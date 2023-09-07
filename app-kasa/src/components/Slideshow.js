/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../styles/components/slideshow.css';

const Slideshow = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(1);

  

const handleSlideChange = (index) => {
    setCurrentPage(index + 1);
  };
  return (
    <div>
      <Carousel
        showArrows={true} // Affiche les flèches de navigation
        showThumbs={false} // Cache les indicateurs de page en dessous
        showStatus={false} // Afficher le numéro d'image en cours
        onChange={handleSlideChange}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
      <div className="pagination">{currentPage} / {images.length}</div>
    </div>
  );
};

export default Slideshow;


