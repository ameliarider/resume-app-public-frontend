import { ResumesIndex } from "./ResumesIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import {ResumesShow} from "./ResumesShow";

export function ResumesPage() {
  const [students, setStudents] = useState([]);
  // const [isStudentsShowVisible, setIsStudentsShowVisible] = useState(false);
  // const [currentStudent, setCurrentStudent] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };

  // const handleShow = (student) => {
  //   console.log("handleShow!");
  //   setCurrentStudent(student);
  // }

  useEffect(handleIndex, []);

  return (
    <main>
      <ResumesIndex students={students}  />
      {/* <ResumesShow student={currentStudent} onClick={handleShow}/> */}
    </main>
  )
}