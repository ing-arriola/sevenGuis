import React, { useState } from "react";
import { Row } from "react-bootstrap";
const TempConverter = () => {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleChangeFahrenheit = (e) => {
    setFahrenheit(e.target.value);
    setCelsius((e.target.value - 32) * (5 / 9));
  };
  const handleChangeCelcius = (e) => {
    setCelsius(e.target.value);
    setFahrenheit(e.target.value * (9 / 5) + 32);
  };

  return (
    <Row className="justify-content-center align-items-center mt-5 ">
      <input value={celsius} onChange={handleChangeCelcius}></input>
      <label className="my-auto mr-4">Celsius</label>
      <input value={fahrenheit} onChange={handleChangeFahrenheit}></input>
      <label className="my-auto">Fahrenheit</label>
    </Row>
  );
};

export default TempConverter;
