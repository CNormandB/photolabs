import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [liked, setLiked] = useState([]);
  const [selectedPhoto, setSelectedPhoto] = useState(undefined)

  return (
    <div className="App">
      <React.StrictMode>
        <HomeRoute liked={liked} setLiked={setLiked} setSelectedPhoto={setSelectedPhoto}/>
        <PhotoDetailsModal selectedPhoto={selectedPhoto}/>
      </React.StrictMode>
    </div>
  );
};

export default App;
