// Central configuration file for Shreya's Portfolio.
// Edit this file to easily update your website details, projects, skills, or achievements!

export const portfolioData = {
  hero: {
    name: "Shreya",
    title: "Aspiring Java Developer & Problem Solver",
    tagline: "Passionate about building efficient solutions through clean Java code, data structures, and algorithmic thinking.",
    avatarUrl: "/avatar.jpg", // Loads the generated custom illustration
    socials: {
      github: "https://github.com/ayerhs0904",
      linkedin: "https://www.linkedin.com/in/shreyaa-singh04/",
      email: "mailto:shreya2212s@gmail.com",
      twitter: "https://twitter.com"
    }

  },
  about: {
    bio: "Hi, I'm Shreya! I am a software engineer specializing in crafting luxury web interfaces and solving complex computational challenges. My toolkit spans from modern reactive frontends to highly optimized backend microservices and advanced Data Structures & Algorithms. I believe code should not only run flawlessly but also look stunning and feel completely intuitive. With a deep respect for rich typography, glassmorphism, and smooth tactile micro-animations, I build web solutions that leave a lasting impression.",
    stats: [
      { label: "DSA Solved", value: "300+" },
      { label: "Web Projects", value: "3+" },
      { label: "Core Stacks", value: "5+" }
    ],
    values: [
      {
        title: "Premium Engineering",
        desc: "I believe that software should be functional and visually magnificent. I treat CSS and typography with the same dedication as core algorithms."
      },
      {
        title: "Algorithmic Precision",
        desc: "With a strong focus on Java, Object-Oriented design patterns, and DSA, I build highly performant backends that handle data efficiently."
      },
      {
        title: "Empathetic UI/UX",
        desc: "Designing responsive layout structures, custom theme settings, and gentle glassmorphic overlays that make user interaction absolute joy."
      }
    ]
  },
  skills: {
    categories: [
      {
        name: "Web Development",
        skills: [
          { name: "React.js / Next.js", level: 95 },
          { name: "JavaScript / ES6+", level: 90 },
          { name: "HTML5 / CSS3 / Flexbox / Grid", level: 95 },
          { name: "Tailwind CSS / Premium Styling", level: 85 }
        ]
      },
      {
        name: "Systems & Backend",
        skills: [
          { name: "Core Java & OOP", level: 92 },
          { name: "Spring Boot & Spring Cloud", level: 85 },
          { name: "Node.js & Express", level: 80 },
          { name: "RESTful APIs & Microservices", level: 88 }
        ]
      },
      {
        name: "Computer Science Core",
        skills: [
          { name: "Data Structures & Algorithms", level: 90 },
          { name: "Database Design (PostgreSQL / MongoDB)", level: 82 },
          { name: "Git & Version Control", level: 95 },
          { name: "Docker & Cloud Deployments", level: 75 }
        ]
      }
    ]
  },
  projects: [
    {
      title: "PlaceBoard",
      desc: "A placement tracking platform for students to manage job applications, company prep, and placement updates.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/ayerhs0904/PlaceBoard",
      live: "https://example.com"
    },
    {
      title: "ShareBite",
      desc: "A food donation platform connecting food businesses with NGOs to reduce food waste.",
      tech: ["Spring Boot", "Spring Security", "JWT", "React", "MySQL"],
      github: "https://github.com/ayerhs0904/PlaceBoard",
      live: "https://share-bite-pi.vercel.app"
    },
    {
      title: "Hospital Management System (MediNova)",
      desc: "A full-stack hospital management system for managing patients, doctors, and appointments.",
      tech: ["Spring Boot", "React", "MySQL"],
      github: "https://github.com/ayerhs0904",
      live: "https://example.com"
    },
    {
      title: "Travel Blog",
      desc: "A dynamic travel vlog web application to explore and share travel experiences.",
      tech: ["React", "Spring Boot", "MySQL"],
      github: "https://github.com/ayerhs0904",
      live: "https://example.com"
    }
  ],
  achievements: [
    {
      date: "Active",
      title: "Competitive Coding",
      institution: "LeetCode & CodeChef",
      desc: "Solved 200+ LeetCode questions and 500+ CodeChef questions"
    },
    {
      date: "2025 - 2026",
      title: "Certifications",
      institution: "Udemy & GeeksForGeeks",
      desc: "Completed \"Master Spring Boot\" from Udemy in 2026 and \"Complete Java\" from GeeksForGeeks in 2025"
    }
  ],
  contact: {
    email: "shreya2212s@gmail.com",
    address: "Delhi",
    availability: "Available for Full-time Roles & High-End Freelancing"
  }
};
