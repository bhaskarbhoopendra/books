import { Table } from "react-bootstrap";
import CreateStudent from "./CreateStudent";

function TableComponent({ items }: any) {
  console.log({ items });
  return (
    <>
      <CreateStudent />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item: any) => {
            return (
              <tr>
                <td>{item.fullName}</td>
                <td>{item.email}</td>
                <td>{item.phoneNumber}</td>
                <td>
                  <p
                    style={{
                      color: "green",
                    }}
                  >
                    Edit
                  </p>
                  <p
                    style={{
                      color: "red",
                    }}
                  >
                    Delete
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default TableComponent;
