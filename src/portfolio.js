/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋",
  title2: "Hariom Sharma",
  logo_name: "Hariom",
  nickname: "hariom / picleric",
  full_name: "Hariom Kumar",
  subTitle: "Java Developer, Open Source Enthusiast 🔥,  Always learning.",
  resumeLink:
    "https://drive.google.com/drive/u/0/folders/1kmEZ2toV49pnYs0LON_GmUjRI3QWjaqO",
  //resumeDownload: "./assests/images/Hariom Res E2.pdf",
  mail: "mailto:hariomnce@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/hariomnce",
  linkedin: "https://linkedin.com/in/hariom-sharma-477154177",
  gmail: "hariomnce@gmail.com",
  gitlab: "https://gitlab.com/hariomnce",
  facebook: "https://wwww.facebook.com/pratik.avinash.56",
  twitter: "https://twitter.com/Hariomnce?s=09",
  instagram: "https://www.instagram.com/hariom_sharma23/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend in Java, Springboot & Spring-Security",
        "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        "⚡ Building responsive website front end using ReactJS",
       // "⚡ Developing mobile applications using Flutter and Android",
        "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean",
      ],
      softwareSkills: [
      {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Springboot",
          fontAwesomeClassname: "simple-icons:springboot",
          style: {
            //color: "#61DAFB",
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Hibernate",
          fontAwesomeClassname: "simple-icons:hibernate",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        // {
        //   skillName: "PHP",
        //   fontAwesomeClassname: "simple-icons:php",
        //   style: {
        //     color: "#7377AD",
        //   },
        // },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        // {
        //   skillName: "NodeJS",
        //   fontAwesomeClassname: "simple-icons:node-dot-js",
        //   style: {
        //     color: "#339933",
        //   },
        // },

        // {
        //   skillName: "NPM",
        //   fontAwesomeClassname: "simple-icons:npm",
        //   style: {
        //     color: "#CB3837",
        //   },
        // },

        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#439743",
        //   },
        //},
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        // {
        //   skillName: "Android",
        //   fontAwesomeClassname: "simple-icons:android",
        //   style: {
        //     color: "#3DDC84",
        //   },
        // },
        // {
        //   skillName: "Flutter",
        //   fontAwesomeClassname: "simple-icons:flutter",
        //   style: {
        //     color: "#02569B",
        //   },
        // },
        // {
        //   skillName: "Dart",
        //   fontAwesomeClassname: "simple-icons:dart",
        //   style: {
        //     color: "#29B0EE",
        //   },
        // },
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },

        // {
        //   skillName: "jQuery",
        //   fontAwesomeClassname: "simple-icons:jquery",
        //   style: {
        //     color: "#0865A6",
        //   },
        // },

        // {
        //   skillName: "Wordpress",
        //   fontAwesomeClassname: "simple-icons:wordpress",
        //   style: {
        //     color: "#207297",
        //   },
        // },

        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#CA1A22",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        // {
        //   skillName: "Python",
        //   fontAwesomeClassname: "simple-icons:python",
        //   style: {
        //     color: "#3776AB",
        //   },
        // },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Nalanda College Of Engineering",
      subtitle: "Bachelor of Technology",
      logo_path: "ssec.png",
      alt_name: "SSEC",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have completed my bachelors in Computer Science & Engineering",
        "⚡ I have studied core subjects like Java, Data Structures, DBMS, Networking, Security, etc.",
        "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
        // "⚡ I have studied core subjects like Data Structures, DBMS, Networking, Security, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://ncechandi.ac.in/",
    },
    {
      title: "SMRCK College",
      subtitle: "Senior Secondary",
      logo_path: "ssgandhy.jpeg",
      alt_name: "SSGC",
      duration: "2015 - 2017",
      descriptions: [
         "⚡ I have studied core subjects Physics, Chemistry, Mathematics, English, Hindi.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://smrck.co.in/",
    },
    {
      title: "Campus Public School",
      subtitle: "Secondary Education",
      logo_path: "cps.jpeg",
      alt_name: "SSGC",
      duration: "2011 - 2015",
      descriptions: [
         "⚡ I have studied core subjects Physics, Chemistry, Mathematics, English, Hindi, etc.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "https://www.facebook.com/cpspusa/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full Stack Development",
      subtitle: "IIT Kanpur",
      logo_path: "mongo.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1tPwkA16-QkGMCWoBMR1AUu7T9r6QVoU2/",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "Andriod Application Development",
      subtitle: "TEQUIP-III",
      logo_path: "hackathon1.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1LakvE3R5ub69iaaBsHf9VTj6tjmixG9p",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      title: "B-Model Workshop",
      subtitle: "IIT Bombay",
      logo_path: "bombay.png",
      certificate_link:
        "https://drive.google.com/drive/folders/1O6ASHq49pBcyl8ATbawovHJe70tatW1b",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#47A048",
    },
    // {
    //   title: "Cyber Security & Cyber Forensics",
    //   subtitle: "Workshop at IIT Bombay",
    //   logo_path: "iit.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
    //   alt_name: "Workshop",
    //   color_code: "#2AAFED",
    // },
    // {
    //   title: "MLH Local Hack Day: Build",
    //   subtitle: "Major League Hacking",
    //   logo_path: "mlh-logo.svg",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
    //   alt_name: "Google",
    //   color_code: "#fe0037",
    // },
    // {
    //   title: "Hack20",
    //   subtitle: "Flutter International Hackathon",
    //   logo_path: "flutter.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
    //   alt_name: "Flutter International Hackathon",
    //   color_code: "#2AAFED",
    // },

    // {
    //   title: "Postman Student Expert",
    //   subtitle: "Postman",
    //   logo_path: "postman.png",
    //   certificate_link:
    //     "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
    //   alt_name: "Postman",
    //   // color_code: "#f36c3d",
    //   color_code: "#fffbf3",
    // },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've completed one internship. I've mostly done projects on my own and I am actively looking for internships. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Java Developer",
          company: "NextGen Vision Technology",
          company_url: "https://www.nextgenvisiontech.com/",
          logo_path: "valora.jpeg",
          duration: "Nov 2021 - Present",
          location: "Noida, Uttar Pradesh",
          description: `Working on Web Application and Admin Panel Backend. I have worked on Springboot Backend.`,
           //Payment Gateway Integration and Microservice Architecture.
          //`,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        {
          title: "Trainee Software Engineer (Intern)",
          company: "Hello Travel",
          company_url: "https://www.hellotravel.com/",
          logo_path: "hello.png",
          duration: "Jan 2020 - Mar 2020",
          location: "Noida, Uttar Pradesh",
          description: `Train, manage and provide guidance to junior software development staff.
          Work closely with the Project Manager and Team Leads on change request functions.
          Develops new and maintains existing applications.
          Increased productivity and problem-solving technics by 20%.
          We primarily Java Development. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
          // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          color: "#0071C5",
        },
        // {
        //   title: "Full Stack Developer (Freelancer)",
        //   company: "NightOwls",
        //   company_url: "http://nightowls.company/",
        //   logo_path: "nightowls.jpg",
        //   duration: "Sep 2020 - Oct 2020",
        //   location: "Work From Home",
        //   description: `Work closely with the Client and Team on change request functions.
        //   We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
        //   `,
        //   // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
        //   color: "#ee3c26",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Community Lead",
          company: "Bauddhik-Geeks",
          company_url: "https://bauddhikgeeks.tech/",
          logo_path: "bauddhikgeeks.png",
          duration: "April 2021 - Sep 2021",
          location: "Work From Home",
          description:
            "Help Tech-Geeks so they get exposure to the technical world and enlighten their skills. Hence, the programming club highlight all the skills of the individual members and help them develop and groom their skills in a meaningful way. Help community members to learn and grow.",
          color: "#FBBD18",
        },
        {
          title: "Cross Winter of Code Mentor",
          company: "CWOC",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "Feb 2021 - April 2021",
          location: "Work From Home",
          description:
            "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
          color: "#4285F4",
        },
        // {
        //   title: "Campus Hustler",
        //   company: "Skillenza",
        //   company_url: "https://skillenza.com/",
        //   logo_path: "skillenza.png",
        //   duration: "Feb 2021 - Present",
        //   location: "Work from Home",
        //   description:
        //     "Spread Awareness of new Technologies and new Opportunities to Students and Grow Skillenza Community.",
        //   color: "#196acf",
        // },
        {
          title: "GDG Student Volunteer",
          company: "Google Developer Groups",
          company_url: "https://gdg.community.dev/",
          logo_path: "gdg.png",
          duration: "Oct 2020 - Feb 2021",
          location: "Work From Home",
          description:
            "Google Developer Group Surat Student Volunteer and Member.",
          color: "#D83B01",
        },
        // {
        //   title: "Postman Student Expert",
        //   company: "Postman",
        //   company_url: "https://www.postman.com/",
        //   logo_path: "postman.png",
        //   duration: "Feb 2020 - Present",
        //   location: "Work From Home",
        //   description:
        //     "Google Developer Group Surat Student Volunteer and Member.",
        //   color: "#D83B01",
        // },
        {
          title: "GitHub Student Developer",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github.png",
          duration: "Sep 2020 - Feb 2021",
          location: "Work from Home",
          description:
            "Contribute to Open Source Community and Open Source Project.",
          color: "#040f26",
        },
        {
          title: "Google Local Guide",
          company: "Google Map",
          company_url: "https://maps.google.com/localguides/",
          logo_path: "localguide.png",
          duration: "Sep 2019 - March 2020",
          location: "Work From Home",
          description:
            "Day-to-day responsibilities of helping local businesses to spread their business to the world. Helping users by writing reviews about different locations and spaces such as shops, malls, etc.",
          color: "#D83B01",
        },
        {
          title: "E. F. I. Student Volunteer",
          company: "ENVIRONMENTALIST FOUNDATION OF INDIA",
          company_url: "https://indiaenvironment.org/",
          logo_path: "efi.png",
          duration: "Nov 2017 - Oct 2018",
          location: "Work From Home",
          description:
            "Take time out over weekends to join a gang of nation builders, nature enthusiasts to conserve what is left.",
          color: "#5a900f",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create Springboot Backend Projects, Java Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "harikrushn.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Hariomnce?s=09",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "HRMS",
      url: "https://github.com/hariomnce/HRMS-Backend",
      description:
        "An app for helping Employee Management in Corporate field. HRMS has a feed feature which is help to get information from the folks. ",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Springboot",
          iconifyClass: "simple-icons:springboot", 
        },
        {
          name: "Hibernate",
          iconifyClass: "logos-hibernate",
        },
        {
          name: "Mysql",
          iconifyClass: "logos-mysql",
        },
        {
          name: "React Js",
          iconifyClass: "logos-react"
        },
        {
          name: "Swagger",
          iconifyClass: "logos-swagger",
        },
      ],
    },
    {
      id: "1",
      name: "Grocery Website",
      url: "https://github.com/hariomnce/Grocery-Website/tree/master/Project%20Grocy",
      description:
        "Awesome Community website for Grocery website",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      id: "13",
      name: "Billing System",
      url: "https://github.com/hariomnce/Billing-System",
      description:
        "An Billing System software is used to any tpe of Restaurants, Shop, Mall can use this software.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Springboot",
          iconifyClass: "simple-icons:springboot",
        },
        {
          name: "Hibernate",
          iconifyClass: "logos-hibernate",
        },
        {
          name: "Mysql",
          iconifyClass: "logos-mysql",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
      ],
    },

    {
      id: "2",
      name: "Blogging Application",
      url: "https://github.com/hariomnce/Bloging-Application",
      description:
        "Building real time Rest APIS for Blogging Application using Springboot, Spring security, JWT, Spring Data JPA (Hibernate) & MySql.",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "Springboot",
          iconifyClass: "simple-icons:springboot",
        },
        {
          name: "Hibernate",
          iconifyClass: "logos-hibernate",
        },
        {
          name: "Mysql",
          iconifyClass: "logos-mysql",
        },
        {
          name: "Swagger",
          iconifyClass: "logos-swagger",
        },
        {
          name: "Postman",
          iconifyClass: "logos-postman",
        },
      ],
    },

    {
      id: "3",
      name: "Personal Portfolio",
      url: "https://github.com/hariomnce/myportfolio.github.io",
      description:
        "A simple portfolio interface to know more about me",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        // {
        //   name: "ReactJS",
        //   iconifyClass: "logos-react",
        // },
      ],
    },

    // {
    //   id: "4",
    //   name: "personal-portfolio",
    //   url: "",
    //   description:
    //     "A simple command line interface based quiz app to know more about me :).",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    // },

    // {
    //   id: "3",
    //   name: "Bloggify",
    //   url: "",
    //   description: "A Simple REST API for Blog Application.",
    //   languages: [
    //     {
    //       name: "NodeJS",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    // },

    // {
    //   id: "4",
    //   name: "Stargazzers",
    //   url: "",
    //   description: "An Unofficial API for GitHub Repo Stars Count",
    //   languages: [
    //     {
    //       name: "NodeJs",
    //       iconifyClass: "logos-nodejs",
    //     },
    //   ],
    // },

    {
      id: "5",
      name: "React Portfolio Website",
      url: "",
      description:
        "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
      languages: [
        {
          name: "React Js",
          iconifyClass: "logos-react"
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "SCSS",
          iconifyClass: "vscode-icons:file-type-scss2",
        },
      ],
    },

    // {
    //   id: "6",
    //   name: "Automate Attendace",
    //   url: "",
    //   description: "Automation of Online Attendance using node js and python",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //   ],
    // },

    // {
    //   id: "7",
    //   name: "Automate Discord Bot",
    //   url: "",
    //   description:
    //     "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Python Selenium",
    //       iconifyClass: "logos-selenium",
    //     },
    //     {
    //       name: "Chromium Browser",
    //       iconifyClass: "openmoji-chromium",
    //     },
    //   ],
    // },

    // {
    //   id: "8",
    //   name: "Flask Blog",
    //   url: "",
    //   description: "A Simple Blog Web Application made using Flask Framework",
    //   languages: [
    //     {
    //       name: "Python",
    //       iconifyClass: "logos-python",
    //     },
    //     {
    //       name: "Flask",
    //       iconifyClass: "cib-flask",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "vscode-icons:file-type-html",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "vscode-icons:file-type-css",
    //     },
    //   ],
    // },

    {
      id: "9",
      name: "Netflix top series",
      url: "https://github.com/hariomnce/Netflix-top-series",
      description: "List of Top Netflix Series which is deployed to vercel.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "HTML5",
          iconifyClass: "logos-html-5",
        },
        {
          name: "CSS3",
          iconifyClass: "logos-css-3",
        },
      ],
    },

    // {
    //   id: "10",
    //   name: "COVID-19 Tracker",
    //   url: "",
    //   description:
    //     "Simple Covid-19 Tracker made using React and deployed to Vercel.",
    //   languages: [
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //   ],
    // },

    // {
    //   id: "11",
    //   name: "Food Order Static Website",
    //   url: "",
    //   description:
    //     "A simple static website related to food restaurants service. this is reasponsive as well.",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "PHP",
    //       iconifyClass: "logos-php",
    //     },
    //   ],
    // },

    // {
    //   id: "12",
    //   name: "NFT Launchpad",
    //   url: "",
    //   description: "NFT Launchpad crypto site portfolio",
    //   languages: [
    //     {
    //       name: "HTML5",
    //       iconifyClass: "logos-html-5",
    //     },
    //     {
    //       name: "CSS3",
    //       iconifyClass: "logos-css-3",
    //     },
    //     {
    //       name: "JavaScript",
    //       iconifyClass: "logos-javascript",
    //     },
    //     {
    //       name: "ReactJS",
    //       iconifyClass: "logos-react",
    //     },
    //   ],
    // },

  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
