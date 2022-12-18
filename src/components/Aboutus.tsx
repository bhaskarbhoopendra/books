import Footer from "../compoundComponents/Footer";
import Navbar from "../compoundComponents/Navbar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";

function Aboutus() {
  const [users, setUsers] = useState([]);
  const url = `https://api.github.com/users`;

  const output = async () => {
    const response = await axios.get(url);
    // console.log({ response });
    setUsers(response.data);
  };

  useEffect(() => {
    output();
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-center">Github users</h1>
      {users.map((user: any) => {
        return (
          <>
            <main className="d-flex">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={user.avatar_url} />
                <Card.Body>
                  <Card.Title>{user.login}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">{user.node_id}</Button>
                </Card.Body>
              </Card>
            </main>
          </>
        );
      })}
      <Footer />
    </>
  );
}

export default Aboutus;
