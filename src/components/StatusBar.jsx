import React, { useState, useEffect } from "react";

const StatusBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTime = time.toLocaleTimeString();

  return (
    <>
      <div className="fixed top-4 left-4 text-sm font-mono z-50">Bekasi, Indonesia</div>
      <div className="fixed top-4 right-4 text-sm font-mono z-50">{formattedTime}</div>
    </>
  );
};

export default StatusBar;
