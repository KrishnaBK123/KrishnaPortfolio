import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

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
  angular,
  git,
  figma,
  starbucks,
  tesla,
  carrent,
  jobit,
  tripguide,
  tripguide1,
  tripguide2,
  
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Developer",
    icon: backend,
  },
  {
    title: "Angular developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Angular",
    icon:   angular,
  },


  

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences: TExperience[] = [
  {
    title: "Full Stack Developer Intern",
    companyName: "Subhanu Technologies Pvt Ltd, Bengaluru",
    icon: starbucks,
    iconBg: "#383E56",
    date: "July 2024 - January 2025",
    points: [
      "Developed and optimized user-friendly and responsive UI/UX components for HR Hub and Teacher Tracker projects,using Figma, Angular, and Material UI, improving accessibility by 35%.",
      "Engineered scalable front-end applications in Angular and TypeScript, reducing load times by 30%through performance optimization.",
      "Integrated RESTful APIs with FastAPI, ensuring seamless data communication and real-time updates for HR and education management platforms.",
      " Collaborated in Agile environments, participating in sprints, daily stand-ups, and retrospectives, streamlining development cycles and enhancing team productivity.",
      "Worked on Teacher Tracker and HR Hub projects, developing scalable dashboards and data-driven insights for education and HR process automation.",
    ],
  },
  {
    title: "Full stack web Developement Intern",
    companyName: "Edureka Learning Center, Belagavi",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2023 - September 2023",
    points: [
      "Developed and maintained dynamic, responsive web applications using HTML, CSS, JavaScript, and PHP, improving website performance by 30%.",
      "Designed and implemented intuitive UI/UX components such as interactive forms, navigation menus, and user-friendly dashboards, enhancing user engagement.",
      "database management and executed complex MySQL queries to ensure efficient data retrieval, storage, and security.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Web Developer",
  //   companyName: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Full stack Developer",
  //   companyName: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "TeacherTracker",
    description:
      "TeacherTracker is a role-based education monitoring platform built with Angular, Material UI, FastAPI, and Firebase. It enhances rural education by enabling admins, teachers, and TSCs to track evaluations, manage projects, and monitor student progress. Real-time data sync and secure authentication ensure effective and scalable performance tracking using KPIs.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "tailwind",
      //   color: "pink-text-gradient",
      // },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Agri Media",
    description:
      "Agri Media is a social media platform designed for farmers, offering a space to share farming updates, access weather reports, view market prices, and connect with other agriculturists. Inspired by Instagram, it features posts, videos, messaging, and an agri marketplace to empower rural communities with knowledge, networking, and digital tools.",
    tags: [
      // {
      //   name: "react",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "restapi",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "scss",
      //   color: "pink-text-gradient",
      // },
    ],
    image: jobit,
    sourceCodeLink: "https://agrimedia.netlify.app/",
  },
  {
    name: "Smart HR Management ",
    description:
      "Smart HR Management is a cloud-based Generative AI powered HR CRM solution designed to streamline the recruitment process by automating the generation of interview questions based on a candidate's resume.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/OpenTechXLabs/SmartHRM",
  },
  {
    name: "Salma Cab Service",
    description:
      "Salma Cab Service is a smart cab booking platform that allows users to easily book rides through a user-friendly interface. It manages cab availability, tracks bookings, and updates trip status in real-time. Designed for local and long-distance travel, it offers reliable, efficient, and affordable transportation services for all users.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide2,
    sourceCodeLink: "https://salmacabs.great-site.net/",
  },
  {
    name: "Space Rental",
    description:
      "Space Rental is a booking platform where users can reserve spaces for meetings, offices, events, or rooms. It offers a user-friendly interface to browse, filter, and book available spaces by location, date, and type. The system ensures real-time availability, secure payments, and seamless scheduling for individuals and businesses.",
    tags: [
      // {
      //   name: "nextjs",
      //   color: "blue-text-gradient",
      // },
      // {
      //   name: "supabase",
      //   color: "green-text-gradient",
      // },
      // {
      //   name: "css",
      //   color: "pink-text-gradient",
      // },
    ],
    image: tripguide1,
    sourceCodeLink: "https://spacestay.netlify.app/",
  },
];

 export { services, technologies, experiences, testimonials, projects };
