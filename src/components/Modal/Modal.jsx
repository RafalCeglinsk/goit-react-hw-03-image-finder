import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

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

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
