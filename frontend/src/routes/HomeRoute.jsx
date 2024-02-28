import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import topics from "mocks/topics";
import photos from "mocks/photos";
import "../styles/HomeRoute.scss";

const HomeRoute = ({handleLikedChange, state, setPhotoSelected, onSelectTopic, showLiked}) => {

  return (
    <div>
      <TopNavigation toggleLikedPhotos={showLiked} onSelectTopic={onSelectTopic} state={state} />
      <PhotoList state={state} setLiked={handleLikedChange} setPhotoSelected={setPhotoSelected}/>
    </div>
  );
};

export default HomeRoute;
