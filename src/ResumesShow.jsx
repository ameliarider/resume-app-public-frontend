import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export function ResumesShow() {
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  useEffect(() => {
    axios.get(`students/${id}.json`).then((response) => {
      console.log("Student data:", response.data);
      console.log("Skills:", response.data.skills);
      setStudent(response.data);
    });
  }, [id]);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>More Information:</h1>
      <p>LinkedIn Url: {student.linkedin_url}</p>
      <p>Twitter Handle: {student.twitter_handle}</p>
      <p>Personal Blog/Website: {student.personal_blog_website_url}</p>
      <p>Resume Url: {student.online_resume_url}</p>
      <p>GitHub Url: {student.github_url}</p>
      <div>
        <strong>Education:</strong>
        {student.educations?.length > 0 ?(
          <ul>
            {student.educations.map((edu) => (
              <li key={edu.id}>
                {edu.degree} - {edu.university_name} 
                ({edu.start_date} to {edu.end_date})
              </li>
            ))}
          </ul>
        ):( 
          <p>No Education Listed</p>
        )}
      </div>
      <div>
        <strong>Experience:</strong>
        {student.experiences?.length > 0 ?(
          <ul>
            {student.experiences.map((exp) => (
              <li key={exp.id}>
                {exp.job_title} - {exp.company_name} 
                ({exp.start_date} to {exp.end_date})
              </li>
            ))}
          </ul>
        ):( 
          <p>No Experience Listed</p>
        )}
      </div>
      <div>
        <strong>Skills:</strong>
        {student.skills?.length > 0 ?(
          <ul>
            {student.skills.map((skill) => (
              <li key={skill.id}>
                {skill.name}
              </li>
            ))}
          </ul>
        ):( 
          <p>No Skills Listed</p>
        )}
      </div>
      <div>
        <strong>Projects:</strong>
        {student.projects?.length > 0 ?(
          <ul>
            {student.projects.map((project) => (
              <li key={project.id}>
                {project.name} - {project.description} 
              </li>
            ))}
          </ul>
        ):( 
          <p>No Projects Listed</p>
        )}
      </div>
    </div>
  )
}
