import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';

const PhotoDetailsModal = ({selectedPhoto, setSelectedPhoto}) => {
  const unselect = () => {
    setSelectedPhoto(undefined)
  }
  return selectedPhoto ? (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={unselect}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  ) : null
};

export default PhotoDetailsModal;
