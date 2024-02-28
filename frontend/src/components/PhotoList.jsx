import React, {useEffect} from "react";
import PhotoListItem from "./PhotoListItem";
import "../styles/PhotoList.scss";

const PhotoList = ({ state, dispatch, photos }) => {
  if(!photos){
    return
  }
    
  return (
    <ul className="photo-list">
      {photos.map((photo) => (
        <PhotoListItem
          state={state}
          dispatch={dispatch}
          key={photo.id}
          photo={photo}
        />
      ))}
    </ul>
  );
};

export default PhotoList;
