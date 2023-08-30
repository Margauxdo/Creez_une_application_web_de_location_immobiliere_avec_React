import React from 'react';
//*creation une encre qui remplace href*//
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            <ul>
                <NavLink to="/">
                    <li>Accueil</li><div className="line"></div>
                </NavLink>
                <NavLink to="/APropos">
                    <li>A propos</li><div className="line"></div>
                </NavLink>
                
                
            </ul>
        </div>
    );
};

export default Navigation;