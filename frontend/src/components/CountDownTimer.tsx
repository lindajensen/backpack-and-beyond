import { useState, useEffect } from "react";

import { CountDownTimerProps } from "../types";

import {
  StyledCountDownHero,
  StyledTimeBox,
  StyledTime,
} from "./styles/CountDownTimer.styled";

function CountDownTimer({ departureDate }: CountDownTimerProps) {
  const targetDate = new Date(departureDate).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(distance / 1000 / 60 / 60 / 24);
      const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
      const minutes = Math.floor(distance / 1000 / 60) % 60;
      const seconds = Math.floor(distance / 1000) % 60;

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <StyledCountDownHero>
      <h2>Time Until Takeoff</h2>

      <StyledTimeBox>
        <StyledTime>
          <h3>{timeLeft.days}</h3>
          <p>Days</p>
        </StyledTime>

        <StyledTime>
          <h3>{timeLeft.hours}</h3>
          <p>Hours</p>
        </StyledTime>

        <StyledTime>
          <h3>{timeLeft.minutes}</h3>
          <p>Minutes</p>
        </StyledTime>

        <StyledTime>
          <h3>{timeLeft.seconds}</h3>
          <p>Seconds</p>
        </StyledTime>
      </StyledTimeBox>
    </StyledCountDownHero>
  );
}

export default CountDownTimer;
