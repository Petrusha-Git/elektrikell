import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

//app - это react компонент, написан через функцию
//компоненты всегда начинаются с большой буквы
//компоненты как и функции принимают аргументы а называются они properties(props)
//компонент возвращает(return) react element/JSX
// react элемент должен содержать только один заглавный элемент
function App() {
  const [radioValue, setRadioValue] = useState('low');
  const [hourValue, setHourValue] = useState(1);
  //useState - это react hook, позволяющий работать с состоянием компонента
  //useState принимает как аргумент изначальное состояние. radioValue = 'low'
  //useState возвращает массив из двух элементов
  //[1] = изначально или новое значение состояния/переменной
  //[2] = функция которая может изменить значение состояния/переменной
  //при изменении состояния запускается rerender компонента
  //все названия react hook-ов начинаются с 'use' , все функции изменения состояния начинаются с 'set'
  return (
    <Container>
      <Header setRadioValue={setRadioValue} radioValue={radioValue}/>
      <Body radioValue={radioValue} hourValue={hourValue} />
      <Footer radioValue={radioValue} hourValue={hourValue} setHourValue={setHourValue} />
    </Container>
  );
}

export default App;