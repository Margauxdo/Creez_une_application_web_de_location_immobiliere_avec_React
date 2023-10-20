/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import '../styles/components/slideshow.css';

const Slideshow = ({ images }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNextSlide = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % images.length);
  };

  const handlePrevSlide = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + images.length) % images.length);
  };

  const currentImageNumber = currentPage + 1;

  return (
    <div className="custom-slideshow-container">
      <div className='custom-slide'>
        <img src={images[currentPage]} alt={`Image ${currentImageNumber}/${images.length}`} />
      </div>
      <div className="custom-controls">
        <button onClick={handlePrevSlide}><i className="fa-solid fa-chevron-left"></i></button>
        <span className="image-number">{`${currentImageNumber}/${images.length}`}</span>
        <button onClick={handleNextSlide}><i className="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  );
};

export default Slideshow;

