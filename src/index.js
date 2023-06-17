import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { GoogleOAuthProvider } from '@react-oauth/google';

ReactDOM.render(
  <GoogleOAuthProvider
      clientId='378647354767-8c1cnffmod86srv7e6lvbtvcdfc9jdbp.apps.googleusercontent.com'
  >
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    
  </GoogleOAuthProvider>,
  document.getElementById('root')

  
);


serviceWorker.unregister();
