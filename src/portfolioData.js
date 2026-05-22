// Central configuration file for Shreya's Portfolio.
// Edit this file to easily update your website details, projects, skills, or achievements!

export const portfolioData = {
  hero: {
    name: "Shreya",
    title: "Software Engineer & Web Architect",
    tagline: "Building premium digital experiences with pixel-perfect modern designs and robust algorithmic foundations.",
    avatarUrl: "/avatar.png", // Loads the generated custom illustration
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      email: "mailto:shreya.dev@example.com",
      twitter: "https://twitter.com"
    }
  },
  about: {
    bio: "Hi, I'm Shreya! I am a software engineer specializing in crafting luxury web interfaces and solving complex computational challenges. My toolkit spans from modern reactive frontends to highly optimized backend microservices and advanced Data Structures & Algorithms. I believe code should not only run flawlessly but also look stunning and feel completely intuitive. With a deep respect for rich typography, glassmorphism, and smooth tactile micro-animations, I build web solutions that leave a lasting impression.",
    stats: [
      { label: "DSA Solved", value: "500+" },
      { label: "Web Projects", value: "12+" },
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
      title: "AuraSpace Wellness",
      desc: "A luxury scheduling and client relations system designed for boutique spas. Features glassmorphic booking panels, reactive timezone configurations, and animated calendar streams.",
      tech: ["React.js", "CSS Grid", "Node.js", "Express"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "AlgoPulse Canvas",
      desc: "An interactive, elegant diagnostic dashboard visualizer for graph traversal and dynamic programming pathfindings. Rendered using HTML5 canvas with custom playback velocities.",
      tech: ["React.js", "DSA Algorithms", "Canvas API", "CSS Grid"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "SpringSecure Auth",
      desc: "An enterprise modular authentication microservice written in Java, leveraging Spring Security, OAuth2 protocols, and Redis distributed session caching under heavy load structures.",
      tech: ["Java", "Spring Boot", "Redis", "PostgreSQL"],
      github: "https://github.com",
      live: "https://example.com"
    },
    {
      title: "Lumina Studio Engine",
      desc: "A high-end responsive creative portfolio tailored for architectural firms. Rich in sliding transitions, custom layout galleries, and smooth inertia scroll animations.",
      tech: ["React.js", "Vanilla CSS", "Framer Motion Mock", "Vite"],
      github: "https://github.com",
      live: "https://example.com"
    }
  ],
  achievements: [
    {
      date: "Dec 2025",
      title: "Winner: Best UX/UI Design",
      institution: "Technica Global Hackathon",
      desc: "Spearheaded frontend layout and glassmorphic micro-animations for 'EcoFlow', leading the team to secure 1st place in visual presentation and core accessibility design."
    },
    {
      date: "Oct 2025",
      title: "LeetCode Contest Global Top 5%",
      institution: "LeetCode Competitive Board",
      desc: "Achieved a competitive coding ranking in the top 5% worldwide by consistently solving hard algorithmic tasks (graphs, DP, segment trees) under stringent time pressure."
    },
    {
      date: "Jun 2025",
      title: "Certified Professional Java Developer",
      institution: "Oracle University",
      desc: "Acquired advanced credentials validating extensive mastery over Java Core mechanics, parallel multi-threaded structures, functional streams, and microservice integration."
    }
  ],
  contact: {
    email: "shreya.dev@example.com",
    address: "Bangalore, India",
    availability: "Available for Full-time Roles & High-End Freelancing"
  }
};
