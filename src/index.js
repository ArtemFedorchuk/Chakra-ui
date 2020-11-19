import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { DataInputProvider } from './contexts/data-input-context/DataInputContext';
import { DataMainButtonProvider } from './contexts/main-button-context/MainButtonContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataMainButtonProvider>
        <DataInputProvider>
          <App />
        </DataInputProvider>
      </DataMainButtonProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
