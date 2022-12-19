import Navbar from "../compoundComponents/Navbar";
import Values from "values.js";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Colorcomponent from "../compoundComponents/ColorComponent";

function Color() {
  const [color, setColor] = useState("#0984e3");
  const colors = new Values(color).all(10);

  return (
    <>
      <Navbar />
      <Row className="g-0">
        {colors.map((color: any, index: number) => {
          return (
            <Col md="2">
              <Colorcomponent
                key={index}
                hexColor={color.hex}
                {...color}
                index={index}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
}

export default Color;
