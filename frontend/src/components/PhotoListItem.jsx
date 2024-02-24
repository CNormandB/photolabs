import React, { useState } from "react";
import "styles/PhotoListItem.scss";
import PhotoFavButton from "components/PhotoFavButton";

const PhotoListItem = ({
  id,
  liked,
  setLiked,
  imageSource,
  profile,
  username,
  location,
}) => {
  const [like, setLike] = useState(liked.includes(id) ? "yes" : "no");

  const switchLike = () => {
    setLike((prevLike) => {
      const newLike = prevLike === "yes" ? "no" : "yes";
  
      // Call the callback function to update liked state in HomeRoute
      setLiked(id);

      return newLike;
    });
  };

  return (
    <section
      className={`photo-list__item ${like === "no" ? "notLiked" : "no"}`}
    >
      <PhotoFavButton like={like} switchLike={switchLike} />
      <img className="photo-list__image" src={imageSource} alt="Posted" />
      <div className="photo-list__user-profile">
        <img className="photo-list__user-image" src={profile} alt="Profile" />
        <div className="photo-list__user-details">
          <div className="photo-list__user-info">
            <p>{username}</p>
            <p className="photo-list__user-location">
              {location.city}, {location.country}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;
