import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Giovanni EK Puc",
  initials: "GEP",
  location: "Inglewood California ",
  locationLink: "https://www.google.com/maps/place/Wrocław",
  about:"Student of manufacturing have",
  summary:"results-oriented student with hands-on experience in lean manufacturing and process optimization, seeking a position in a high-volume manufacturing environment. Eager to leverage my background in orbital tube welding and my practical experience with continuous improvement projects to drive both local and global efficiencies. Committed to contributing to team success through hard work, attention to detail, and excellent organizational skills." ",
  avatarUrl:"https://avatars.githubusercontent.com/u/1017620?v=4",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "Gioekpuk@gmail.com",
    tel: "+424-2400549",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/BartoszJarocki",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bjarocki/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/BartoszJarocki",
        icon: XIcon,
      },
    ],
  },
 education: [
  {
    school: "Hawthorne High School School of Engineering and Manufacturing",
    studied: "Enrolled in college-level courses: Computer Integrated Manufacturing I & II, Engineering and Design I & II. Achieved college credits while completing high school.",
    start: "2014",
    end: "2020",
  },
  {
    school: "Compton College, Compton, CA",
    studied: "Courses included WELD 125 Advanced Certification and Career Preparation Lab, WELD 128 AWS D1.1 Certification Test Preparation.",
    start: "2018",
    end: "2021",
  },
],
  work: [
    {
      company: "SpaceX",
      link: "https://parabol.co",
      badges: ["Remote"],
      title: "Orbital Tube Welder",
      logo: ParabolLogo,
      start: "2019",
      end: "2021",
      description:
        "Worked with small team of to support weekend (12x5s) critcal path by working on repairs , submiting issues and working with eng to disposition issues in a timly manner",
    },
    {
      company: "Sketch and etch",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "Non explicite production lead",
      logo: ClevertechLogo,
      start: "2022",
      end: "2023",
      description:
        "AUS ecom start up attempting to set up opertions in US. lead all aspects of  production from training,production,inventory and importance of driving consenus to deliver continous improvment.",
    },
    {
      company: "Elevated Materials",
      link: "https://bsgroup.eu/",
      badges: [],
      title: "Composite Tech",
      logo: JojoMobileLogo,
      start: "2012",
      end: "2015",
      description:
        "supported laying up and pressing of composite flat sheets and marble carbon blocks. Suggsted both local and gobal improvments to CEO such has implemting knowledge managment systemm , & quality imporvements.",
    },
    {
      company: "Nokia Siemens Networks",
      link: "https://www.nokia.com",
      badges: [],
      title: "C/C++ Developer",
      logo: NSNLogo,
      start: "2010",
      end: "2012",
      description: "Creating and testing software for LTE base stations",
    },
  ],
  skills: [
    "Soliwork Modeling",
    "CNC Machining",
    "Precision Measuring Skills  ",
    "Basic Cam",
    "OTW certifcation by SpaceX",
    "Relay",
    "WebRTC",
  ],
  projectsandCapcities: [
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;
