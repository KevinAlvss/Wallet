import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';

import {Global} from './styles/global.js';

ReactDOM.render(
  <React.StrictMode>
    <Layout />
    <Global/>
  </React.StrictMode>,
  document.getElementById('root')
);

