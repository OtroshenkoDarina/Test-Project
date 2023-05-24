import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {configureStore} from './store';
import {BrowserRouter as Router} from "react-router-dom";

const store = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>
);

