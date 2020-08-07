import React, { useEffect, FunctionComponent, useState, memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

import ProductCard from '../../components/ProductCard';
import IProduct from '../../components/ProductCard/product.interface';
import ProductFilter from '../../components/ProductFilter';
import { getProductsInStartAction } from '../../store/actions/productsActions';
import { IRootState } from '../../store/rootState.interface';

import './index.scss';

const MainPage: FunctionComponent = () => {
  const [productsToRender,
    setProductsToRender] = useState<IProduct[] | null>([]);
  const dispatch = useDispatch();
  
  const products = useSelector(
    (state: IRootState): IProduct[] | null => state.products.products);
  const filteredProducts = useSelector(
    (state: IRootState): IProduct[] | null => state.filteredProducts.products);

  useEffect(() => {
    dispatch(getProductsInStartAction());
  }, [dispatch]);

  useEffect(()=> {
    if (filteredProducts?.length)setProductsToRender(filteredProducts);
    else setProductsToRender(products);
  }, [products, filteredProducts]);
    
  return (
    <div className="main-page">
      <Grid container justify="space-around" spacing={2} wrap="nowrap">
        <ul className="main-page__product-list">
          <Grid item container justify="space-between" spacing={2}>
            {productsToRender && productsToRender.map((product: IProduct) => (
              <Grid item key={product.id}>
                <ProductCard 
                  {...product}
                  price={1130}
                  imgUrl='https://i.ibb.co/GxkphkD/portrait-3.png'
                />
              </Grid>
            ))}
          </Grid>
        </ul>
        <ProductFilter />
      </Grid>
    </div>
  );
};

export default memo(MainPage);