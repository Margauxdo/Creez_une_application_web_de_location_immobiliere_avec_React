import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';



const Erreur404 = () => {
    return (
        <div>
            <div className='nav'>
                <Logo/>
                <Navigation/>
            </div>
                <h1>Erreur 404</h1>
               
        </div>
    );
};

export default Erreur404;