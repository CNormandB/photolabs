import { useState, useReducer } from "react";
import photos from "mocks/photos";
import topics from "mocks/topics";

const INITIAL_STATE = {
  selectedPhoto: undefined,
  favPhotoIds: [],
  photos: photos,
  filteredPhotos: photos,
  topics: topics,
  topic: undefined,
};

const ACTIONS = {
  SWITCH_LIKE: "switch_like",
  SHOW_LIKED: "show_liked",
  SWITCH_TOPIC: "switch_topic",
  SELECT_PHOTO: "select_photo",
  CLOSE_MODAL: "close_modal",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SWITCH_LIKE:
      return {
        ...state,
        favPhotoIds: state.favPhotoIds.includes(action.payload)
          ? state.favPhotoIds.filter((id) => id !== action.payload)
          : [...state.favPhotoIds, action.payload]
      };
    case ACTIONS.SELECT_PHOTO:
      return {
        ...state,
        selectedPhoto: action.payload
      };
    case ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        selectedPhoto: undefined
      };
    case ACTIONS.SHOW_LIKED:
      return {
        ...state,
        filteredPhotos: state.photos.filter((p) => state.favPhotoIds.includes(p.id))
      };
    case ACTIONS.SWITCH_TOPIC:
      return {
        ...state,
        topic: action.payload,
        filteredPhotos: state.photos.filter((photo) => photo.topics.includes(action.payload))
      };
    default:
      console.error(`Could not perform unknown action: ${action.type}, payload: ${action.payload}`)
      return state;
  }
};

const useApplicationData = () => {
  // Define your state variables
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

  const showLiked = () => dispatch({type: ACTIONS.SHOW_LIKED})

  // Define your actions
  const updateToFavPhotoIds = (photoId) => {
   dispatch({type: ACTIONS.SWITCH_LIKE, payload: photoId})
  };

  const setPhotoSelected = (photo) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: photo})
  };

  const onLoadTopic = (topic) => {
    dispatch({type: ACTIONS.SWITCH_TOPIC, payload: topic})
  };

  const onClosePhotoDetailsModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODAL})
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onLoadTopic,
    showLiked,
    onClosePhotoDetailsModal,
  };
};

export default useApplicationData;
