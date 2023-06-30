import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  java,
  sql,
  c,
  py,
  figma,
  docker,
  meta,
  bkc,
  inogen,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  madewunity,
  stock,
  tetris,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Student",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "Python",
    icon: py,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "Beaverton Kitchen Cabinet and Stone, Inc.",
    icon: bkc,
    iconBg: "#E6DEDD",
    date: "January 2023 - May 2023",
    points: [
      "Developed an internal data dashboard using React web client, Django REST backend service, and Node to display customer information and purchase history",
      "Architected a two-factor authentication system for the internal dashboard to strengthen security within the workplace",
      "Improved user organization and search efficiency with filters by reducing overall data processing time by 32%",
      "Created a 3D modeling software using Unity3D and C# that randomly generates kitchen layouts with a given inventory",
    ],
  },
  {
    title: "Data Science Researcher",
    company_name: "Inogen",
    icon: inogen,
    iconBg: "#383E56",
    date: "August 2022 - May 2023",
    points: [
      "Researched the correlations between mechanical aspects of portable air concentrators and their performance by analyzing and processing data on voltage, power, and oxygen levels",
      "Collaborated with mentors from Inogen in an Agile environment to create relevant graphs from data derived from portable air concentrators using Python, SQL, R, and MongoDB to find significant associations",
      "Utilized OpenCV and Tensorflow to create an OCR script that translates PDF files to CSV files with 95% overall accuracy for simple data storage of health documents",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Machine Learning Tetris Bot",
    description:
      "Utilized Q-learning techniques and a Deep Neural Network (DNN) to train a bot to play classic Tetris optimally.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "keras",
        color: "pink-text-gradient",
      },
    ],
    image: tetris,
    source_code_link: "https://github.com/Penguins478/MachineLearningTetrisBot",
  },
  {
    name: "Quantitative Stock Prediction App",
    description:
      "Training an LSTM model on historic daily closing values to predict the value of publicly traded stocks. View it on the web app.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "sklearn",
        color: "green-text-gradient",
      },
      {
        name: "keras",
        color: "pink-text-gradient",
      },
    ],
    image: stock,
    source_code_link: "https://github.com/Penguins478/LSTM-Stock-Prediction-App",
  },
  {
    name: "3D Medieval Dungeon Game",
    description:
      "First-person medieval style game in a vast 3D dungeon with a multitude of weapons, monsters, and bosses.",
    tags: [
      {
        name: "unity3d",
        color: "blue-text-gradient",
      },
      {
        name: "csharp",
        color: "green-text-gradient",
      },
      {
        name: "gamedev",
        color: "pink-text-gradient",
      },
    ],
    image: madewunity,
    source_code_link: "https://github.com/Penguins478/3ddungeongame",
  },
];

export { services, technologies, experiences, testimonials, projects };
