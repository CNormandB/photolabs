import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import topics from "mocks/topics";
import photos from "mocks/photos";
import "../styles/HomeRoute.scss";

const HomeRoute = ({state, dispatch}) => {
  console.log(state)
  return (
    <div>
      <TopNavigation state={state} dispatch={dispatch}/>
      <PhotoList state={state} dispatch={dispatch} photos={state.filteredPhotos}/>
    </div>
  );
};

export default HomeRoute;
