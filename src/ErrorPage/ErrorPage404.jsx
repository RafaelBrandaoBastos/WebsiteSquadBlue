import React, { useState } from "react";
import { Section404, Displayed404 } from "./ErrorPageStyled";
import { useNavigate } from "react-router-dom";

export default function ErrorPage404() {
  const navigate = useNavigate();

  const [countdown, setCountdown] = useState(5);
  const [startCountdown, setStartCountdown] = useState(false);

  if (!startCountdown) {
    setStartCountdown(true);
    setInterval(() => {
      setCountdown((state) => state - 1);
    }, 1000);
  }
  setTimeout(() => {
    {
      {
        navigate("/");
      }
    }
  }, 5500);

  return (
    <Section404>
      <Displayed404 src={"../src/assets/gifError404.gif"} />
      <p>Redirecting in {countdown} seconds</p>
    </Section404>
  );
}
