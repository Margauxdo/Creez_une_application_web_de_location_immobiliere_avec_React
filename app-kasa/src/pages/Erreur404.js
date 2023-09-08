import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

import { Link } from 'react-router-dom';
import '../styles/components/erreur404.css';



const Erreur404 = () => {
    return (
        <div>
            <div className='nav'>
                <Logo/>
                <Navigation/>
            </div>
            <div className='container-404'>
                <div className='title404'>
                <h1>404</h1>
                </div>
                <div className='text404'>
                <p>Oups! La page que vous demandez n'existe pas.</p>  
                </div>
                <div className='returnHome'>
                <Link to='/'>Retourner sur la page d'accueil</Link>
                </div >
            </div>
               
        </div>
    );
};

export default Erreur404;