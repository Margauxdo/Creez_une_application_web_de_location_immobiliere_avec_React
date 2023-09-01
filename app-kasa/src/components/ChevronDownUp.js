import React, { useState } from 'react';
import '../styles/components/chevrondownup.css';
import chevronImage from '../asset/picto/chevron-fleche-vers-le-haut.png';

const ChevronDownUp = () => {
    const [isRotated, setIsRotated] = useState(false);

    const toggleRotation = () => {
        setIsRotated(!isRotated);
    };

    const rotationDegree = isRotated ? 0 : 180;

    return (
        <div className={`downup ${isRotated ? 'rotated' : ''}`} onClick={toggleRotation}>
            <img src={chevronImage} alt="Chevron" style={{ transform: `rotate(${rotationDegree}deg)` }} />
        </div>
    );
};

export default ChevronDownUp;

