import React from 'react';
//*creation une encre qui remplace href*//
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/APropos">
                    <li>A propos</li>
                </NavLink>
                <NavLink to="/FicheLogement">
                    <li>Fiche logement</li>
                </NavLink>
                
            </ul>
        </div>
    );
};

export default Navigation;