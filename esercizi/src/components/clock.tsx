import { useEffect, useState } from "react";
import '../index.scss'

function Clock() {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });
  return <h2 className="clock">{time.toLocaleTimeString()}</h2>;
}

export default Clock