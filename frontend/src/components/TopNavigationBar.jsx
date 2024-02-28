import React from 'react';
import TopicList from './TopicList';
import FavBadge from './FavBadge';
import '../styles/TopNavigationBar.scss';

const TopNavigation = ({state, dispatch }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList state={state} dispatch={dispatch} />
      <FavBadge isFavPhotoExist={(state.favPhotoIds.length !== 0)} dispatch={dispatch}/>
    </div>
  );
};

export default TopNavigation;