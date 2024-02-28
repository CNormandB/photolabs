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

  useEffect(() => {
    fetch("/api/photos", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data})
      });
  }, []);

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
