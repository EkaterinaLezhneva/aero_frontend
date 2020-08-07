import React, { FunctionComponent, memo } from 'react';

import MainPage from './pages/MainPage';

import './App.scss';

const App:FunctionComponent = () => { 
  return (
    <div className="app">
      <MainPage />
    </div>
  );
};

export default memo(App);
