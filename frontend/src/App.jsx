import React, { useState } from "react";
import HomeRoute from "routes/HomeRoute";
import "./App.scss";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const [liked, setLiked] = useState([]);
  return (
    <div className="App">
      <React.StrictMode>
        <HomeRoute liked={liked} setLiked={setLiked}/>
      </React.StrictMode>
    </div>
  );
};

export default App;
