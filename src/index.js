import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';

const rootElement = document.getElementById('root');

if (rootElement) {
    const rootContainer = ReactDOM.createRoot(rootElement);

    rootContainer.render( <App /> );
}