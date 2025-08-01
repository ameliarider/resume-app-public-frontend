import { Link } from "react-router-dom";
// import { useState } from "react";

export function ResumesIndex({students}) {
    // const [currentStudent, setCurrentStudent] = useState({});

    // const handleShow = (student) => {
    // console.log("handleShow!");
    // setCurrentStudent(student);
    // }

  return (
    <div>
      <h1>All Students ({students.length})</h1>
      {students.map((student) => 
      <div key={student.id}>
        <img src="https://media.istockphoto.com/id/1469197622/vector/default-avatar-female-profile-user-profile-icon-profile-picture-portrait-symbol-user-member.jpg?s=612x612&w=0&k=20&c=0W8IMIJcp5sixzLYjoAHRnXqwX6GyTVOCnLBzkqgx_Q="></img>
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
