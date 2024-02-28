import React, { useEffect, useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    setPhotoSelected,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
    showLiked,
    setPhotoData
  } = useApplicationData();

  useEffect(() => {
    fetch("/api/photos", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPhotoData(data)
      });
  }, []);

  return (
    <div className="App">
      <React.StrictMode>
        <HomeRoute
          showLiked={showLiked}
          handleLikedChange={updateToFavPhotoIds}
          state={state}
          setPhotoSelected={setPhotoSelected}
          onSelectTopic={onLoadTopic}
        />
        {state.selectedPhoto && (
          <PhotoDetailsModal
            handleLikedChange={updateToFavPhotoIds}
            state={state}
            setPhotoSelected={setPhotoSelected}
            onClosePhotoDetailsModal={onClosePhotoDetailsModal}
          />
        )}
      </React.StrictMode>
    </div>
  );
};

export default App;
