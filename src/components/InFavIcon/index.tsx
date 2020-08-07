import React, { FunctionComponent, memo } from 'react';
import { useDispatch } from 'react-redux';

import { addInFavoriteInSuccessAction } from '../../store/actions/isFavoriteActions';

import './index.scss';

interface ILikeIconProps {
  isFavorite: boolean,  
  productId: number
}

const InFavIcon: 
FunctionComponent<ILikeIconProps> = ({ isFavorite,  productId }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addInFavoriteInSuccessAction(productId));
  };
  return (
    <svg 
      onClick={handleClick} 
      className="favorite-icon"
      xmlns="http://www.w3.org/2000/svg" 
      width="40"
      height="40" 
      fill={isFavorite ? 'currentColor' : 'none'}
      stroke="currentColor"
      viewBox="-0.5 0 25 24"
    >
      <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
    </svg>);
};

export default memo(InFavIcon);