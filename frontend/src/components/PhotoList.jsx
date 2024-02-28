import React, {useEffect} from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ state, setLiked, setPhotoSelected }) => {
  let photos = state.filteredPhotos

  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          state={state}
          setLiked={setLiked}
          setSelectedPhoto={setPhotoSelected}
          key={photo.id}
          photo={photo}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
