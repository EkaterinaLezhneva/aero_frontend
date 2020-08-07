import React, { FunctionComponent, memo } from 'react';

import './index.scss';

const Availability: FunctionComponent<Record<string, boolean>> = (
  { availability }) => {
  const available = (<span className="product-card__availability product-card__availability_available">✓ В наличии</span>);
  const notAvailable = (<span className="product-card__availability product-card__availability_not-available">✖ Нет в наличии</span>); 
  return availability ? available : notAvailable;
};

export default memo(Availability);