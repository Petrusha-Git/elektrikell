import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// reactDOM отвечает за связь между react и DOM
// DOM - (document object model) - структура html документа в js объекте
const root = ReactDOM.createRoot(document.getElementById('root'));
// здесь мы берём из документа(DOM) элемент с id "root" и вставляем в этот элемент react приложение
root.render(
    <App />
);
// render берёт react элементы/компоненты и обрабатывает их в html(DOM)

// простое объяснение почему react - из-за компонентов и состояния, react изменяет только то что необходимо, следственно работа сайта быстрая