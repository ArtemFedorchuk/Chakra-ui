import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter} from 'react-router-dom';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { DataInputProvider } from './contexts/data-input-context/DataInputContext';
import { DataMainButtonProvider } from './contexts/main-button-context/MainButtonContext';
import { DataSettingsProvider } from './contexts/settings-context/SettingsContext';
import {DataAuthProvider} from './contexts/auth-context/authContext';

import './client/client-socket'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataAuthProvider>
        <DataMainButtonProvider>
          <DataSettingsProvider>
            <DataInputProvider>
              <App />
            </DataInputProvider>
          </DataSettingsProvider>
        </DataMainButtonProvider>
      </DataAuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
