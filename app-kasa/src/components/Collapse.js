import React, { useState } from 'react';
import '../styles/components/collapse.css';
import '../asset/fontawesome-free-6.4.2-web/css/all.css';

const Collapse = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    const chevronClass = isOpen ? 'collapse-chevron up' : 'collapse-chevron down';


    return (
        <div className="collapse">
      <button onClick={toggleCollapse} className="collapse-button">
        {title}
        <i className={chevronClass}></i>
      </button>
      {isOpen && <div className="collapse-content">{children}</div>}
    </div>
    );
};

export default Collapse;