import React from 'react';
import '../styles/components/banner.css';

const Banner = () => {
    return (
        <div className='banner'>
        <img src='./IMG-HOME.png' alt='banner' />
        <h1 className='titlebanner'>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;