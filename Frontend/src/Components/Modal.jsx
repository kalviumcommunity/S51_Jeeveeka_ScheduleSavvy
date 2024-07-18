import React, { useState } from 'react';
import '../Styles/Modal.css'; 

const Modal = ({ show, onClose, onSave }) => {
  const [inputValue, setInputValue] = useState('');

  if (!show) {
    return null;
  }

  const handleSave = () => {
    onSave(inputValue);
    setInputValue('');
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Set Timer Duration</h2>
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter duration in minutes"
          min="1"
          max="2000"
        />
        <div className="modal-buttons">
          <button onClick={handleSave}>Save</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
