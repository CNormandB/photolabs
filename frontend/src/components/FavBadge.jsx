import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist, toggleLikedPhotos }) => {

  return (
    <button onClick={toggleLikedPhotos} className='fav-badge' >
      <FavIcon displayAlert={isFavPhotoExist}/>
    </button>
  ) 
};

export default FavBadge;