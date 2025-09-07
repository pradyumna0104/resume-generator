import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWrapper from './AppWrapper';
import './index.css';
import { AppProvider } from './contexts/AppContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <AppWrapper />
    </AppProvider>
  </React.StrictMode>
);