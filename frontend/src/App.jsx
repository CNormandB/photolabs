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
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch photos');
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching photos:', error.message);
      });
  
    fetch("/api/topics", { method: "GET" })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch topics');
        }
        return res.json();
      })
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPICS_DATA, payload: data });
      })
      .catch((error) => {
        console.error('Error fetching topics:', error.message);
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
