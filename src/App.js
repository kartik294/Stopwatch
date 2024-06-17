import React, { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer = null;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer); // Clear interval when not running
    }
    return () => clearInterval(timer);
  }, [running]);

  const handleStartStop = () => {
    setRunning(!running);
  };

  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="container">
      <h1>Stopwatch</h1>
      <div>
        <span>Time: {formatTime(time)}</span>
      </div>

      {running ? (
        <button onClick={handleStartStop}>Stop</button>
      ) : (
        <button onClick={handleStartStop}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
