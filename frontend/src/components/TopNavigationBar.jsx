import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({ onSelectTopic, topic, likedPhotos, toggleLikedPhotos }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList onSelectTopic={onSelectTopic} topic={topic}/>
      <FavBadge isFavPhotoExist={(likedPhotos.length !== 0)} toggleLikedPhotos={toggleLikedPhotos}/>
    </div>
  );
};

export default TopNavigation;