import High from './high';
import Low from './low';
import './footer.scss';
// библиотека, которая нам помогает показывать те компоненты, которые были запрошены через url
import {Route, Routes } from 'react-router-dom';

function Footer(props) {

    // Routes это wrapper наших маршрутов
    // Route - маршрут, в который передаём компоненты через props
    // path совпадает с нашим url и route рендерит его полученный компонент
    // в path через : мы можем передать компонент параметры url
    return (
        <div id="footer">
            <Routes>
                <Route path="/" element={<Low {...props} />} />
                <Route path="/low" element={<Low {...props} />} />
                <Route path="/low/:hours" element={<Low {...props} />} />
                <Route path="/high" element={<High />} />
            </Routes>
        </div>
    );
}

export default Footer;