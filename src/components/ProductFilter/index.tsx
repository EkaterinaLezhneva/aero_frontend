import React, { FunctionComponent, memo } from 'react';
import { useDispatch } from 'react-redux';
import { Grid, FormGroup, FormControlLabel, Checkbox, Button } from '@material-ui/core';

import { getFilteredProductsInStartAction } from '../../store/actions/productsFilterActions';

import './index.scss';

const ProductFilter: FunctionComponent = () => { 
  const initialState = {
    canon: false,
    fujifilm: false,
    nikon: false,
    panasonic: false,
    leica: false,
    olumpus: false,
    pentax: false,
    generalElectric: false,
    zenit: false,
  };
  const [state, setState] = React.useState(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
  const handleReset = () => {
    setState(initialState);
  };
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(getFilteredProductsInStartAction(state));
  };

  const { 
    canon,
    fujifilm,
    nikon,
    panasonic,
    leica,
    olumpus,
    pentax,
    generalElectric,
    zenit,
  } = state;

  return (
    <article className="product-filter">
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Button onClick={handleSubmit} variant="contained" color="primary" fullWidth>Показать результат</Button>
        </Grid>
        <Grid item>
          <Button onClick={handleReset} variant="contained" fullWidth>Очистить фильтр</Button>
        </Grid>
        <Grid item container>
          <FormGroup>
            <Grid container>
              <Grid item xs={6}>
                <FormControlLabel
                  control={<Checkbox 
                    checked={canon}
                    onChange={handleChange} 
                    name="canon" 
                    color="primary" 
                  />}
                  label="Canon"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={fujifilm}
                    onChange={handleChange} 
                    name="fujifilm" 
                    color="primary" 
                  />}
                  label="Fujifilm"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={nikon}
                    onChange={handleChange} 
                    name="nikon" 
                    color="primary" 
                  />}
                  label="Nikon"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={panasonic}
                    onChange={handleChange} 
                    name="panasonic" 
                    color="primary" 
                  />}
                  label="Panasonic"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={leica}
                    onChange={handleChange} 
                    name="leica" 
                    color="primary" 
                  />}
                  label="Leica"
                />
              </Grid>
              <Grid item xs={6}>
            
                <FormControlLabel
                  control={<Checkbox 
                    checked={olumpus}
                    onChange={handleChange} 
                    name="olumpus" 
                    color="primary" 
                  />}
                  label="Olumpus"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={pentax}
                    onChange={handleChange} 
                    name="pentax" 
                    color="primary" 
                  />}
                  label="Pentax"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={generalElectric}
                    onChange={handleChange} 
                    name="generalElectric" 
                    color="primary" 
                  />}
                  label="General Electric"
                />
                <FormControlLabel
                  control={<Checkbox 
                    checked={zenit}
                    onChange={handleChange} 
                    name="zenit" 
                    color="primary" 
                  />}
                  label="Zenit"
                />
              </Grid>
            </Grid>
          </FormGroup>
        </Grid>
      </Grid>
    </article>
  );
};

export default memo(ProductFilter);