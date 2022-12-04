import { Form, Button, Container, Row, Col } from "react-bootstrap";
import Footer from "../compoundComponents/Footer";
import Navbar from "../compoundComponents/Navbar";

function Signup() {
  return (
    <div>
      <Navbar />
      <Container>
        <Row className="justify-content-center">
          <Col md="4">
            <h1 className="text-center text-muted">Signup</h1>
            <Form>
              <Form.Group className="mb-3" controlId="firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  placeholder="John"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="lastname" placeholder="Doe" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="johdoe@mail.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="*****"
                />
              </Form.Group>
              <Button variant="success" className="w-100">
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}

export default Signup;
