import React, { useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import topics from "mocks/topics";
import photos from "mocks/photos";
import "../styles/HomeRoute.scss";

const HomeRoute = ({handleLikedChange, liked, setLiked, setSelectedPhoto}) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [filteredPhotos, setFilteredPhotos] = useState(photos);
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
      <PhotoList liked={liked} setLiked={handleLikedChange} photos={filteredPhotos} setSelectedPhoto={setSelectedPhoto}/>
    </div>
  );
};

export default HomeRoute;
