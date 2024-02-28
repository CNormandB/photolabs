import React, { useState, useEffect } from "react";
import "styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";
import { ACTIONS } from "hooks/useApplicationData";

const PhotoListItem = ({
  state,
  dispatch,
  photo
}) => {


  const setSelfAsSelected = (e) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: state.photos.filter(statePhoto=>statePhoto.id === photo.id)[0]})
  }

  const switchLike = () => {
    dispatch({type: ACTIONS.SWITCH_LIKE, payload: photo.id});
  };




  const like = state.favPhotoIds.includes(photo.id)

  return (
    <li
      className={`photo-list__item ${like ? "no" : "notLiked"}`} onClick={setSelfAsSelected}
    >
      <PhotoFavButton switchLike={switchLike} like={like ? "yes" : "no"} />
      <img className="photo-list__image" src={photo.urls.regular} alt="Posted" />
      <div className="photo-list__user-profile">
        <img className="photo-list__user-image" src={photo.user.profile} alt="Profile" />
        <div className="photo-list__user-details">
          <div className="photo-list__user-info">
            <p>{photo.user.name}</p>
            <p className="photo-list__user-location">
              {photo.location.city}, {photo.location.country}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default PhotoListItem;
