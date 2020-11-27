import React from 'react';
import ReactDOM from 'react-dom';

import './firebase-config';
import 'bootswatch/dist/journal/bootstrap.min.css';

// Componentes
import { VoxBlogApp } from './VoxBlogApp';

ReactDOM.render(
  <React.StrictMode>
    <VoxBlogApp />
  </React.StrictMode>,
  document.getElementById('root')
);

