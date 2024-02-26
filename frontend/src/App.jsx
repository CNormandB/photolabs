import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [liked, setLiked] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(undefined)

  const handleLikedChange = function(photoId) {
    setLiked((prevLiked) => {
      console.log(prevLiked)
      console.log(photoId)
      if (prevLiked.includes(photoId)) {
        return prevLiked.filter((item) => item !== photoId);
      } else {
        return [...prevLiked, photoId];
      }
    });
  }

  return (
    <div className="App">
      <React.StrictMode>
        <HomeRoute handleLikedChange={handleLikedChange} liked={liked} setLiked={setLiked} setSelectedPhoto={setSelectedPhoto}/>
        <PhotoDetailsModal handleLikedChange={handleLikedChange} liked={liked} setLiked={setLiked} selectedPhoto={selectedPhoto} setSelectedPhoto={setSelectedPhoto}/>
      </React.StrictMode>
    </div>
  );
};

export default App;
