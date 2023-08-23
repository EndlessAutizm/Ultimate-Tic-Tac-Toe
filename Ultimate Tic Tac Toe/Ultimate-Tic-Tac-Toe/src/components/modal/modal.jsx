import React from 'react';
import * as functions from '../../functions/functions.js';

const Modal = ({ title, message, won, onClose, handleGameStart}) => {

	const Close = () =>{
		handleGameStart();
		functions.goBack();
		onClose();
	}

  return (
    <div className="modal">
      <div className={`modal-content ${won}`}>
        <h1>{title}</h1>
        <p>{message}</p>
        <p className="button" onClick={Close}>Close</p>
      </div>
    </div>
  );
};

export default Modal;