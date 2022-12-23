import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../compoundComponents/Navbar";
import TableComponent from "./TableComponent";

function Student() {
  const [studentData, setStudentData] = useState([]);
  const fetchdata = async () => {
    const { data }: any = await axios.get(
      "https://walrus-app-2i7sp.ondigitalocean.app/student"
    );
    setStudentData(data.studentData);
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      <Navbar />
      <TableComponent items={studentData} />
    </>
  );
}

export default Student;
