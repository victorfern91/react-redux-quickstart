/* global document */
import React from 'react';
import { render } from 'react-dom';
// import { Provider } from 'react-redux';
import store from './store';

import Counter from './components/counter';

render(
  <Counter store={store} />,
  document.getElementById('app'));
