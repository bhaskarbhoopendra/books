import Footer from "./compoundComponents/Footer";
import Navbar from "./compoundComponents/Navbar";
import { useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  //react hooks
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <h1>
        You have clicked the button <span className="text-muted">{count}</span>{" "}
        number of time{" "}
      </h1>
      <Button
        onClick={() => setCount(count + 1)}
        className="mx-5 my-5"
        variant="success"
      >
        Increase Count
      </Button>
      <Footer />
    </div>
  );
}

export default App;
