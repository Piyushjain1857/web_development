import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = Math.random().toString(36).slice(2, 7);

    console.log("Creating interval:", intervalId);

    const interval = setInterval(() => {
      console.log("Running interval:", intervalId);
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Cleaning interval:", intervalId);
      clearInterval(interval);
    };
  }, []);

  return <h1>{count}</h1>;
}

export default Timer;