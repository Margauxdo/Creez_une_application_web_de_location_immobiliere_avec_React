import React, { useState } from 'react';
import '../styles/components/collapse.css';
import ChevronDownUp from './ChevronDownUp';






const Collapse = ({title, children}) => {
    const [isOpen, setIsOpen] = useState(false);

    

    const toggleCollapse = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="collapse">
            <button onClick={toggleCollapse} className="collapse-button">

                {title}
                <ChevronDownUp/>
            </button>
            {isOpen && <div className="collapse-content">{children}</div>}
        </div>
    );
};

export default Collapse;
