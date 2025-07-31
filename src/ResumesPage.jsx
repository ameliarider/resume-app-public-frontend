import { ResumesIndex } from "./ResumesIndex";

export function ResumesPage() {
  const students = [
    {
    first_name: "Alice",
    last_name: "Johnson",
    email: "alice.johnson@example.com",
    phone_number: "123-456-7890",
    short_bio: "Aspiring software engineer with a passion for web development and open-source contributions.",
    linkedin_url: "https://www.linkedin.com/in/alicejohnson",
    twitter_handle: "@alicecodes",
    personal_blog_website_url: "https://alicejohnson.dev",
    online_resume_url: "https://alicejohnson.dev/resume.pdf",
    github_url: "https://github.com/alicejohnson",
    photo: "https://example.com/photos/alice.jpg"
  },
  {
    first_name: "Bob",
    last_name: "Smith",
    email: "bob.smith@example.com",
    phone_number: "987-654-3210",
    short_bio: "Full-stack developer with a background in design and a love for teaching code.",
    linkedin_url: "https://www.linkedin.com/in/bobsmith",
    twitter_handle: "@bobsmithdev",
    personal_blog_website_url: "https://bobsmith.io",
    online_resume_url: "https://bobsmith.io/resume",
    github_url: "https://github.com/bobsmith",
    photo: "https://example.com/photos/bob.jpg"
  },
  {
    first_name: "Clara",
    last_name: "Nguyen",
    email: "clara.nguyen@example.com",
    phone_number: "555-123-4567",
    short_bio: "Machine learning enthusiast and back-end developer focused on data-driven apps.",
    linkedin_url: "https://www.linkedin.com/in/claranguyen",
    twitter_handle: "@claracodes",
    personal_blog_website_url: "https://claracodes.dev",
    online_resume_url: "https://claracodes.dev/resume.pdf",
    github_url: "https://github.com/claranguyen",
    photo: "https://example.com/photos/clara.jpg"
  }
  ];

  return (
    <main>
      <ResumesIndex students={students} />
    </main>
  )
}