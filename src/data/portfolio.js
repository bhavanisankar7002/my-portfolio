// Centralized Portfolio Configuration
// Edit all personal data, project details, skills, and links here.

export const portfolioData = {
  profile: {
    name: "Bhavani Sankar Challa",
    shortName: "Bhavani Sankar",
    headline: "CSE Student & Full-Stack Developer",
    subheadline: "CSE Student | Full-Stack Developer | Problem Solver",
    summary: "I am a Computer Science Engineering student interested in software development, web development, full-stack development, and building practical technology solutions.",
    bio: "I build practical, user-focused web applications and technology solutions that solve real-world problems.",
    availability: "Open to Internship Opportunities",

    // Editable contact & social links
    email: "bhavanisankar.challa@example.com",
    github: "https://github.com/bhavanisankar7002",
    linkedin: "https://www.linkedin.com/in/bhavani-sankar-challa-a2b992351/",
    location: "India",

    // Path to your resume PDF inside /public directory
    // Place your file at: public/resume/Bhavani-Sankar-Resume.pdf
    resumeUrl: "/resume/Bhavani-Sankar-Resume.pdf",

    // About Me card details (Editable)
    aboutDetails: {
      fullName: "Bhavani Sankar Challa",
      field: "Computer Science Engineering",
      focus: "Full-Stack Development",
      interests: ["Web Development", "Software Development", "Problem Solving", "Hackathons"],
      // Optional editable academic details
      institution: "Computer Science & Engineering Department",
      expectedGraduation: "2028",
      cgpaStatus: "Available upon request"
    }
  },

  skills: [
    {
      category: "Programming",
      description: "Core programming languages for logic and software design",
      items: [
        { name: "Java", level: "Core Foundations & OOP", icon: "Coffee" },
        { name: "JavaScript", level: "ES6+ & Asynchronous", icon: "Code2" },
        { name: "Python", level: "Scripting & Backend APIs", icon: "Terminal" }
      ]
    },
    {
      category: "Frontend",
      description: "Building responsive, modern, dynamic user interfaces",
      items: [
        { name: "HTML5", level: "Semantic Markup", icon: "Layout" },
        { name: "CSS3", level: "Responsive Design & Flex/Grid", icon: "Palette" },
        { name: "JavaScript", level: "DOM Manipulation & Async Logic", icon: "Zap" },
        { name: "React", level: "Component State & Hooks", icon: "Atom" }
      ]
    },
    {
      category: "Backend",
      description: "Server-side web APIs and business logic execution",
      items: [
        { name: "Node.js", level: "JavaScript Runtime Environment", icon: "Server" },
        { name: "Express.js", level: "REST API Development", icon: "Cpu" },
        { name: "FastAPI", level: "Python Microservices", icon: "Workflow" }
      ]
    },
    {
      category: "Database",
      description: "Relational and document storage solutions",
      items: [
        { name: "PostgreSQL", level: "Relational Queries & Schemas", icon: "Database" },
        { name: "MySQL", level: "Structured Data Storage", icon: "Table" },
        { name: "MongoDB", level: "Document Storage & Aggregation", icon: "Layers" }
      ]
    },
    {
      category: "Tools & Technologies",
      description: "Developer tooling, version control, and workflow software",
      items: [
        { name: "Git", level: "Version Control", icon: "GitBranch" },
        { name: "GitHub", level: "Code Hosting & Collaboration", icon: "Github" },
        { name: "REST APIs", level: "Web Architecture & Integration", icon: "Globe" },
        { name: "VS Code", level: "Primary Development IDE", icon: "FileCode" }
      ]
    }
  ],

  projects: [
    {
      id: "campussync",
      title: "CampusSync",
      badge: "Full-Stack Web App",
      shortDescription: "A web-based campus management platform designed to organize and streamline student and campus-related information through a centralized system.",
      problemSolved: "Campus administrative information, event announcements, and department notices are often fragmented across multiple channels, causing miscommunication and delays for students and faculty.",
      solution: "CampusSync centralizes notices, department details, academic updates, and event schedules into a single, intuitive role-aware web portal.",
      features: [
        "Centralized digital notice board for instant announcements",
        "Categorized department and event directory",
        "Role-based view structure for students and administration",
        "Responsive, mobile-friendly interface for quick campus access"
      ],
      technologies: ["React", "JavaScript", "Node.js", "Express.js", "Tailwind CSS"],
      myContribution: "Designed the full-stack architecture, developed responsive user interface components in React, and built REST API endpoints for notice management.",
      github: "#",
      liveDemo: "#",
      image: "/campussync.png"
    },
    {
      id: "civicfix-ai",
      title: "CivicFix AI",
      badge: "AI Concept Prototype",
      shortDescription: "An AI-assisted civic complaint management concept designed to help organize, prioritize, and track recurring public complaints more effectively.",
      problemSolved: "Local municipal departments struggle to process high volumes of unstructured public complaints, leading to duplicate tickets, missed urgent issues, and slow resolution times.",
      solution: "CivicFix AI introduces structured ticket intake, automated category tagging, duplicate complaint detection, and a clear status tracking interface for municipal teams.",
      features: [
        "Citizen complaint submission & registration portal",
        "Automated category tagging & urgency classification concept",
        "Recurring complaint pattern detection interface",
        "Municipal status dashboard for complaint tracking",
        "Priority handling queue for high-impact civic issues"
      ],
      technologies: ["React", "Python", "FastAPI", "Tailwind CSS", "MongoDB"],
      myContribution: "Created the frontend submission workflow and municipal dashboard UI, and integrated mock classification endpoints to validate the system workflow.",
      github: "#",
      liveDemo: "#",
      image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "smartform",
      title: "SmartForm",
      badge: "Frontend Tool",
      shortDescription: "A smart digital form solution focused on simplifying structured information collection and processing.",
      problemSolved: "Standard web forms often suffer from complex multi-step navigation, clumsy validation feedback, and high drop-off rates during structured data collection.",
      solution: "SmartForm provides a modular form engine with real-time validation, clean wizard step navigation, and instant data structured output.",
      features: [
        "Dynamic field rendering with real-time validation",
        "Clean multi-step form wizard interface",
        "Client-side input sanitization and inline feedback",
        "Structured data export capabilities (JSON / CSV format)",
        "Fully responsive layout styled with Tailwind CSS"
      ],
      technologies: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
      myContribution: "Architected reusable React hooks for multi-step form state management, validation feedback, and data export helper functions.",
      github: "#",
      liveDemo: "#",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "smart-patient-queue",
      title: "AI-Based Smart Patient Queue & Emergency Prioritization System",
      badge: "Healthcare Prototype",
      shortDescription: "An AI-assisted hospital queue management system designed to prioritize patients based on symptoms and vital information instead of relying only on traditional first-come-first-served queues.",
      problemSolved: "Emergency departments and clinics often face bottlenecks where urgent patients wait in standard first-come-first-served queues, potentially delaying critical medical care.",
      solution: "A web prototype that collects preliminary patient symptoms and basic vitals to suggest dynamic triage priority order to attending medical staff.",
      features: [
        "Patient self-registration kiosk UI",
        "Preliminary symptom and vital information entry",
        "Dynamic urgency classification & queue ordering algorithm",
        "Real-time medical staff control dashboard",
        "Doctor manual override control for safety compliance",
        "Public queue status display screen"
      ],
      technologies: ["React", "Node.js", "Express.js", "Python", "Tailwind CSS"],
      myContribution: "Developed the triage queue ordering logic, designed the doctor control panel interface, and constructed the real-time patient queue status view.",
      disclaimer: "This system is designed as an educational software prototype and concept application. It is not intended for actual clinical medical diagnosis.",
      github: "#",
      liveDemo: "#",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"
    }
  ],

  hackathons: [
    {
      id: "hackyatra",
      name: "HackYatra",
      type: "National-Level 36-Hour Hackathon",
      teamName: "TechZ",
      role: "Team Leader",
      achievement: "Qualified through 2 Preliminary Rounds & Reached National Finals",
      description: "Participated in HackYatra, a national-level 36-hour hackathon. Our team qualified through two rounds and reached the final round while working on a real-world civic technology problem.",
      highlights: [
        "Led Team TechZ through 36 continuous hours of architecture design, rapid development, and presentation prep.",
        "Passed two rigorous preliminary evaluation rounds against teams nationwide to secure a spot in the finals.",
        "Architected a working prototype addressing key real-world civic challenges within tight deadlines.",
        "Presented the project demonstration and technical pitch to expert judges."
      ],
      keySkills: ["Team Leadership", "Problem Solving", "Rapid Prototyping", "Full-Stack Development", "Public Pitching", "Time Management"]
    }
  ],

  achievements: [
    {
      id: 1,
      title: "HackYatra National Finalist & Team Leader",
      organization: "HackYatra 36-Hour Hackathon",
      date: "National Hackathon",
      description: "Led Team TechZ through two competitive selection rounds to reach the final round of a national-level 36-hour hackathon.",
      tags: ["Leadership", "Hackathon", "Problem Solving"]
    },
    {
      id: 2,
      title: "Practical Full-Stack Project Portfolio",
      organization: "Computer Science Engineering",
      date: "2024 - Present",
      description: "Developed practical web applications including CampusSync, CivicFix AI, SmartForm, and Smart Patient Queue system.",
      tags: ["React", "Full-Stack", "Software Engineering"]
    },
    {
      id: 3,
      title: "Core Computer Science & Web Engineering Focus",
      organization: "Academic & Hands-On Projects",
      date: "Ongoing",
      description: "Continuously expanding technical capabilities in software architecture, REST APIs, database management, and modern UI frameworks.",
      tags: ["Java", "JavaScript", "Python", "React"]
    }
  ]
};
