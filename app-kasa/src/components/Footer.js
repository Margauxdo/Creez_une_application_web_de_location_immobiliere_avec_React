import React from 'react';
import '../styles/components/footer.css';
import LogoFooter from './LogoFooter';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container-footer'>
                    <LogoFooter/>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>

        </footer>
    );
};

export default Footer;