import React, { useEffect } from 'react';

const Modal = ({ isOpen, imageUrl, alt, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    isOpen && (
      <div className="Overlay" onClick={handleOverlayClick}>
        <div className="Modal">
          <img src={imageUrl} alt={alt} />
        </div>
      </div>
    )
  );
};

export default Modal;
