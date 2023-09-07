import '../pages/FicheLogement';
import React from 'react';
import '../styles/components/ratinglocation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons'; // Importez l'icône d'étoile vide

const RatingLocation = ({ rating }) => {
  // Arrondissez la note à l'entier le plus proche
  const roundedRating = Math.round(rating);

  // Créez un tableau de 5 étoiles
  const stars = Array(5).fill(null).map((_, index) => {
    if (index < roundedRating) {
      return <FontAwesomeIcon key={index} icon={faStar} className="fas fa-star" />;
    } else {
      return <FontAwesomeIcon key={index} icon={faStarEmpty} className="far fa-star" />;
    }
  });

  return (
    <div className="rating-location">
      {stars}
    </div>
  );
};

export default RatingLocation;




