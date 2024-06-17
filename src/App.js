import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(0);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      });
    } else if (!running) {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [running]);

  const handleStartStop = () => {
    setRunning(!running);
  };

  const handleReset = () => {
    setTime(0);
    setRunning(false);
  };

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  return (
    <div className="container">
      <h1>Stop Watch</h1>
      <div>
        <span>Time :{formatTime(time)}</span>
      </div>

      <button onClick={handleStartStop}>{running ? "Stop" : "Start"}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
