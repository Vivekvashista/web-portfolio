import Linkedin from '../assets/linkedin.svg';
import Github from '../assets/github.svg';
import Leetcode from '../assets/leetcode.svg';
import Codechef from '../assets/codechef.svg';
import hackerearth from '../assets/hackerearth.svg';
import PortFolioPreview from '../assets/portfolioPreview.jpg';
import GoogleKeepPreview from '../assets/GoogleKeepPreview.jpg';
import PartSmartPreview from '../assets/ParkSmartPreview.png';

const constants = {
  navItems: ["Profile", "Experience", "Projects", "Education", "Recommendations"],
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
        "Written fault tolerant code, created interactive user interface (UI).",
        "Worked with Isomorphic React library in one of our product.",
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
  ],
  projects: [
    {
      id: 1,
      title: 'Web Portfolio',
      preview: PortFolioPreview,
      startDate: new Date('2021-07-01'),
      endDate: new Date('2021-07-01'),
      description: "Motivation behind this project is to showcase my professional profile.",
      techStack: ["ReactJS, React-router, Material-UI"],
      githubUrl: 'https://github.com/vashistavivek/web-portfolio',
      demoUrl: 'https://github.com'
    },
    {
      id: 2,
      title: 'Google Keep UI Clone',
      preview: GoogleKeepPreview,
      startDate: new Date('2020-08-01'),
      endDate: new Date('2020-08-01'),
      description: "This is just a clone of Google Keep.",
      techStack: ["HTML, CSS, JavaScript"],
      githubUrl: 'https://github.com/vashistavivek/Google-Keep-UI-Clone',
      demoUrl: 'https://vashistavivek.github.io/Google-Keep-UI-Clone/'
    },
    {
      id: 3,
      title: 'ParkSmart Android App',
      preview: PartSmartPreview,
      startDate: new Date('2020-06-01'),
      endDate: new Date('2020-07-01'),
      description: "This app enables users to find nearby parking locations on their fingers tip.",
      techStack: ["Android Studio, Java, XML, Firebase"],
      githubUrl: 'https://github.com/vashistavivek/ParkSmart',
      demoUrl: 'https://drive.google.com/file/d/1ihslIcbC5h8mqg9JI5lojeiij1_KJAJ6/view?usp=sharing'
    }
  ],
  education: [
    {
      id: 1,
      title: "B.Tech - Computer Science",
      college: "Raja Balwant Singh Engineering Technical Campus, Agra",
      subHeading: ["Affiliated to AKTU, Lucknow", "2016 - 20", "8.1 CGPA"]
    }
  ],
  certifications: [
    {name: 'React.js Essential Training', url: 'https://drive.google.com/file/d/11cVN0HcDjyZscX73nQX6brvP5HX-ymDp/view'},
    {name: 'Learning Rest APIs', url: 'https://drive.google.com/file/d/19n03hrE4XjT-Qxe6LYclXKGMFX6zJOKj/view'},
    {name: 'Learning Angular', url: 'https://drive.google.com/file/d/1o9STgQwhfq3W-abnfSRvs6ND9mfzUMl2/view'},
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
    "Spring Boot",
    "Redis",
    "PostgreSQL",
    "Git",
    "Problem Solving",
  ]
}

export default constants;