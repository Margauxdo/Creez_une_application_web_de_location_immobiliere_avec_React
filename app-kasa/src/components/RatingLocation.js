import React from 'react';
import '../styles/components/ratinglocation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const RatingLocation = ({ rating }) => {
 // Calcule le nombre d'étoiles actives et inactives en fonction de la note (rating)//

  const activeStars = Math.min(5, Math.max(0, Math.floor(rating)));
  const inactiveStars = 5 - activeStars;
 // Crée un tableau d'icônes d'étoiles actives en utilisant FontAwesomeIcon//
  const activeStarIcons = Array(activeStars).fill(null).map((_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} className="fas fa-star" />
  ));

   // Crée un tableau d'icônes d'étoiles inactives en utilisant FontAwesomeIcon//
  const inactiveStarIcons = Array(inactiveStars).fill(null).map((_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} className="far fa-star" />
  ));


  //on affiche le nombre etoile active et inactive//
  return (
    <div className="rating-location">
      {activeStarIcons}
      {inactiveStarIcons}
    </div>
  );
};

export default RatingLocation;





