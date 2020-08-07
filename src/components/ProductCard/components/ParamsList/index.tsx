import React, { FunctionComponent, memo } from 'react';

import { IParam } from  '../../product.interface';

import './index.scss';

const ParamsList: FunctionComponent<Record<string, IParam[]>> = ( { params } )  => {
  return (
    <ul className="product-card__params">
      {params.map((param) => (
        <li key={param.name}>
          <span className="product-card__param-name">{param.name}</span>
          {' : '}
          <span className="product-card__param-value">{param.value}</span>
        </li>
      ))}
    </ul>
      
  );
};
export default memo(ParamsList);


