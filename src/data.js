import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaDatabase, FaJava, FaPhp, FaPython,
  FaAngular, FaReacteurope, FaGithub, FaGitlab, FaBitbucket, FaJenkins
} from "react-icons/fa";
import { 
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiJavascript, SiC, 
  SiDotnet, SiNextdotjs, SiVite, SiApache, SiPostgresql, SiFigma, 
  SiAdobe, SiTensorflow, SiNumpy, SiPandas, SiCmake, SiCanva 
} from "react-icons/si";
import { MdSecurity } from "react-icons/md";

export const aboutData = {
  name: "Gambo Suraj",
  title: "Full-Stack Web Developer",
  location: "Hyderabad, India",

  // Short & catchy for Home
  homeDescription: "Full-stack web developer with a passion for building modern, scalable, and user-focused applications. I enjoy turning ideas into smooth digital experiences.",

  // More detailed for About
  aboutDescription: "I specialize in developing responsive and scalable web applications using technologies like React, Node.js, Express, MongoDB, and MySQL. With a strong foundation in web development and a background in Cyber Security basics, I focus on creating reliable solutions that balance performance and security. I’m driven by curiosity, problem-solving, and continuous learning.",

  socials: {
    github: "https://github.com/GamboSuraj",
    linkedin: "https://www.linkedin.com/in/suraj-gambo",
    email: "https://mail.google.com/mail/?view=cm&fs=1&to=gambosuraj214@gmail.com&su=Hello%20Suraj&body=I%20am%20interested%20in%20connecting%20with%20you."
  }
}

export const skills = {
  frontend: [
    { name: "React", icon: FaReact },
    { name: "React Native", icon: FaReacteurope }, // closest icon for RN
    { name: "Next.js", icon: SiNextdotjs },
    { name: "Angular", icon: FaAngular },
    { name: "JavaScript", icon: SiJavascript },
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Vite", icon: SiVite }
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs },
    { name: "Express.js", icon: SiExpress },
    { name: ".NET", icon: SiDotnet },
    { name: "Java", icon: FaJava },
    { name: "PHP", icon: FaPhp },
    { name: "Python", icon: FaPython }
  ],
  database: [
    { name: "MySQL", icon: SiMysql },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Postgres", icon: SiPostgresql },
    { name: "Database", icon: FaDatabase }
  ],
  devops: [
    { name: "Apache", icon: SiApache },
    { name: "Jenkins", icon: FaJenkins },
    { name: "GitHub", icon: FaGithub },
    { name: "GitLab", icon: FaGitlab },
    { name: "Bitbucket", icon: FaBitbucket },
    { name: "CMake", icon: SiCmake }
  ],
  design: [
    { name: "Figma", icon: SiFigma },
    { name: "Canva", icon: SiCanva },
    { name: "Adobe", icon: SiAdobe }
  ],
  ai: [
    { name: "TensorFlow", icon: SiTensorflow },
    { name: "NumPy", icon: SiNumpy },
    { name: "Pandas", icon: SiPandas }
  ],
  others: [
    { name: "C", icon: SiC },
    { name: "Cyber Security Basics", icon: MdSecurity }
  ]
}



export const projects = [
  { title: "Sociopedia", description: "Full Stack Social Media Web App built with MERN.", repo: "https://github.com/USERNAME/sociopedia" },
  { title: "Rapid-Whatsapp", description: "Updated messaging app project.", repo: "https://github.com/USERNAME/rapid-whatsapp" },
  { title: "Weather-App", description: "React.js weather app (5 day forecast) using OpenWeatherMap API.", repo: "https://github.com/USERNAME/weather-app" },
  { title: "Shopping-Website", description: "E-commerce website with 150+ women's clothing products.", repo: "https://github.com/USERNAME/shopping-website" },
  { title: "Resume-Builder", description: "Web-based tool to create and customize professional resumes.", repo: "https://github.com/USERNAME/resume-builder" },
  { title: "Easy-Consulting", description: "Software agency full-stack website with MERN stack and multiple features.", repo: "https://github.com/USERNAME/easy-consulting" },
  { title: "Crypto-Tracker", description: "Cryptocurrency tracker built with React.js and Material UI.", repo: "https://github.com/USERNAME/crypto-tracker" },
  { title: "Invoice-Generator", description: "Invoice creator project built with React and jspdf-react.", repo: "https://github.com/USERNAME/invoice-generator" },
  { title: "Chat Application", description: "Real-time chat application using React.js and Socket.io.", repo: "https://github.com/USERNAME/chat-application" },
  { title: "Amazon Clone Demo", description: "Demo UI for Amazon-like store.", repo: "https://github.com/GamboSuraj/amazon-clone-demo" },
  { title: "Netflix Home Page", description: "Static recreation of Netflix homepage.", repo: "https://github.com/GamboSuraj/Home-Page-of-Netflix-" },
  { title: "Tic Tac Toe", description: "Classic JS game.", repo: "https://github.com/GamboSuraj/Tic-Tac-Toe" },
  { title: "Book Finder", description: "Search for books using an API.", repo: "https://github.com/GamboSuraj/book-finder" },
  { title: "E-commerce Website", description: "Modern e-commerce with MERN stack, Redux Toolkit, Material UI, and REST APIs.", repo: "https://github.com/GamboSuraj/ecommerce-website" },
  { title: "Event Management System", description: "Manage events with MERN stack.", repo: "https://github.com/GamboSuraj/event-management-system-" },
  { title: "A Blog Platform", description: "Blogging website built with MERN stack and Redux.", repo: "https://github.com/GamboSuraj/A-Blog-Platform" },
  { title: "Public Holiday Finder Using API", description: "Find public holidays using API.", repo: "https://github.com/GamboSuraj/public-holiday-finder-using-API" },
  { title: "AI Powered Camera App", description: "AI-powered camera application.", repo: "https://github.com/GamboSuraj/AI-Powered-Camera-App" },
  { title: "Calculator", description: "Simple calculator in HTML/JS.", repo: "https://github.com/GamboSuraj/calculator" },
  { title: "Currency Converter", description: "Convert currencies using HTML/JS.", repo: "https://github.com/GamboSuraj/currency-converter" },
  { title: "Todo List", description: "Simple JavaScript todo list app.", repo: "https://github.com/GamboSuraj/todo-list" },
  { title: "Temperature Converter", description: "Convert temperatures using HTML.", repo: "https://github.com/GamboSuraj/temperature-converter" },
  { title: "Landing Page", description: "Responsive landing page using CSS.", repo: "https://github.com/GamboSuraj/Landing-page" },
  { title: "Rock-Paper-Scissors", description: "Online rock paper scissors game.", repo: "https://github.com/GamboSuraj/Rock-Paper-Scissors" },
  { title: "Currency Calculator", description: "Currency calculator using API.", repo: "https://github.com/GamboSuraj/Currency-Calculator" },
  { title: "Online-IDE", description: "AI online IDE supporting multiple languages and online compiler.", repo: "https://github.com/USERNAME/online-ide" }
];

