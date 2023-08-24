import React from 'react';
import logementsData from '../logements.json';
import '../styles/components/card.css';

const Cards = () => {
    return (
        <div className="list-logement">
            {logementsData.map((logement) => (
                <div key={logement.id} className="logement-card">
                    <img src={logement.cover} alt={logement.title} />
                    <h2>{logement.title}</h2>
                    
                </div>
            ))}
        </div>
    );
};

export default Cards;

