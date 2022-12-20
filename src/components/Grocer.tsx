import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Navbar from "../compoundComponents/Navbar";
import { FaPenSquare, FaTrash } from "react-icons/fa";
import "./grocery.css";

const getLocalstorage = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

function Grocer() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(getLocalstorage()) as any;
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(0);
  console.log({ editId, isEditing });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (editId && isEditing) {
      setList(
        list.map((item: any) => {
          if (item.id === editId) {
            return { ...item, title: inputValue };
          }
          return item;
        })
      );
      setIsEditing(false);
      setEditId(0);
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        title: inputValue,
      };
      setList([...list, newItem]);
      setInputValue("");
    }
  };

  const removeItem = (id: number): any => {
    setList(list.filter((item: any) => item.id !== id));
  };

  const editItem = (id: number): any => {
    const foundItem = list.find((item: any) => item.id === id);
    setInputValue(foundItem.title);
    setEditId(id);
    setIsEditing(true);
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <section>
      <Navbar />
      <Container>
        <Row className="text-center">
          <Col md={12}>
            <h3>Grocery List</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="e.g. maggie"
                name="item"
                value={inputValue}
                onChange={(e: any) => setInputValue(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                {`${isEditing ? "Edit" : "Create"}`}
              </button>
            </form>
          </Col>
          <Col md={12}>
            {list.map((item: any) => {
              const { id, title } = item;
              return (
                <div
                  key={id}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "25px",
                  }}
                >
                  <p>{title}</p>
                  <p onClick={() => editItem(id)} className="edit-icon">
                    <FaPenSquare />
                  </p>
                  <p onClick={() => removeItem(id)} className="delete-icon">
                    <FaTrash />
                  </p>
                </div>
              );
            })}
            <Button
              variant="danger"
              onClick={() => {
                setList([]);
              }}
            >
              Clear All
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Grocer;
