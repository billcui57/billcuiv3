import { File } from "@/types";
import Project from "@/components/project";
import MathSocLogo from "public/mathSocLogo.png";
import MathSocArch from "public/mathSocLibArch.png";
import BattleSnakeLogo from "public/battlesnakeLogo.png";
import ToTheMoonLogo from "public/toTheMoonLogo.png";

export const projects: File[] = [
  {
    name: "MathSocLibrary",
    display: (
      <Project
        title="Mathsoc Textbook Library"
        description="A fullstack textbook library and point of sale system designed and made for the University of Waterloo's Mathematics Society"
        usedTechs={[
          "Angular",
          "Node.JS",
          "Express.JS",
          "MySQL",
          "Docker",
          "Linux",
        ]}
        logo={MathSocLogo}
        image={MathSocArch}
        projectLink="https://library.mathsoc.uwaterloo.ca/"
      ></Project>
    ),
  },
  {
    name: "MiniMaxBattleSnake",
    display: (
      <Project
        title="MiniMax BattleSnake"
        description="Utilized the minimax algorithm to forecast and predict future game states. Complimented with alpha beta pruning to greatly reduce search space for optimal game path. Also used flood filling to determine how much space the snake head has access to in each possible direction, and A star to path find towards food"
        achievements={[
          "Second place in Royal Bank of Canada's AI Snake competition",
        ]}
        usedTechs={["Typescript", "Node.JS", "Express.JS"]}
        learnMoreLink="https://github.com/billcui57/BattlesnakeW22"
        logo={BattleSnakeLogo}
      ></Project>
    ),
  },
  {
    name: "ToTheMoon",
    display: (
      <Project
        title="To The Moon"
        description="A Reddit forum webscraper for NLP analytics on the hottest bullish and bearish stocks. Consumed Reddit's PRAW API and Google Cloud's Natural Language Processing API to scrape
        subreddits and acquire sentiment on stocks."
        achievements={["DropBase API sponsor prize second place"]}
        usedTechs={[
          "React",
          "Python",
          "Flask",
          "Google Cloud",
          "DropBase API",
          "Reddit API",
        ]}
        projectLink="https://devpost.com/software/swingsentiment"
        logo={ToTheMoonLogo}
      ></Project>
    ),
  },
  {
    name: "HTNEventBrowser",
    display: (
      <Project
        title="Hack The North 2022 Event Browser"
        description="A mobile friendly hackathon event browser that I have developed for Hack The North 2022's Frontend Challenge"
        usedTechs={["React", "Next.JS"]}
        projectLink="https://billcui-htn-2022.netlify.app/"
        logo={ToTheMoonLogo}
        learnMoreLink="https://github.com/billcui57/htn-2022-frontend-challenge"
      ></Project>
    ),
  },
  {
    name: "DropShare",
    display: (
      <Project
        title="Drop Share"
        description="A decentralized charity donation platform that you use to donate anything, anytime, anywhere! Utilized Google’s Map API to allow users to drop a pin on their donated item’s location. Leveraged
        MongoDB’s $geoNear to aggregate and present pins that are closest to user’s location"
        usedTechs={[
          "React",
          "Next.JS",
          "Node.JS",
          "Express.JS",
          "MongoDB",
          "AWS EC2",
          "AWS Route 53",
          "Docker",
        ]}
        projectLink="https://drop-share.netlify.app/"
        learnMoreLink="https://github.com/billcui57/dropshare"
      ></Project>
    ),
  },
  {
    name: "Lyricalculus",
    display: (
      <Project
        title="Lyricalculus"
        description="Powered by a SVM classifier NLP model, predicts how lyrical a hip hop song is with 80% accuracy. Most impactful features - TD-IDF scores, Glove cosine similarity scores"
        usedTechs={[
          "Vue",
          "Python",
          "Flask",
          "Scikit-Learn",
          "Tensorflow",
          "MongoDB",
          "AWS EC2",
          "Route 53",
        ]}
        projectLink="https://www.lyricalculus.tech/"
        learnMoreLink="https://devpost.com/software/lyricalculus"
      ></Project>
    ),
  },
  {
    name: "ThePollingExpress-RTOS",
    display: (
      <Project
        title="ThePollingExpress-RTOS"
        description="A real time operating system + series of user tasks meant to control multiple Märklin trains for the University of Waterloo CS452 Real-time Programming course"
        usedTechs={["C", "ARMv4"]}
        projectLink="https://github.com/billcui57/The-Polling-Express"
      ></Project>
    ),
  },
];
