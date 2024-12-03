const settings = {
  isSplash: false,
};

const seo = {
  title: "Yaswanth's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Yaswanth Varada Portfolio",
    type: "website",
    url: "https://yaswanthvarada.vercel.app/",
  },
};

//Home Page
const greeting = {
  title: "Yaswanth Varada",
  logo_name: "Yaswanth Varada",
  nickname: "FullStack Web Developer",
  subTitle:
    "Driven by a passion for innovation, I focus on building scalable systems and advancing my knowledge in AI and prompt engineering. With strong problem-solving skills, I thrive on addressing complex challenges and delivering effective solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1ZRWmLkC1SdJoT_2VNSAdHV36g4_bzGnW/view?usp=sharing",
  portfolio_repository: "https://wa.link/y4ua5b",
  githubProfile: "https://github.com/yaswanth-2005",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/yaswanth-2005",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/yaswanth-varada/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://www.youtube.com/@mahendra4919",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:yaswanthvarada20@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/yaswanth_varada/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive UIs with React, React Query, and Tailwind CSS",
        "⚡ Developing server-side apps with Node.js and Express",
        "⚡ Integrating APIs and databases for full-stack solutions.",
      ],
      softwareSkills: [
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
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#000000",
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
          skillName: "App Write",
          fontAwesomeClassname: "simple-icons:appwrite",
          style: {
            color: "#FD366E",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "ViteJS",
          fontAwesomeClassname: "simple-icons:vite",
          style: {
            color: "#646CFF",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: " #FFC400",
          },
        },
        {
          skillName: "React Query",
          fontAwesomeClassname: "simple-icons:reactquery",
          style: {
            color: " #FF4154",
          },
        },
      ],
    },
    {
      title: "AI & Prompt Engineering",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing high-quality prompts for AI models to improve output accuracy.",
        "⚡ Improving AI responses by adjusting prompts for specific tasks.",
        "⚡ Working with data to make AI systems smarter and more efficient.",
      ],
      softwareSkills: [
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "black",
          },
        },
        {
          skillName: "Gemini",
          fontAwesomeClassname: "simple-icons:googlegemini",
          style: {
            color: "#8E75B2",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/Yaswanth_Varada/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/23pa5a1218",
    },
    {
      siteName: "Geeks For Geeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "green",
      },
      profileLink: "https://www.geeksforgeeks.org/user/yaswanthvarada20/",
    },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:itch_io",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@mahendra_4919",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@mahendra_4919",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Vishnu Institute of Technology",
      subtitle: "Bachelor of technology in Information Technology",
      logo_path: "iiitk_logo.png",
      alt_name: "Vishnu Institute of Technology, Vishnupur, Bhimavaram",
      duration: "2023 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Full Stack Development, AWS.",
        "⚡ Technical Code Setter and WebDev Co-Lead at GDG, driving coding excellence and leading Web development initiatives.",
        "⚡ Organized a Hack-IT-Tron hackathon in collaboration with DOIT club at Vishnu Institute of Technology, fostering innovation and teamwork among aspiring developers.",
      ],
      website_link: "https://vishnu.edu.in/",
    },
    {
      title: "Smt B.Seetha Polytechnic",
      subtitle: "Diploma in Computer Management Engineering",
      logo_path: "seethapoly_logo.png",
      alt_name: "Smt B.Seetha Polytechnic, Vishnupur, Bhimavaram",
      duration: "2020 - 2023",
      descriptions: [
        "⚡ I have gained foundational knowledge in core software engineering subjects such as Data Structures, Algorithms, Database Management Systems, Operating Systems, Computer Architecture, and Artificial Intelligence during my studies at Smt B Seetha Polytechnic College.",
        "⚡ Apart from this, I have done courses on Web Development.",
      ],
      website_link: "https://seethapoly.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "TCS ION Career-Edge Young professionals Program",
      subtitle: "- Tata Consultancy Services",
      logo_path: "TCS.png",
      certificate_link:
        "https://www.linkedin.com/in/yaswanth-varada/details/certifications/",
      alt_name: "Hero Vired",
      color_code: "#000000",
    },
    {
      title: "SQL Certification",
      subtitle: "- HackerRank",
      logo_path: "hackerank.png",
      certificate_link:
        "https://www.linkedin.com/in/yaswanth-varada/details/certifications/",
      alt_name: "Harika Infotech",
      color_code: "#fff",
    },
    {
      title: "IT Essentials",
      subtitle: "- Cisco Networking Academy",
      logo_path: "cisco.png",
      certificate_link:
        "https://www.linkedin.com/in/yaswanth-varada/details/certifications/",
      alt_name: "Cisco Networking Academy",
      color_code: "#fff",
    },
    // {
    //   title: "Data Science",
    //   subtitle: "- Alex Aklson",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Big Data",
    //   subtitle: "- Kim Akers",
    //   logo_path: "microsoft_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/file/d/164zKCFOsI4vGqokc-Qj-e_D00kLDHIrG/view",
    //   alt_name: "Microsoft",
    //   color_code: "#D83B0199",
    // },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have collaborated with teams and individuals as a full-stack web developer, specializing in building scalable applications with React, Node.js, and MongoDB. My expertise extends to creating dynamic user experiences, optimizing backend systems, and integrating AI-powered solutions. Additionally, I enjoy mentoring and contributing to communities, actively participating in tech events to foster innovation and knowledge-sharing.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Current Job",
      work: true,
      experiences: [
        {
          title: "Bachleor of Technology in Information Technology Student",
          company: "Vishnu Institute of Technology",
          company_url: "https://vishnu.edu.in/",
          logo_path: "iiitk_logo.png",
          duration: "2023 - Present",
          location: "Bhimavaram, Andhra Pradesh",
          description:
            "Currently pursuing a Bachelor of Technology in Information Technology at Vishnu Institute of Technology. Passionate about full-stack web development, focusing on building scalable applications and innovative solutions while exploring advancements in modern web technologies and AI integration.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "WebDev Co-Lead",
          company: "Google Developer Groups, Vishnu Institute of Technology",
          company_url: "https://vishnu.edu.in/",
          logo_path: "gdg_logo.png",
          duration: "October 2024 - Present",
          location: "Bhimavaram, Andhra Pradesh",
          description:
            "Contributed as WebDev Co-Lead at Google Developers Group, spearheading web development initiatives and leading workshops to promote cutting-edge web technologies and collaborative learning within the community",
          color: "#4285F4",
        },
        {
          title: "WebDev Lead & Designer",
          company: "DOIT Club, Vishnu Institute of Technology",
          company_url: "https://vishnu.edu.in/",
          logo_path: "DOIT_logo.jpg",
          duration: "January 2024 - Present",
          location: "Bhimavaram, Andhra Pradesh",
          description:
            "Organized a flagship 24-hour Hack-IT-Tron hackathon at Vishnu Institute of Technology, bringing together innovative minds to solve real-world challenges. As WebDev Lead, designed and developed event web assets while also contributing as a Poster Designer, ensuring impactful visual representation and seamless event execution",
          color: "#4285F4",
        },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "June 2023 - Present",
          location: "Work From Home",
          description:
            "Contributing to open-source projects, collaborating with global developers, and building impactful software solutions while continuously expanding programming expertise.",
          color: "#181717",
        },
        {
          title: "NCC A Certificate Holder",
          company: "Indian National Cadet Corps",
          company_url: "https://indiancc.nic.in/",
          logo_path: "ncc_logo.png",
          duration: "2018 - 2020",
          location: "Kaikaluru, Andhra Pradesh",
          description:
            "Exhibited leadership, discipline, and dedication to national service as an NCC A Certificate holder, fostering teamwork and personal growth through rigorous training and activities.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects showcase a blend of innovation and technical expertise, by Combining modern web development, AI integration, and prompt engineering. I specialize in building scalable MERN stack applications with intuitive React interfaces and secure Node.js backends. Leveraging AI and prompt engineering, I create intelligent, user-focused solutions with dynamic features, showcasing innovation and technical excellence.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "yash.jpeg",
    description:
      "I’d love to hear from you! Whether you have questions, collaboration ideas, or just want to connect, feel free to reach out. Let’s create something amazing together! Drop me a message below, and I’ll get back to you as soon as possible.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Kaikaluru, Eluru Dist, Andhra Pradesh - 521333",
    locality: "Opp Big Masjid Street",
    country: "India",
    region: "Andhra Pradesh",
    postalCode: "521333",
    streetAddress: "Humayun Street",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/Kaikaluru,+Andhra+Pradesh+521333/@16.5497787,81.1896145,14z/data=!3m1!4b1!4m6!3m5!1s0x3a363cda7c100547:0x65c8e6ac842c1b7!8m2!3d16.5527275!4d81.2129374!16s%2Fm%2F027x5hf?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8688464896",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
