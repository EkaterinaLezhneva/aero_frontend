import React, { FunctionComponent, memo } from 'react';
import { Grid, Button, } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import LikeIcon from '../InFavIcon';
import ComparisonIcon from '../ComparisonIcon';
import IProduct from './product.interface';
import Availability from './components/Availability';
import ParamsList from './components/ParamsList';

import './index.scss';

const ProductCard: FunctionComponent<IProduct> = ({
  id,
  code, 
  imgUrl, 
  availability,
  title, 
  params,
  price, 
  inFav, 
  inComparison 
}) =>  (
  <article className="product-card">
    <Grid container direction="column" spacing={3}>
      <Grid item className="product-card__header" container justify="space-between">
        <Rating
          name="product-card__product-rating"
          value={3}
        />
        <span className="product-card__code">{`Арт. ${code}`}</span>
      </Grid>
      <Grid item>
        <img className="product-card__image " src={imgUrl} alt={title} />
      </Grid>
      <Grid item>
        <Availability availability={availability} />
      </Grid>
      <Grid item>
        <h3 className="product-card__title">{title}</h3>
      </Grid>
      <Grid item>
        <ParamsList params={params} />
      </Grid>
      <Grid item>
        <h2>{price} руб.</h2>
      </Grid>
      <Grid item className="product-card__footer" container justify="space-between">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<ShoppingCartIcon>Купить</ShoppingCartIcon>}
          >
            Купить
          </Button>
        </Grid>
        <Grid item xs={4} container justify="space-between">
          <Grid item>
            <LikeIcon isFavorite={inFav} productId={id} />
          </Grid>
          <Grid item>
            <ComparisonIcon inComparison={inComparison} productId={id} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </article>
);

export default memo(ProductCard);