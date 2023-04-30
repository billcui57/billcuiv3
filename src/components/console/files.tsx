import { IFile, IHackathon, IProject, IWorkExperience } from "@/types";
import MathSocLogo from "public/mathSocLogo.png";
import MathSocArch from "public/mathSocLibArch.png";
import BattleSnakeLogo from "public/battlesnakeLogo.png";
import ToTheMoonLogo from "public/toTheMoonLogo.png";
import Faire from "public/faire.jpeg";
import Kritik from "public/kritik.jpeg";
import Rbc from "public/rbc.jpeg";
import TeslaLogo from "public/teslaLogo.png";
import CartaLogo from "public/cartaLogo.png";
import FaireLogo from "public/faireLogo.png";
import RBCLogo from "public/rbcLogo.png";
import KritikLogo from "public/kritikLogo.jpeg";

export const projects: IProject[] = [
  {
    name: "Tripplanner",
    description: "A tool that provides a comprehensive view of an entire road trip. Segmented by each day with a list of hotels available for pit stops, as well as providing nice-to-haves such as exporting routes into Google Maps",
    usedTechs: ["Golang", "React"],
    projectLink: "https://tripplannerbot.netlify.app/",
    type: "Web",
  },
  {
    name: "MathSocLibrary",
    description: "A fullstack textbook library and point of sale system designed and made for the University of Waterloo's Mathematics Society",
    usedTechs: ["Angular", "Node.JS", "Express.JS", "MySQL", "Docker", "Linux"],
    projectLink: "https://library.mathsoc.uwaterloo.ca/",
    type: "Web",
    logo: MathSocLogo,
    image: MathSocArch
  },
  {
    name: "MiniMaxBattleSnake",
    description: "Utilized the minimax algorithm to forecast and predict future game states. Complimented with alpha beta pruning to greatly reduce search space for optimal game path. Also used flood filling to determine how much space the snake head has access to in each possible direction, and A star to path find towards food",
    usedTechs: ["Typescript", "Node.JS", "Express.JS"],
    learnMoreLink:"https://github.com/billcui57/BattlesnakeW22",
    logo: BattleSnakeLogo,
    type: "AI",
    achievements: ["Second place in Royal Bank of Canada's AI Snake competition"],
  },
  {
    name: "ToTheMoon",
    description: "A Reddit forum webscraper for NLP analytics on the hottest bullish and bearish stocks. Consumed Reddit's PRAW API and Google Cloud's Natural Language Processing API to scrape subreddits and acquire sentiment on stocks.",
    usedTechs: ["React", "Python", "Flask", "Google Cloud", "DropBase API", "Reddit API"],
    projectLink: "https://devpost.com/software/swingsentiment",
    logo: ToTheMoonLogo,
    type: "Web",
    achievements: ["DropBase API sponsor prize second place"],
  },
  {
    name: "HTNEventBrowser",
    description: "A mobile friendly hackathon event browser that I have developed for Hack The North 2022's Frontend Challenge",
    usedTechs: ["React", "Next.JS"],
    projectLink: "https://billcui-htn-2022.netlify.app/",
    logo: ToTheMoonLogo,
    type: "Web",
    learnMoreLink:"https://github.com/billcui57/htn-2022-frontend-challenge"
  },
  {
    name: "DropShare",
    description: "A decentralized charity donation platform that you use to donate anything, anytime, anywhere! Utilized Google’s Map API to allow users to drop a pin on their donated item’s location. Leveraged MongoDB’s $geoNear to aggregate and present pins that are closest to user’s location",
    usedTechs: ["React", "Next.JS", "Node.JS", "Express.JS", "MongoDB", "AWS EC2", "AWS Route 53", "Docker"],
    projectLink: "https://drop-share.netlify.app/",
    learnMoreLink:"https://github.com/billcui57/dropshare",
    type: "Web",
  },
  {
    name: "Lyricalculus",
    description: "Powered by a SVM classifier NLP model, predicts how lyrical a hip hop song is with 80% accuracy. Most impactful features - TD-IDF scores, Glove cosine similarity scores",
    usedTechs: ["Vue", "Python", "Flask", "Scikit-Learn", "Tensorflow", "MongoDB", "AWS EC2", "Route 53"],
    projectLink: "https://www.lyricalculus.tech/",
    learnMoreLink:"https://devpost.com/software/lyricalculus",
    type: "Web",
  },
  {
    name: "ThePollingExpress-RTOS",
    description: "A real time operating system + series of user tasks meant to control multiple Märklin trains for the University of Waterloo CS452 Real-time Programming course",
    usedTechs: ["C", "ARMv4"],
    projectLink: "https://github.com/billcui57/The-Polling-Express",
    type: "Systems"
  },
];


export const workExperiences: IWorkExperience[] = [
  {
    name: "Tesla",
    company: "Tesla (Incoming)",
    startDate: "Sept 2023",
    endDate: "Dec 2023",
    description: "Vehicle Systems Integration and Tools Team",
    position: "Software Engineering Intern",
    location: "Palo Alto, California",
    logo:TeslaLogo

  },
  {
    name: "Carta",
    company: "Carta (Incoming)",
    startDate: "May 2023",
    endDate: "Aug 2023",
    description: "Developer API Platform Team",
    position: "Backend Software Engineering Intern",
    location: "Waterloo, Ontario",
    logo:CartaLogo
  },
  {
    name: "Faire",
    company: "Faire",
    startDate: "Sept 2022",
    endDate: "Dec 2022",
    description: "Developer API Platform Team",
    position: "Backend Software Engineering Intern",
    location: "Waterloo, Ontario",
    usedTechs:["Kotlin", "React"],
    image: Faire,
    logo: FaireLogo
  },
  {
    name: "Royal-Bank-of-Canada",
    company: "Royal Bank of Canada",
    startDate: "Jan 2022",
    endDate: "April 2022",
    description: "RBC Express - Digital Banking for Business Team",
    position: "Software Engineering Intern",
    location: "Toronto, Ontario",
    usedTechs:["Angular", "Spring Boot"],
    image : Rbc,
    logo: RBCLogo
  },
  {
    name: "Kritik",
    company: "Kritik",
    startDate: "May 2021",
    endDate: "Aug 2021",
    description: "Kritik - Peer to Peer Learning Platform Team",
    position: "Software Engineering Intern",
    location: "Toronto, Ontario",
    usedTechs:["React","Express.JS", "Node.JS", "MongoDB"],
    image: Kritik,
    logo: KritikLogo
  },
]

// export const hackathons: IHackathon[] = [
// {
//   name: "StarterHacks",
// }
// ]
