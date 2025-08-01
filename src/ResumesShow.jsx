export function ResumesShow({student}) {
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
      <form>
        <div>
          LinkedIn Url: <input defaultValue={student.linkedIn_url}/>
        </div>
        <div>
          Twitter Handle: <input defaultValue={student.twitter_handle}/>
        </div>
        <div>
          Personal Blog/Website:<input defaultValue={student.personal_blog_website_url}/>
        </div>
        <div>
          Resume Url:<input defaultValue={student.online_resume_url}/>
        </div>
        <div>
          GitHub Url:<input defaultValue={student.github_url}/>
        </div>
      </form>
    </div>
  )
}
