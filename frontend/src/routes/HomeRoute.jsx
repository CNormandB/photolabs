import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import topics from "mocks/topics";
import photos from "mocks/photos";
import "../styles/HomeRoute.scss";

const HomeRoute = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
  const [liked, setLiked] = useState([]);
  const [displayLikedPhotos, setDisplayLikedPhotos] = useState(false)


  const onSelectTopic = (topic) => {
    //Group liked photos, create a notification
    const likedPhotos = liked.length !== 0

    // Filter the photos based on the selected topic
    const filteredPhotos = photos.filter((photo) => {
      return photo.topics.includes(topic);
    });

    // Update the state with the selected topic and filtered photos
    setSelectedTopic(topic);
    setFilteredPhotos(filteredPhotos);

  };

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

  const toggleLikedPhotos = function(){
    console.log(displayLikedPhotos)
    setDisplayLikedPhotos((prev) => !prev)
    console.log(displayLikedPhotos)
    if(displayLikedPhotos){
      const filteredPhotos = photos.filter((photo) => {
        return liked.includes(photo.id);
      });
      setFilteredPhotos(filteredPhotos)
    }
    else{
      setFilteredPhotos(photos)
    }
  }


  return (
    <div>
      <TopNavigation toggleLikedPhotos={toggleLikedPhotos} onSelectTopic={onSelectTopic} topic={selectedTopic} likedPhotos={liked} />
      <PhotoList setLiked={handleLikedChange} photos={filteredPhotos} />
    </div>
  );
};

export default HomeRoute;
