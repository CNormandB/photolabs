import React, { useState } from "react";
import 'styles/PhotoListItem.scss';
import PhotoFavButton from "components/PhotoFavButton";

const PhotoListItem = (props) => {
  const [like, setLike] = useState('no');
  const notLiked = (like === 'no') ? 'notLiked' : '';
  
  const switchLike = () => {
    setLike((prevLike) => (prevLike === "yes") ? "no" : "yes");
  };

  const { imageSource, profile, username, location } = props;

  return (
    <section className={`photo-list__item ${notLiked}`}>
      <PhotoFavButton like={like} switchLike={switchLike} />
      <img className="photo-list__image" src={imageSource} alt="Posted" />
      <div className="photo-list__user-profile">
        <img className="photo-list__user-image" src={profile} alt="Profile" />
        <div className="photo-list__user-details">
          <div className="photo-list__user-info">
            <p>{username}</p>
            <p className="photo-list__user-location">{location.city}, {location.country}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoListItem;