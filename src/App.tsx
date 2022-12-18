import Footer from "./compoundComponents/Footer";
import Navbar from "./compoundComponents/Navbar";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", function () {
      setWidth(window.innerWidth);
    });
  });

  return (
    <div>
      <Navbar />
      <section className="text-center">
        <h1>Winow Screen size</h1>
        <h1>{`${width} px`}</h1>
      </section>
      <Footer />
    </div>
  );
}

export default App;
