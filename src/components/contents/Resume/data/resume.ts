const introData = {
  name: "Chanatpakorn Sirintronsopon",
  nickname: "Aungpao",
  phone: "+6695-482-5927",
  email: "csirintronsopon8@gmail.com",
  location: "Bangkok, Thailand",
  github: "ChanatpakornS",
  website: "chanatpakorn.me",
  linkedin: "chanatpakorn-sirintronsopon-85156227a",
};

// TODO: Edit this draft data
const techData = {
  languages: ["Go", "Python", "JavaScript", "TypeScript"],
  frameworks: ["React", "Astro", "Tailwind CSS"],
  tools: ["Git", "Docker", "Kubernetes", "Redis"],
};

// TODO: Edit this draft data
const educationData = [
  {
    academic: "Chulalongkorn University",
    degree: "B.Eng in Computer Engineering",
    GPA: "3.70",
    endYear: "Expected May 2026",
  },
];

const workData = [
  {
    position: "Software Engineer - Internship",
    company: "Dime!",
    url: "https://dime.co.th",
    years: ["July 2025", "August 2025"],
    details: [
      "Maintained and enhanced the system using Hexagonal with Event-Driven Architecture in Go.",
      "Built internal APIs while ensuring system functionality through proper role-based access control and comprehensive testing.",
      "Implemented an in-memory caching mechanism to minimize API calls to the remote validation server.",
      "Worked closely with the team to implement Redis-based locking for Kubernetes to guarantee transaction atomicity and data consistency.",
    ],
  },
  {
    position: "Software Engineer - Part-time",
    company: "Softnetics",
    url: "https://www.softnetics.tech/",
    years: ["August 2025", "November 2025"],
    details: [
      "Developed a mobile social application using React Native with ElysiaJS as the backend",
      "Collaborated cross-functionally to design and deliver features aligned with business and technical requirements",
      "Built a seamless onboarding flow for first-time users, including cloud-based image upload integration",
      "Implemented interactive polling features and optimized performance through strategic data caching",
    ],
  },
  {
    position: "Software Engineer - Freelance",
    company: "Masterpaint",
    url: "https://www.masterpaint2548.com/",
    years: ["May 2024", "June 2024"],
    details: [
      "Developed a static web application using the Astro framework with a strong focus on performance and SEO optimization",
      "Built a user-friendly image gallery with integrated lightbox functionality",
      "Improved page load speed and overall performance by optimizing images using WebP format and implementing lazy loading",
    ],
  },
];

// TODO: Edit this draft data
const projectData = [
  {
    name: "Aconcert - ticket booking system",
    url: "https://github.com/CP-RektMart/aconcert-microservice",
    description: [
      "Developed a microservices-based system deployed on a Kubernetes cluster, preparing the environment for load testing using k6",
      "Optimized internal service performance by implementing gRPC for efficient inter-service communication",
      "Built a real-time ticket booking system with Server-Sent Events (SSE) and Redis Pub/Sub, utilizing Redis-based locking to ensure data consistency",
    ],
  },
  {
    name: "WSClinic",
    description: [
      "Developed a local-first desktop application for clinic management using Tauri with SQLite for embedded data storage",
      "Designed and implemented an intuitive dashboard and core features to improve operational efficiency, including appointment scheduling, patient record management, and billing",
    ],
  },
  {
    name: "MCP for myCourseVille",
    description: [
      "Built MCP server for myCourseVille as a connnector between myCourseVille and AI for the contexts.",
      "Implemented a monitioring system collected metrics and logs in Grafana",
    ],
  },
];

// TODO: Edit this draft data
const interestData = [
  "DevOps",
  "Cloud Computing",
  "Distributed Systems",
  "Operation Systems",
  "Optimization Techniques",
  "Software Architecture",
  "System Design",
];

export const resume = {
  intro: introData,
  techStack: techData,
  education: educationData,
  works: workData,
  projects: projectData,
  interests: interestData,
};
