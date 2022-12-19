import { Table } from "react-bootstrap";

function Tablecomponent() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((item: any) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.text}</td>
              <td>{item.birthday}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default Tablecomponent;
