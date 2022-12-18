import { useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import data from "../data/data";
import "./slider.css";

function Slider() {
  const [index, setIndex] = useState(0);
  const user: any = data[index];
  const { id, name, position, image, text } = user;

  const checkIndex = (index: any): any => {
    if (index < 0) {
      index = data.length - 1;
      return index;
    }
    if (index > data.length - 1) {
      index = 0;
      return index;
    }
    return index;
  };

  const nextDev = () => {
    setIndex((index) => {
      const newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const prevDev = () => {
    setIndex((index: any) => {
      const newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <>
      <Container className="text-center">
        <Card style={{ width: "40rem" }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{text}</Card.Text>
            <Card.Text className="position">{position}</Card.Text>
            <div className="section">
              <h1 onClick={prevDev}>{"<"}</h1>
              <h1 onClick={nextDev}>{">"}</h1>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default Slider;
