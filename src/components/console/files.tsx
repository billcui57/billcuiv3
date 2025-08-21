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
import Carta from "public/carta.jpeg"

export const projects: IProject[] = [
  
];


export const workExperiences: IWorkExperience[] = [
  {
    name: "Tesla-full-time",
    company: "Tesla",
    startDate: "July 2024",
    endDate: "Present",
    description: "Vehicle Systems Integration and Tools Team",
    position: "Software Engineer",
    location: "Palo Alto, California",
    logo:TeslaLogo,
    usedTechs:["Python","Kubernetes", "Docker","Golang", "React"],

  },
  {
    name: "Tesla",
    company: "Tesla",
    startDate: "Sept 2023",
    endDate: "Dec 2023",
    description: "Vehicle Systems Integration and Tools Team",
    position: "Software Engineering Intern",
    location: "Palo Alto, California",
    usedTechs:["Kubernetes", "Docker","Golang", "React"],
    logo:TeslaLogo

  },
  {
    name: "Carta",
    company: "Carta",
    startDate: "May 2023",
    endDate: "Aug 2023",
    description: "Developer API Platform Team",
    position: "Backend Software Engineering Intern",
    location: "Waterloo, Ontario",
    usedTechs:["Kubernetes", "Helm", "Docker","Python", "React"],
    image: Carta,
    logo:CartaLogo
  },
  {
    name: "Faire",
    company: "Faire",
    startDate: "Sept 2022",
    endDate: "Dec 2022",
    description: "Retailer Acquisition Team",
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
]

// export const hackathons: IHackathon[] = [
// {
//   name: "StarterHacks",
// }
// ]
