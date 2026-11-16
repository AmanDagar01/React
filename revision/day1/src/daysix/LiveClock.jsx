
import React, { useEffect, useState } from 'react';

function LiveClock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();

      const showTime =
        String(date.getHours()).padStart(2, '0') + ':' +
        String(date.getMinutes()).padStart(2, '0') + ':' +
        String(date.getSeconds()).padStart(2, '0');

      setTime(showTime);
    };

    updateTime();

    const intervalId = setInterval(updateTime, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h2>LiveClock</h2>
      <p>Time: {time}</p>
    </div>
  );
}

export default LiveClock;






// Challenge 1 — Live Clock

// Build a component that:
// - Displays the current time.
// - Updates every second.
// - Uses useEffect and setInterval.
// - Cleans up the interval with clearInterval.