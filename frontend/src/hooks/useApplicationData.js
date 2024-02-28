import { useState, useEffect } from 'react';
import photos from "mocks/photos";
import topics from "mocks/topics"

const useApplicationData = () => {
  // Define your state variables
  const [state, setState] = useState({
    // Initialize with your initial state
    // Example:
    photos: [],
    filteredPhotos: [],
    favPhotoIds: [],
    selectedPhoto: undefined,
    topics: [],
    topic: ''
    // Add other state properties as needed
  });


  useEffect(() => {
    state.photos = photos
    state.filteredPhotos = photos
    state.topics = topics
  })


  const showLiked = () => {
    setState(prevState => ({
      ...prevState,
      filteredPhotos: prevState.photos.filter((p) => prevState.favPhotoIds.includes(p.id))
    }))
  }


  // Define your actions
  const updateToFavPhotoIds = (photoId) => {
    // Update the favorite photo IDs
    setState(prevState => ({
      ...prevState,
      favPhotoIds: prevState.favPhotoIds.includes(photoId)
        ? prevState.favPhotoIds.filter(id => id !== photoId)
        : [...prevState.favPhotoIds, photoId]
    }));
  };

  const setPhotoSelected = (photo) => {
    // Set the selected photo
    setState(prevState => ({
      ...prevState,
      selectedPhoto: photo
    }));
  };

  const onLoadTopic = (topic) => {
    // Load the topic
    setState(prevState => ({
      ...prevState,
      topic: topic,
      filteredPhotos: photos.filter((photo) =>
        photo.topics.includes(topic))
    }));
  };


  const onClosePhotoDetailsModal = () => {
    // Close the photo details modal
    setState(prevState => ({
      ...prevState,
      selectedPhoto: undefined
    }));
  };

  return {
    state,
    updateToFavPhotoIds,
    setPhotoSelected,
    onLoadTopic,
    showLiked,
    onClosePhotoDetailsModal
  };
};

export default useApplicationData;