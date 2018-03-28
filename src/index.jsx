import React from 'react';
import { render } from 'react-dom';
import App from './App';

const ConctedApp = () => (
  <App />
);
render(<ConctedApp />, document.querySelector('#app'));

