import { ResumesIndex } from "./ResumesIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function ResumesPage() {
  const [students, setStudents] = useState([]);

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("students.json").then((response) => {
      console.log(response.data);
      setStudents(response.data);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <ResumesIndex students={students} />
    </main>
  )
}