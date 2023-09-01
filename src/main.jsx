import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './i18n/config.jsx';
import './assets/css/index.less';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/store.jsx';
import { Provider } from 'react-redux';
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
);
