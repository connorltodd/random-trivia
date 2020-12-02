import React from "react";
import { Link } from 'react-router-dom';

interface ChildComponentProps {
  setModalDisplay: (value: boolean) => void;
}

const Modal : React.FC<ChildComponentProps> = ({ setModalDisplay }) => {
    return (
        <div>
            <p>Are you sure you want to quit the game?</p>
            <Link to="/"><button>Yes</button></Link>
            <button onClick={() => setModalDisplay(false)}>No</button> 
        </div>
    )
}

export default Modal;