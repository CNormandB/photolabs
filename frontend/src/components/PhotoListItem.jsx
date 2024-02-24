import React, { useState } from "react";
import "styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoListItem = ({
  liked,
  setLiked,
  setSelectedPhoto,
  photo
}) => {
  const [like, setLike] = useState(liked.includes(photo.id) ? "yes" : "no");

  const setSelfAsSelected = (e) => {
    console.log(e)
    setSelectedPhoto(photo)
  }

  const switchLike = () => {
    setLike((prevLike) => {
      const newLike = prevLike === "yes" ? "no" : "yes";
  
      // Call the callback function to update liked state in HomeRoute
      setLiked(photo.id);

      return newLike;
    });
  };

  return (
    <section
      className={`photo-list__item ${like === "no" ? "notLiked" : "no"}`} onClick={setSelfAsSelected}
    >
      <PhotoFavButton setSelectedPhoto={setSelectedPhoto} like={like} switchLike={switchLike} />
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
    </section>
  );
};

export default PhotoListItem;
