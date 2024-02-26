import React from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({handleLikedChange, liked, setLiked, selectedPhoto, setSelectedPhoto }) => {
  const unselect = () => {
    setSelectedPhoto(undefined);
  };
  console.log(selectedPhoto);
  return selectedPhoto ? (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={unselect}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <img className="photo-details-modal__image" src={selectedPhoto.urls.regular}/>
      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={selectedPhoto.user.profile}
          alt="Profile"
        />
          <div className="photo-details-modal__photographer-info">
            <p>{selectedPhoto.user.name}
            </p>
            <p className="photo-details-modal__photographer-location">
              {selectedPhoto.location.city}, {selectedPhoto.location.country}
            </p>
        </div>
      </div>
      <p className="photo-details-modal__header">Similar Photos</p>
      <PhotoList className='photo-details-modal__images' liked={liked} setLiked={handleLikedChange} photos={Object.values(selectedPhoto.similar_photos)}/>
      </div>
  ) : null;
};

export default PhotoDetailsModal;
