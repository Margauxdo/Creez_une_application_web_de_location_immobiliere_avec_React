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

  const statusFormatter = (current, total) => {
    return `${current} / ${total}`;
  };

  return (
    <div className="custom-slideshow-container">
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={true}
        statusFormatter={statusFormatter}
        showIndicators={false}
        onChange={handleSlideChange}
        className='custom-carousel'
        selectedItem={currentPage - 1}
      >
        {images.map((image, index) => (
          <div key={index} className='custom-slide'>
            <img src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
