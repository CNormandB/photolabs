import React from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ photos, liked, setLiked, setSelectedPhoto }) => {
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          liked={liked}
          setLiked={setLiked}
          setSelectedPhoto={setSelectedPhoto}
          key={photo.id}
          id={photo.id}
          imageSource={photo.urls.regular}
          profile={photo.user.profile}
          username={photo.user.username}
          location={photo.location}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
