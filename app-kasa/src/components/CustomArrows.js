import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import '../styles/components/customarrows.css';

const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-prev-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faArrowLeft} />
  </div>
);

const CustomNextArrow = ({ onClick }) => (
  <div className="custom-next-arrow" onClick={onClick}>
    <FontAwesomeIcon icon={faArrowRight} />
  </div>
);

export { CustomPrevArrow, CustomNextArrow };
