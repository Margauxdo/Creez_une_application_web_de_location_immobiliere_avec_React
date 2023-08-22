import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';


const Home = () => {
    return (
        <div>
            <div className='nav'>
                <Logo/>
                <Navigation/>
            </div>
                
            
        </div>
    );
};

export default Home;