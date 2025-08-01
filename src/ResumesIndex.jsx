import { Link } from "react-router-dom";

export function ResumesIndex({ students }) {
  return (
    <div className="container">
      <h1 className="mb-4">Student Resumes</h1>
      <div className="row">
        {students.map((student) => (
          <div key={student.id} className="col-md-6 mb-4">
            <div className="card h-100">
              <img
                src="https://media.istockphoto.com/id/1469197622/vector/default-avatar-female-profile-user-profile-icon-profile-picture-portrait-symbol-user-member.jpg?s=612x612&w=0&k=20&c=0W8IMIJcp5sixzLYjoAHRnXqwX6GyTVOCnLBzkqgx_Q="
                className="card-img-top"
                alt={`${student.first_name} ${student.last_name}`}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {student.first_name} {student.last_name}
                </h5>
                <p className="card-text"><strong>Email:</strong> {student.email}</p>
                <p className="card-text"><strong>Phone:</strong> {student.phone_number}</p>
                <p className="card-text"><strong>Bio:</strong> {student.short_bio}</p>
                <Link to={`/students/${student.id}`} className="btn btn-primary">
                  Full Resume
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

