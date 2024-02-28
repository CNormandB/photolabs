import React, { useState } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";
import { ACTIONS } from "hooks/useApplicationData";

const PhotoDetailsModal = ({state, dispatch}) => {

  const switchLike = () => {
      const newLike = state.favPhotoIds.includes(state.selectedPhoto.id) ? "no" : "yes"
  
      // Call the callback function to update liked state in HomeRoute
      dispatch({type: ACTIONS.SWITCH_LIKE, payload: state.selectedPhoto.id});

      return newLike;
    
  };

  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL});
  }

  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={closeModal}>
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
      <PhotoList className='photo-details-modal__images' state={state} dispatch={dispatch} photos={Object.values(state.selectedPhoto.similar_photos)}/>
      </div>
  );
};

export default PhotoDetailsModal;
