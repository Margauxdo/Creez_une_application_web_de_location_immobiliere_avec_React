import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import LogoFooter from '../components/LogoFooter';


const APropos = () => {
    return (
        <div>
            <div className='nav'>
                <Logo/>
                <Navigation/>
            </div>
                <h1> A Propos</h1> 
                <LogoFooter/>
        </div>
        
    );
};

export default APropos;