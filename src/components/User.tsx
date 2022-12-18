import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import Footer from "../compoundComponents/Footer";
import Navbar from "../compoundComponents/Navbar";
import data from "../data/data";

function Users() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  useEffect(() => {
    navigator.geolocation.watchPosition((pos) => {
      setLatitude(pos.coords.latitude);
      setLongitude(pos.coords.longitude);
    });
  });
  return (
    <>
      <Navbar />
      <h1>User</h1>
      <h3>
        {latitude} {longitude}
      </h3>
      <Footer />
    </>
  );
}

export default Users;
