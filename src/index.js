import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

ReactDOM.render((
    <BrowserRouter>
        <Provider>
            <App />
        </Provider>
    </BrowserRouter>
), document.getElementById('root'));
registerServiceWorker();
