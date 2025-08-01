import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ResumesShow() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`students/${id}.json`).then((response) => {
      setStudent(response.data);
    });
  }, [id]);

  if (!student) {
    return <div className="container mt-5">Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="d-flex align-items-center mb-4">
            <img
              src="https://media.istockphoto.com/id/1469197622/vector/default-avatar-female-profile-user-profile-icon-profile-picture-portrait-symbol-user-member.jpg?s=612x612&w=0&k=20&c=0W8IMIJcp5sixzLYjoAHRnXqwX6GyTVOCnLBzkqgx_Q="
              className="rounded-circle me-4"
              style={{ width: "120px", height: "120px", objectFit: "cover" }}
            />
            <div>
              <h2>{student.first_name} {student.last_name}</h2>
              <p className="mb-1"><strong>Email:</strong> {student.email}</p>
              <p className="mb-1"><strong>Phone:</strong> {student.phone_number}</p>
              <p>{student.short_bio}</p>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="border-bottom pb-2">Links</h4>
            <ul className="list-unstyled">
              <li><strong>LinkedIn:</strong> <a href={student.linkedin_url} target="_blank" rel="noopener noreferrer">{student.linkedin_url}</a></li>
              <li><strong>Twitter:</strong> {student.twitter_handle}</li>
              <li><strong>Website:</strong> <a href={student.personal_blog_website_url} target="_blank" rel="noopener noreferrer">{student.personal_blog_website_url}</a></li>
              <li><strong>Resume:</strong> <a href={student.online_resume_url} target="_blank" rel="noopener noreferrer">{student.online_resume_url}</a></li>
              <li><strong>GitHub:</strong> <a href={student.github_url} target="_blank" rel="noopener noreferrer">{student.github_url}</a></li>
            </ul>
          </div>

          <div className="mb-4">
            <h4 className="border-bottom pb-2">Education</h4>
            {student.educations?.length > 0 ? (
              <ul className="list-group">
                {student.educations.map((edu) => (
                  <li key={edu.id} className="list-group-item">
                    <strong>{edu.degree}</strong> at {edu.university_name}<br />
                    <small>{edu.start_date} to {edu.end_date}</small>
                    <p className="mb-0">{edu.details}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No education listed.</p>
            )}
          </div>

          <div className="mb-4">
            <h4 className="border-bottom pb-2">Experience</h4>
            {student.experiences?.length > 0 ? (
              <ul className="list-group">
                {student.experiences.map((exp) => (
                  <li key={exp.id} className="list-group-item">
                    <strong>{exp.job_title}</strong> at {exp.company_name}<br />
                    <small>{exp.start_date} to {exp.end_date}</small>
                    <p className="mb-0">{exp.details}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No experience listed.</p>
            )}
          </div>

          <div className="mb-4">
            <h4 className="border-bottom pb-2">Projects</h4>
            {student.projects?.length > 0 ? (
              <ul className="list-group">
                {student.projects.map((project) => (
                  <li key={project.id} className="list-group-item">
                    <strong>{project.name}</strong><br />
                    <p className="mb-0">{project.description}</p>
                    {project.url && (
                      <p><a href={project.url} target="_blank" rel="noopener noreferrer">{project.url}</a></p>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No projects listed.</p>
            )}
          </div>

          <div className="mb-4">
            <h4 className="border-bottom pb-2">Skills</h4>
            {student.skills?.length > 0 ? (
              <div>
                {student.skills.map((skill) => (
                  <span key={skill.id} className="badge bg-secondary me-2 mb-2">
                    {skill.skill_name}
                  </span>
                ))}
              </div>
            ) : (
              <p>No skills listed.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
