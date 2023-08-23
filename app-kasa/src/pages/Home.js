import React from 'react';
import Navigation from '../components/Navigation';
import Logo from '../components/Logo';
import LogoFooter from '../components/LogoFooter';
import Banner from '../components/Banner';



const Home = () => {
    return (
        <div>
            <div className='nav'>
                <Logo/>
                <Navigation/>

            </div>
            <div class="banner-home">
               <Banner/>
            </div>
                
            <LogoFooter/>
        </div>
    );
};

export default Home;