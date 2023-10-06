import React, { useState } from 'react';
import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const props = {
  id: "1",
  location: {
    city: "Montreal",
    country: "Canada",
  },
  imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  username: "Joe Example",
  profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
};

// Note: Rendering a single component to build components in isolation
const App = () => {
  
  const photos = new Array(3);
  for(let i = 0; i < photos.length; i++){
    photos[i] = <PhotoListItem
    key={i}
    imageSource={props.imageSource}
    profile={props.profile}
    username={props.username}
    location={props.location}
  />;
  }

  return (
  <div className="App">
    {photos}
  </div>
);
};

export default App;
