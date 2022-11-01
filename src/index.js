import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './services/stateService';
import { BrowserRouter } from 'react-router-dom';
// Provider - вспомогательный компонент для работы с хранилищем redux
const root = ReactDOM.createRoot(document.getElementById('root'));
// BrowserRouter - это главный компонент react рутера который говорит нашему приложению что здесь используется
// маршруты/routes. Маршруты идут с адреса/url
root.render(
    <Provider store={store}>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </Provider>
);