import Footer from "../compoundComponents/Footer";
import Navbar from "../compoundComponents/Navbar";
import axios from "axios";
import { useState } from "react";

function Aboutus() {
  const [store, setStore] = useState([]);

  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((response) => {
      setStore(response.data);
    })
    .catch((e) => {
      console.log(e);
    });
  console.log({ store });
  return (
    <div>
      <Navbar />
      <h1>About us</h1>
      <Footer />
    </div>
  );
}

export default Aboutus;
