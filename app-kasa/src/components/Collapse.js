import React, { useState } from 'react';
import '../styles/components/collapse.css';

const Collapse = ({title}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className="collapse">
      <button onClick={toggleCollapse} className="collapse-button">
        {title}
      </button>
      {isOpen && <div className="collapse-content">Contenu de {title}</div>}
    </div>
    );
};

export default Collapse;