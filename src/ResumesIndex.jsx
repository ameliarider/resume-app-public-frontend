import { Link } from "react-router-dom";
import { useState } from "react";

export function ResumesIndex({students}) {
    const [currentStudent, setCurrentStudent] = useState({});

    const handleShow = (student) => {
    console.log("handleShow!");
    setCurrentStudent(student);
    }

  return (
    <div>
      <h1>All Students ({students.length})</h1>
      {students.map((student) => 
      <div key={student.id}>
        <img src={student.photo}></img>
        <h3>Full Name: {student.first_name} {student.last_name} </h3>
        <p>Email: {student.email}</p>
        <p>Phone Number: {student.phone_number}</p>
        <p>Bio: {student.short_bio}</p>
        <Link to={`/students/${student.id}`}>More Details</Link>
      </div>
        )}
    </div>
  );
}
