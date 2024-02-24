import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import photos from "mocks/photos";

const PhotoDetailsModal = ({ selectedPhoto, setSelectedPhoto }) => {
  const unselect = () => {
    setSelectedPhoto(undefined);
  };
  console.log(selectedPhoto);
  return selectedPhoto ? (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={unselect}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img
        className="photo-details-modal__image"
        src={selectedPhoto.urls.regular}
      />
      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={selectedPhoto.user.profile}
          alt="Profile"
        />
        <div>
          <div>
            <p className="photo-details-modal__photographer-info">
              {selectedPhoto.user.name}
            </p>
            <p className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </p>
          </div>
        </div>
      </div>
      <p className="photo-details-modal__header">Similar Photos</p>
      {selectedPhoto &&
        selectedPhoto.similar_photos &&
        Object.keys(selectedPhoto.similar_photos).map((key) => {
          const photo = selectedPhoto.similar_photos[key];
          return (
            <img
              className="photo-details-modal__images"
              src={photo.urls.regular}
              key={photo.id}
              alt={photo.id}
            />
          );
        })}
    </div>
  ) : null;
};

export default PhotoDetailsModal;
