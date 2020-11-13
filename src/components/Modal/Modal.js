import React from 'react';
import './Modal.css';

const Modal = ({ open, onClose, children }) => {
  return open ? (
    <div className="modal">
      <div className="modal-overlay">
        <div className="modal-wrapper">
          <a onClick={onClose}>x</a>
          {children}
        </div>
      </div>
    </div>
  ) : null;
};

export default Modal;