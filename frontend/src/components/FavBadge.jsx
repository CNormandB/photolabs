import React from 'react';
import FavIcon from './FavIcon';
import '../styles/FavBadge.scss';
import { ACTIONS } from 'hooks/useApplicationData';

const FavBadge = ({ isFavPhotoExist, dispatch }) => {

  const showLiked = () => {
    dispatch({type: ACTIONS.SHOW_LIKED})
  }

  return (
    <button onClick={showLiked} className='fav-badge' >
      <FavIcon displayAlert={isFavPhotoExist} selected={true}/>
    </button>
  ) 
};

export default FavBadge;