import React from 'react';
import logementsData from '../logements.json';
import { useParams } from 'react-router-dom';
import Navigation from '../components/Navigation';
import LogoFooter from '../components/LogoFooter';
import Logo from '../components/Logo';
import '../styles/components/fichelogement.css';
import Collapse from '../components/Collapse';
import Slideshow from '../components/Slideshow'; 
import ChevronDownUp from '../components/ChevronDownUp';
import RatingLocation from '../components/RatingLocation';
import Erreur404 from './Erreur404';

const FicheLogement = () => {
  const { id } = useParams(); // Utilisez useParams pour obtenir l'ID 
  console.log('ID extrait des paramètres d\'URL :', id);

  // Recherchez le logement correspondant dans logementsData
  const logement = logementsData.find((logement) => logement.id === id);
  console.log('Logement correspondant :', logement);

  if (!logement) {
    // cas où l'ID n'a pas été trouvé on affiche la page d'erreur
    return (
    <Erreur404/>
    )
  }

  // Si le logement est trouvé, affichez les détails du logement
  return (
    <div>
      <div className='nav'>
        <Logo />
        <Navigation />
      </div>
      <div className='container-logement'>
        <div className='entete'>
         
        <Slideshow images={logement.pictures} />
        </div>

        <div className="top-right">
          <div className='localisation'>
            <h1>{logement.title}</h1>
            <p>{logement.location}</p>
            <div className='tags'>
              <ul>
                {logement.tags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className='hote-heart'>
            <div className='host-details'>
              <h2> {logement.host.name}</h2>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className='rating-location'>
            <RatingLocation rating={logement.rating}/>
            </div>
          </div>
        </div>
        <div className='collapse-body'>
          <Collapse className="description" title="Description">
            <ChevronDownUp/>
            {logement.description}
          </Collapse>
          <Collapse className="equipement" title='Equipements' >
            <ChevronDownUp/>
            <ul className='list-equipement'>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </Collapse>
        </div>
      </div>
      <LogoFooter />
    </div>
  );
}

export default FicheLogement;

