import React, { useEffect, useState } from "react";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import "./App.scss";
import useApplicationData from "hooks/useApplicationData";
import { ACTIONS } from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
const App = () => {
  const {
    state,
    dispatch,
  } = useApplicationData();

  return (
    <div className="App">
      <React.StrictMode>
        <HomeRoute
          state={state}
          dispatch={dispatch}
        />
        {state.selectedPhoto && (
          <PhotoDetailsModal
            state={state}
            dispatch={dispatch}
          />
        )}
      </React.StrictMode>
    </div>
  );
};

export default App;
