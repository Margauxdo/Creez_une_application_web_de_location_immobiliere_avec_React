import React from 'react';
import Logo from '../components/Logo';
import LogoFooter from '../components/LogoFooter';
import logementsData from '../logements.json';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';

const FicheLogement = () => {
  const { id } = useParams(); // Utilisez useParams pour obtenir l'ID depuis les paramètres d'URL
  console.log('ID extrait des paramètres d\'URL :', id);

  // Recherchez le logement correspondant dans logementsData
  const logement = logementsData.find((logement) => logement.id === id);
  console.log('Logement correspondant :', logement);

  if (!logement) {
    // Gérez le cas où l'ID n'a pas été trouvé en affichant un message d'erreur
    return (
      <div>
        <div className='nav'>
          <Logo />
          <Navigation />
        </div>
        <div className='container-logement'>
          <h1>Logement non trouvé</h1>
          <p className='description'>Ce logement n'existe pas.</p>
        </div>
        <LogoFooter />
      </div>
    );
  }

  // Si le logement est trouvé, affichez les détails du logement
  return (
    <div>
      <div className='nav'>
        <Logo />
        <Navigation />
      </div>
      <div className='container-logement'>
        <h1>{logement.title}</h1>
        <img src={logement.cover} alt={logement.title} />
        <p className='description'>{logement.description}</p>
      </div>
      <div className='host-details'>
        <h2>Hôte : {logement.host.name}</h2>
        <img src={logement.host.picture} alt={logement.host.name} />
      </div>
      <div className='rating-location'>
        <p>Évaluation : {logement.rating}</p>
        <p>Emplacement : {logement.location}</p>
      </div>
      <div className='equipments'>
        <h2>Équipements :</h2>
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index}>{equipment}</li>
          ))}
        </ul>
      </div>
      <div className='tags'>
        <h2>Tags :</h2>
        <ul>
          {logement.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <LogoFooter />
    </div>
  );
}

export default FicheLogement;
