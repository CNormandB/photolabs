import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

function PhotoFavButton(props) {
  const { like, switchLike } = props;

  const handleClick = (e) => 
  {
    e.stopPropagation()
    switchLike();
  }

  return (
    <button onClick={handleClick} className="photo-list__fav-icon">
      <FavIcon selected={like === 'yes'} />
    </button>
  );
}

export default PhotoFavButton;