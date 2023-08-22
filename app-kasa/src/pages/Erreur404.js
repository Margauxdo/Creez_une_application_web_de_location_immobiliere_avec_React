import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import LogoFooter from '../components/LogoFooter';



const Erreur404 = () => {
    return (
        <div>
            <div className='nav'>
                <Logo/>
                <Navigation/>
            </div>
                <h1>Erreur 404</h1>
               <LogoFooter/>
        </div>
    );
};

export default Erreur404;