import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  const renderedCounter = (
    <Row className="justify-content-center align-items-center mt-5 ">
      <label className="mr-4 my-auto "> {count} </label>
      <Button onClick={() => setCount(count + 1)}>Count</Button>
    </Row>
  );

  return <>{renderedCounter}</>;
};

export default Counter;
