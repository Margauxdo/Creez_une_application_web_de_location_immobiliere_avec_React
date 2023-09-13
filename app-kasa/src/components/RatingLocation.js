import React from 'react';
import '../styles/components/ratinglocation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const RatingLocation = ({ rating }) => {
  const activeStars = Math.min(5, Math.max(0, Math.floor(rating)));
  const inactiveStars = 5 - activeStars;

  const activeStarIcons = Array(activeStars).fill(null).map((_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} className="fas fa-star" />
  ));

  const inactiveStarIcons = Array(inactiveStars).fill(null).map((_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} className="far fa-star" />
  ));

  return (
    <div className="rating-location">
      {activeStarIcons}
      {inactiveStarIcons}
    </div>
  );
};

export default RatingLocation;





