import React from 'react';
import '../styles/PhotoDetailsModal.scss'
import closeSymbol from '../assets/closeSymbol.svg';
import photos from "mocks/photos";

const PhotoDetailsModal = ({selectedPhoto, setSelectedPhoto}) => {
  const unselect = () => {
    setSelectedPhoto(undefined)
  }
  console.log(selectedPhoto)
  return selectedPhoto ? (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={unselect}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img src={selectedPhoto.urls.regular}>
      </img>
    </div>
  ) : null
};

export default PhotoDetailsModal;
