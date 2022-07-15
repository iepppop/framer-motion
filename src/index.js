import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { MouseContextProvider } from './context/useMousePosition';
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <MouseContextProvider>
      <App />
    </MouseContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
