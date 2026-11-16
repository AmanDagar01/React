import { useEffect, useState } from "react";

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    
    

    const id = setInterval(() => {
        const date = new Date();
        const showTime = date.getHours() 
        + ':' + date.getMinutes() 
        + ":" + date.getSeconds();
      setSeconds(showTime);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <h1>Seconds: {seconds}</h1>;
}

export default Timer