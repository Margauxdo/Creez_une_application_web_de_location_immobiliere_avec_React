import React from 'react';
//importer le fichier CSS du logo//
import '../styles/components/logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <div className='logo'>
            <Link to="/">
            <img src="../LOGO-1.png" alt="logo kaza"/>
            </Link>
        </div>
    );
};

export default Logo;