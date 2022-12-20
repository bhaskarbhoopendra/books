import Navbar from "../compoundComponents/Navbar";
import Values from "values.js";
import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import Colorcomponent from "../compoundComponents/ColorComponent";

function Color() {
  const [inputvalue, setInputValue] = useState("#2ecc71");
  const [list, setList] = useState([]);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: any) => {
    try {
      e.preventDefault();
      const colors: any = new Values(`${inputvalue}`).all(10);
      setList(colors);
      setIsError(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      <Navbar />
      <Row className="g-0">
        <form>
          <h3 className="text-center">Generate Random Colors</h3>
          <div
            className="mt-2"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <input
              style={{
                borderColor: `${isError ? "red" : ""}`,
              }}
              type="color"
              name="colorname"
              placeholder="#ffec12"
              onChange={(e: any) => setInputValue(e.target.value)}
            />
            <Button
              variant={`${isError ? "danger" : "success"}`}
              onClick={handleSubmit}
            >
              {`${isError ? "Wrong Input" : "Generate"}`}
            </Button>
          </div>
        </form>
        {list.map((color: any, index: number) => {
          console.log({ color });
          return (
            <Col key={index} md="2">
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
