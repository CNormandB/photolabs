import React, { useState } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({state, setPhotoSelected, handleLikedChange, onClosePhotoDetailsModal}) => {
  const unselect = () => {
    setSelectedPhoto(undefined);
  };

  const switchLike = () => {
      const newLike = state.favPhotoIds.includes(state.selectedPhoto.id) ? "no" : "yes"
  
      // Call the callback function to update liked state in HomeRoute
      handleLikedChange(state.selectedPhoto.id);

      return newLike;
    
  };

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={onClosePhotoDetailsModal}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton switchLike={switchLike} like={state.favPhotoIds.includes(state.selectedPhoto.id) ? "yes" : "no"} />
      <img className="photo-details-modal__image" src={state.selectedPhoto.urls.regular}/>
      <div className="photo-details-modal__photographer-details">
        <img
          className="photo-details-modal__photographer-profile"
          src={state.selectedPhoto.user.profile}
          alt="Profile"
        />
          <div className="photo-details-modal__photographer-info">
            <p>{state.selectedPhoto.user.name}
            </p>
            <p className="photo-details-modal__photographer-location">
              {state.selectedPhoto.location.city}, {state.selectedPhoto.location.country}
            </p>
        </div>
      </div>
      <p className="photo-details-modal__header">Similar Photos</p>
      <PhotoList className='photo-details-modal__images' state={state} setPhotoSelected={setPhotoSelected} setLiked={handleLikedChange} photos={Object.values(state.selectedPhoto.similar_photos)}/>
      </div>
  );
};

export default PhotoDetailsModal;
