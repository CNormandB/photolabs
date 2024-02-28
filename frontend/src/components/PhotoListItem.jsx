import React, { useState, useEffect } from "react";
import "styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoListItem = ({
  state,
  setLiked,
  setSelectedPhoto,
  photo
}) => {
  const [like, setLike] = useState("no");

  useEffect(() => {
    // Check if photo.id is in liked array
    if (state.favPhotoIds.includes(photo.id)) {
      setLike("yes");
    } else {
      setLike("no");
    }
  }, [state.favPhotoIds, photo.id]);

  const setSelfAsSelected = (e) => {
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
