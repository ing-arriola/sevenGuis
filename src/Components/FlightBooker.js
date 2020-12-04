import React, { useState } from "react";
import {
  Button,
  Row,
  DropdownButton,
  Dropdown,
  ButtonGroup,
  Col,
} from "react-bootstrap";

const FlightBooker = () => {
  const [title, setTitle] = useState("one-way flight");
  const options = ["one-way flight", "return flight"];

  const handleOptionSelection = (e) => {
    setTitle(e);
  };

  const items = options.map((option, index) => (
    <Dropdown.Item
      key={index}
      className={`${title === options[index] ? "active" : ""}`}
      eventKey={option}
    >
      {option}
    </Dropdown.Item>
  ));

  return (
    <Row className="justify-content-center align-items-center mt-5 ">
      <div className="d-flex flex-column">
        <DropdownButton
          as={ButtonGroup}
          variant="primary"
          title={title}
          onSelect={handleOptionSelection}
          className="mb-2"
        >
          {items}
        </DropdownButton>

        <input className="mb-2"></input>
        <input className="mb-2"></input>
        <Button className="btn-block">Book</Button>
      </div>
    </Row>
  );
};

export default FlightBooker;
