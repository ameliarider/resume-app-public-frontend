export function ResumesIndex({students}) {
  return (
    <div>
      <h1>All Students ({students.length})</h1>
      {students.map((student) => 
      <div key={student.id}>
        <h3>Full Name: {student.first_name} {student.last_name} </h3>
        <h4>Email: {student.email}</h4>
        <h4>Phone Number: {student.phone_number}</h4>
        <p>Bio: {student.short_bio}</p>
      </div>
        )}
    </div>
  );
}