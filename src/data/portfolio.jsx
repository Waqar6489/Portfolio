import { FaPython, FaHtml5, FaCss3Alt, FaWordpress, FaGithub, FaBootstrap, FaDatabase, FaArchive, FaGraduationCap, FaGlobe } from "react-icons/fa";
import { SiDjango, SiJavascript, SiTailwindcss, SiPostgresql, SiMysql } from "react-icons/si";
import { TbApi } from "react-icons/tb"; // Excellent choice for REST API
import { SiJsonwebtokens } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { GiTrophyCup } from "react-icons/gi";
import { IoTrophy } from "react-icons/io5";
import { GrOracle } from "react-icons/gr";




// import images from 'images'
export const personalInfo = {
  name: "Waqar Ali",
  roles: ["Full Stack Developer", "React + Django Engineer", "WordPress Expert"],
  email: "waqarali6489@gmail.com",
  phone: "03186965159",
  location: "Gojra, Faisalabad, Pakistan",
  github: "https://github.com/Waqar6489",
  linkedin: "https://www.linkedin.com/in/waqar-ali-software-engineer",
  whatsapp: "https://wa.me/923186965159",
  bio: "I'm a Software Engineer graduating from Riphah International University in 2026, passionate about building scalable, user-focused web applications. I've worked remotely with international clients in the UK and USA, and I love bridging the gap between powerful backends and polished frontend experiences.",
};

export const skills = [
  {
    category: "Frontend",
    icon: <HiOutlineDesktopComputer/>,
    color: "#38bdf8",
    items: [
      { name: "React.js", level: 88 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Bootstrap", level: 88 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "#a78bfa",
    items: [
      { name: "Python", level: 85 },
      { name: "Django", level: 82 },
      { name: "Flask", level: 78 },
      { name: "REST APIs", level: 83 },
      { name: "JWT Auth", level: 80 },
    ],
  },
  {
    category: "Database & Tools",
    icon: <FaDatabase />,
    color: "#22d3ee",
    items: [
      { name: "PostgreSQL", level: 75 },
      { name: "MySQL", level: 78 },
      { name: "Git / GitHub", level: 88 },
      { name: "Oracle APEX", level: 65 },
      { name: "ClickUp", level: 80 },
    ],
  },
  {
    category: "CMS & Other",
    icon: <HiOutlineClipboardDocumentList />,
    color: "#fb7185",
    items: [
      { name: "WordPress", level: 92 },
      { name: "WooCommerce", level: 82 },
      { name: "Elementor", level: 90 },
      { name: "Vercel", level: 78 },
      { name: "Responsive Design", level: 92 },
    ],
  },
];

export const techIcons = [
 
   { name: "Python", icon: <FaPython/>, color: "#3776AB" },
  { name: "Django", icon: <SiDjango/>, color: "#56B287" },
  { name: "Flask", icon: <BiLogoFlask/>, color: "#FF0000" },
  { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
  { name: "HTML5", icon: <FaHtml5 />, color: "#E34F26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
  { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "GitHub", icon: <FaGithub />, color: "#181717" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
  { name: "Oracle APEX", icon: <GrOracle />, color: "#F80000" },
  { name: "REST API", icon: <TbApi />, color: "#0052CC" }, // Updated to an official dev color
  { name: "JWT", icon: <SiJsonwebtokens />, color: "#D63AFF" },
]

export const projects = [
  {
    id: 1,
    title: "AI Personal Finance Planner",
    category: "Django",
    description: "Full-stack AI-powered finance management app. Features expense tracking, budget analysis, and AI-driven financial advice. Built as Final Year Project.",
    tech: ["React.js", "Django", "PostgreSQL", "AI/ML", "REST API"],
    url: "https://ai-personal-finance-deploy.vercel.app",
    featured: true,
    gradient: "from-blue-500/20 to-purple-500/20",
    icon: '/project/FYP.png',
  },
  {
    id: 2,
    title: "Softech Digital Group Website",
    category: "Flask",
    description: "Corporate website for a UK-based digital agency. Built with React.js frontend and Flask backend, featuring modern UI and dynamic content management.",
    tech: ["React.js", "Flask", "Python", "Tailwind CSS"],
    url: "https://softect-digital-group.vercel.app/",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: '/project/Softech.png',
  },
  {
    id: 3,
    title: "E-comerce Website",
    category: "Django",
    description: "Secure RESTful API backend built with Django REST Framework, featuring JWT authentication, user management, and comprehensive endpoint documentation.",
    tech: ["React.js", "Django","Python","JWT", "Tailwind CSS","PostgreSQL"],
    url: "https://github.com/Waqar6489/E-commerce-Website",
    featured: true,
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: '/project/Ecom.png',
  },
  {
    id: 4,
    title: "XPS Express E-Commerce",
    category: "WordPress",
    description: "Full-featured e-commerce website built on WordPress with WooCommerce. Includes product management, payment integration, and responsive design.",
    tech: ["WordPress", "WooCommerce", "Elementor", "CSS3"],
    url: "https://xpsxpressdc.com/",
    featured: false,
    gradient: "from-purple-500/20 to-pink-500/20",
    icon: '/project/XPSX.png',
  },
  {
    id: 5,
    title: "Enviro Health Testing",
    category: "WordPress",
    description: "Maintained and optimized WordPress websites for GAO Tek, a US-based B2B technology company. Performed audits, UI improvements, and performance optimization.",
    tech: ["WordPress", "HTML", "CSS", "SEO", "Elementor"],
    url: "https://envirohealthtesting.xo.je/",
    featured: false,
    gradient: "from-green-500/20 to-cyan-500/20",
    icon: '/project/Health.png',
  },
  {
    id: 6,
    title: "Enviro Construct Testing",
    category: "WordPress",
    description: "Maintained and optimized WordPress websites for GAO Tek, a US-based B2B technology company. Performed audits, UI improvements, and performance optimization.",
    tech: ["WordPress", "HTML", "CSS", "SEO", "Elementor"],
    url: "https://www.enviroconstructtest.xo.je/",
    featured: false,
    gradient: "from-orange-500/20 to-red-500/20",
    icon: '/project/Construct.png',
  },
  {
    id: 7,
    title: "Tweet App",
    category: "Django",
    description: "Tweet App built on Django. Features Authentication, Authorizations, Search tweet using title and CRUD opertions for everyone.",
    tech: ["Django","Python", "HTML", "Boostrap","SQL-Lite"],
    url: "https://github.com/Waqar6489/Tweet-App",
    featured: false,
    gradient: "from-teal-500/20 to-green-500/20",
    icon: '/project/Tweet.png',
  },
  {
    id: 8,
    title: "Oracle APEX Dashboard",
    category: "Oracle Apex",
    description: "Enterprise data dashboard built on Oracle APEX platform. Features data visualization, reporting, and dynamic content rendering for business analytics.",
    tech: ["Oracle APEX", "SQL", "PL/SQL", "JavaScript"],
    url: "https://github.com/Waqar6489",
    featured: false,
    gradient: "from-red-500/20 to-orange-500/20",
    icon: '/project/Oracle.png',
  },
  {
    id: 9,
    title: "Task App",
    category: "Django",
    description: "Task Management App built on Django. Features Authentication, Authorizations, and CRUD opertions for everyone.",
    tech: ["Django", "Python","HTML", "CSS", "SQL-Lite"],
    url: "https://github.com/Waqar6489/Task-APP",
    featured: false,
    gradient: "from-red-500/20 to-orange-500/20",
    icon: '/project/task.png',
  },
];

export const experience = [
  {
    id: 1,
    role: "Web Developer (Remote)",
    company: "Softech Digital Group",
    location: "UK & Pakistan",
    duration: "6 Months",
    period: "2025 – 2026",
    color: "#38bdf8",
    achievements: [
      "Developed and maintained web application features using Python and WordPress",
      "Assisted in database design, ensuring data integrity and optimal query performance",
      "Conducted testing and debugging activities across frontend and backend layers",
      "Collaborated with international team members across UK and Pakistan time zones",
    ],
    url: "https://softechdigitalgroup.com/",
  },
  {
    id: 2,
    role: "WordPress Developer (Remote)",
    company: "GAO Tek Inc",
    location: "USA (Remote)",
    duration: "4 Months",
    period: "(Sept - Dec) 2025",
    color: "#a78bfa",
    achievements: [
      "Developed, maintained, and optimized WordPress websites for GAO Tek's B2B technology platform",
      "Performed comprehensive site audits covering performance, SEO, and accessibility",
      "Awarded 'Best Intern of the Month' (November) for delivering high-quality work on schedule",
      "Coordinated with US-based stakeholders to meet business requirements and deadlines",
    ],
    url: "https://gaotek.com/",
  },
];

export const education = [
  {
    degree: "BS Software Engineering",
    institution: "Riphah International University Faisalabad",
    period: "2022 – 2026",
    color: "#22d3ee",
    highlights: [
      "Final Year Project: AI Personal Finance Planner (React.js + Django)",
      "Focused on full-stack development, databases, and AI/ML fundamentals",
      "Active member of university tech community",
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title: "Best Intern of the Month",
    issuer: "GAO Tek Inc, USA",
    date: "November 2025",
    icon: <IoTrophy className="text-[#E3B421]"/>,
    color: "#fbbf24",
    description: "Awarded for outstanding performance, delivering high-quality WordPress projects consistently on schedule while working with the US-based team.",
  },
  {
    id: 2,
    title: "AI Finance Planner — FYP",
    issuer: "Riphah International University",
    date: "2026",
    icon: <FaGraduationCap className="text-neon-blue"/>,
    color: "#38bdf8",
    description: "Completed Final Year Project building an AI-powered personal finance planner, demonstrating proficiency in React, Django, and AI integration.",
  },
  {
    id: 3,
    title: "International Remote Experience",
    issuer: "UK & USA Clients",
    date: "2025 – 2026",
    icon: <FaGlobe className="text-[#a78bfa]"/>,
    color: "#a78bfa",
    description: "Successfully collaborated with international clients in the UK and USA, gaining cross-cultural communication and remote work expertise.",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Softech Digital Group",
    role: "Client — UK",
    text: "Waqar consistently delivered well-structured, maintainable code. His ability to handle both Python backend tasks and WordPress front-end work made him a versatile asset to our team.",
    avatar: "S",
    color: "#38bdf8",
  },
  {
    id: 2,
    name: "GAO Tek Inc",
    role: "Employer — USA",
    text: "Outstanding intern who went above and beyond expectations. Waqar's work on our WordPress platform was thorough, professional, and delivered on time every single sprint. Truly earned 'Best Intern of the Month'.",
    avatar: "G",
    color: "#a78bfa",
  },
  {
    id: 3,
    name: "University Supervisor",
    role: "Riphah International University",
    text: "Waqar's Final Year Project demonstrated a solid grasp of full-stack architecture. The AI Finance Planner was one of the most technically complete projects presented in the batch.",
    avatar: "R",
    color: "#22d3ee",
  },
];
