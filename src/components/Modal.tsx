import React from "react";
import { History } from "history";
import { withRouter, Link } from 'react-router-dom';

interface ChildComponentProps {
  setModalDisplay: (value: boolean) => void;
}

const Modal : React.FC<ChildComponentProps> = ({ setModalDisplay }) => {
    return (
        <div>
            <p>Are you sure you want to quit the game?</p>
            <Link to="/">Yes</Link>
            <button onClick={() => setModalDisplay(false)}>No</button> 
        </div>
    )
}

export default Modal;