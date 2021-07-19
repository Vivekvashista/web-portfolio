import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import Leetcode from '../assets/leetcode.svg';
import Codechef from '../assets/codechef.svg';
import hackerearth from '../assets/hackerearth.svg';

const constants = {
  navItems: ["Profile", "Experience", "Projects", "Education", "Certification and Achievements", "Recommendations"],
  interests: ["Full Stack Engineer", "Frontend Engineer", "React Developer", "Javascript Developer", "Web Developer"],
  socialHandles: [
    {
      image: Linkedin,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/vivekvashista/",
    },
    {
      image: Github,
      name: "Github",
      url: "https://github.com/vashistavivek",
    },
    {
      image: Leetcode,
      name: "LeetCode",
      url: "https://leetcode.com/offvivek524/",
    },
    {
      image: Codechef,
      name: "CodeChef",
      url: "https://www.codechef.com/users/vivek_vashista",
    },
    {
      image: hackerearth,
      name: "Hackerearth",
      url: "https://www.hackerearth.com/@vivek1540",
    },
  ],
  experiences: [
    {
      jobTitle: "Full Stack Engineer",
      company: "s759labs",
      startDate: new Date("2020-09-01"),
      endDate: "Present",
      responsibilities: [
        "I am 2nd employee in the company.",
        "We developed 3 React based web apps from scratch.",
        "Worked in an agile environment from developing features to release them in production.",
        "Written fault tolerant code, created interactive user interface (UI)",
        "Worked with Isomorphic React library in one of our product",
        "Implemented different workflows with Redux for flawless performance within the applications.",
        "Used web and browser APIs including local storage for synchronizing data locally for better UX.",
        "Created microservices in Spring Boot and enabled cache using Redis.",
        "Created APIs while maintaining informative logs for debugging post production.",
        "Used Git for saving codebase and Ubuntu node and nginx for deployment"
      ],
      techStack: ["JavaScript", "ReactJS", "NextJS", "Redux", "Material-UI", "Java", "Spring boot", "Redis", "PostgreSQL", "Git", "Ubuntu"],
      links: [
        {name: "SkillCounty", url: "https://skillcounty.com"},
        {name: "JobLe", url: "https://joble.in"},
      ]
    }
  ]
}

export const PersonalDetails = {
  MY_NAME: "Vivek Sharma",
  EMAIL: "offvivek524@gmail.com",
  CONTACT: "8909048705",
  SKILLS: [
    "JavaScript",
    "Java",
    "ReactJS",
    "NextJS",
    "Redux",
    "Material-UI",
    "HTML",
    "CSS",
    "Git",
    "Webpack (basic)",
    "Problem Solving",
  ]
}

export default constants;