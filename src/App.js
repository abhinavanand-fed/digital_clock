import React, { useState, useEffect } from "react";
import "./DigitalClock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="digital-clock">
      <h1 className="digital-clock-time">{time}</h1>
    </div>
  );
}

export default DigitalClock;
