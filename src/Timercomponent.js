import React, {useState} from 'react';

const TimerComponent = () => {
  const [time, setTime] = useState(0);
  const [intervalid, setIntervalid] = useState(0);

  function handleStart() {
    let _time = 0;
    const id = setInterval(() => {
        if(_time === 6) {
            setTime(0);
        } else {
            setTime(function(count) {
            _time = count + 1;
            return _time;
            });
        }
    }, 1000);

    setIntervalid(id);
  }

  function handleStop() {
    clearInterval(intervalId);
  }
  return (
    <div>
        <h2>{time}</h2>
        <button onClick={handleStart}
        <button onClick={handleStop}
    </div>
  )