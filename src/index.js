import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextWrapper from './components/ThemeToggle/ThemeContextWrapper/ThemeContextWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeContextWrapper>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </ThemeContextWrapper>
);

reportWebVitals();
