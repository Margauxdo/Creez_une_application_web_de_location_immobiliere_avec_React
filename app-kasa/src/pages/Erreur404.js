import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import LogoFooter from '../components/LogoFooter';
import { Link } from 'react-router-dom';



const Erreur404 = () => {
    return (
        <div>
            <div className='nav'>
                <Logo/>
                <Navigation/>
            </div>
            <div className='container-404'>
                <h1 className='title-404'>Erreur 404</h1>
                <p className='texte-404'>Oups! La page que vous demandez n'existe pas.</p>  
                <Link to='/'>Retourner sur la page d'accueil</Link>
            </div>
               <LogoFooter/>
        </div>
    );
};

export default Erreur404;