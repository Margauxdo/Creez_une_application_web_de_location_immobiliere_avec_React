import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import LogoFooter from '../components/LogoFooter';


const Home = () => {
    return (
        <div>
            <div className='nav'>
                <Logo/>
                <Navigation/>
            </div>
                
            <LogoFooter/>
        </div>
    );
};

export default Home;