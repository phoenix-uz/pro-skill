import { useState, useRef, useEffect } from "react";

const Timer = () => {
  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:00");

  const getTimeRemaining = (event) => {
    const total = Date.parse(event) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (event) => {
    let { total, hours, seconds, minutes } = getTimeRemaining(event);

    if (total >= 0) {
      setTimer((hours > 9 ? minutes : "0" + minutes) + ":" + (seconds > 9 ? seconds : "0" + seconds));
    }
  };

  const clearTimer = (event) => {
    setTimer("01:00");

    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(event);
    }, 1000);

    Ref.current = id;
  };
  const getDeadTime = () => {
    let deadline = new Date();

    deadline.setSeconds(deadline.getSeconds() + 60);

    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  return (
    <div className='verificationTime'>
      <p className='text'>"Следующая попытка" {timer}</p>
    </div>
  );
};
export default Timer;
