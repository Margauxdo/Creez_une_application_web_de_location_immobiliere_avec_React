import React from 'react';
import logementsData from '../logements.json';
import '../styles/components/card.css';
/*importer link depuis react-router-dom*/
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className="list-logement">
            {logementsData.map((logement) => (
                <Link key={logement.id} to={`/logement/${logement.id}`} className="logement-card">
               
                    <img src={logement.cover} alt={logement.title} />
                    <h2>{logement.title}</h2>
                    </Link>
                    
                
            ))}
        </div>
    );
};

export default Cards;

