import React, { useState } from "react";
import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoDetailsModal = ({handleLikedChange, liked, setLiked, selectedPhoto, setSelectedPhoto }) => {
  const unselect = () => {
    setSelectedPhoto(undefined);
  };
  const switchLike = () => {
    // Check if selectedPhoto is already liked
    const isLiked = liked.includes(selectedPhoto.id);
    
    // Toggle like state based on whether selectedPhoto is already liked
    if (isLiked) {
      // If already liked, remove it
      setLiked(prevLiked => prevLiked.filter(item => item !== selectedPhoto.id));
    } else {
      // If not liked, add it
      setLiked(prevLiked => [...prevLiked, selectedPhoto.id]);
    }
  };
  console.log(selectedPhoto);
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={unselect}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton switchLike={switchLike} like={liked.includes(selectedPhoto.id) ? "yes" : "no"} />
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
  );
};

export default PhotoDetailsModal;
