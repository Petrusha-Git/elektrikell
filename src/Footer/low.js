import { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Countdown from 'react-countdown';
import moment from 'moment';

function Low({ hourValue, setHourValue, bestTimeRange, currentPrice }) {

    const [showElement, setShowElement] = useState('countdown');
    const [time, setTime] = useState(null);

    const cheapHours = [
        { label: '1h', value: 1 },
        { label: '2h', value: 2 },
        { label: '3h', value: 3 },
        { label: '4h', value: 4 },
        { label: '6h', value: 6 },
        { label: '8h', value: 8 },
    ];

    // useEffect - react hook который запускается после того, как весь компонент выполнел рендер
    // 1 аргумент это callback функция которая запускается при...
    // 2 аргумент massive из зависимостей
    // зависимость это переменные которые изпользуется в callback функции
    // зависимости при изменении запускают callback функцию заново
    // оставив пустой массив в зависимостях ты гарантируешь что колбэк функция запускается только один раз
    // даже при изменении state, при условии что в колбэк функции ты state не изпользуешь
    useEffect(() => {
        const countDownUntil = moment.unix(bestTimeRange.timestamp).toDate();
        setTime(countDownUntil);
    }, [bestTimeRange]);

    function handleOnChange(event) {
        const hour = event.currentTarget.value;

        if(bestTimeRange.timestamp > moment().unix()) {
            setShowElement('countdown');
        } else {
            setShowElement('right now');
        }
        setHourValue(+hour);
    }

    return (
        <>
            <Row>
                <Col>
                    <ButtonGroup>
                        {cheapHours.map(hour => (
                            <ToggleButton
                                key={hour.value}
                                id={`hour-${hour.value}`}
                                type="radio"
                                name="hour"
                                value={hour.value}
                                checked={hourValue === hour.value}
                                onChange={handleOnChange}
                            >
                                {hour.label}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col>Parim aeg selleks on {`${bestTimeRange.from}:00st ${bestTimeRange.until}:00ni`}, milleni on jäänud</Col>
            </Row>
            <Row>
                <Col>
                    {showElement === 'countdown' && time ? <Countdown date={time} /> : <h3>Right Now!</h3>}
                </Col>
            </Row>
            <Row>
                <Col>Siis on kilovatt-tunni hind {bestTimeRange.bestPrice} eur, 
                    mis on {Math.round(100 - bestTimeRange.bestPrice / currentPrice * 100)}% odavam kui praegu
                </Col>
            </Row>
        </>
    );
}

export default Low;