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

const workData = [
  {
    position: "Software Engineer - Internship",
    company: "Dime!",
    url: "https://dime.co.th",
    years: ["July 2025", "August 2025"],
    details: [
      "Maintained and enhanced the system using Hexagonal Architecture in Go.",
      "Built internal APIs while ensuring system functionality through proper role-based access control and comprehensive testing.",
      "Implemented an in-memory caching mechanism to minimize API calls to the remote validation server.",
      "Worked closely with the team to implement Redis-based locking to guarantee transaction atomicity and data consistency.",
    ],
  },
];

export const resume = {
  intro: introData,
  works: workData,
};
