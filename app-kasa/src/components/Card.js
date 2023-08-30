import React from 'react';
import logementsData from '../logements.json';
import '../styles/components/card.css';
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <div className="list-logement">
            {logementsData.map((logement) => (
                <Link key={logement.id} to={`/property/${logement.id}`} className="logement-card">
               
                    <img src={logement.cover} alt={logement.title} />
                    <h2>{logement.title}</h2>
                    </Link>
                    
                
            ))}
        </div>
    );
};

export default Cards;

