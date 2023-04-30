/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import React from "react";
import Typography from "@/components/typography";
import Image from "next/image";
import _ from "lodash";
import GithubLogo from "/public/githubLogo.png";
import Button from "@/components/button";
import { IProject } from "@/types";



function Project(props: IProject) {
  const handleProjectLinkClick = () => {
    if (props.projectLink) {
      window.open(props.projectLink, "_blank").focus();
    }
  };
  const handleLearnMoreClick = () => {
    if (props.learnMoreLink) {
      window.open(props.learnMoreLink, "_blank").focus();
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-center space-x-4 px-8 items-center">
        {/* {props.logo && (
          <div>
            <Image src={props.logo} width="32" height="32"></Image>
          </div>
        )} */}
        <Typography
          colour="red"
          size="lg"
          text={props.name}
          className="text-center"
        />
        {/* {props.logo && (
          <div>
            <Image src={props.logo} width="32" height="32"></Image>
          </div>
        )} */}
      </div>
      <div className="flex flex-wrap justify-center space-x-4">
        {props.usedTechs.map((tech) => {
          return (
            <div>
              <Typography colour="yellow" size="md" text={tech} />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center">
        <Typography colour="text" size="base" text={props.description} />
      </div>
      {props.achievements &&
        !_.isEmpty(props.achievements) &&
        props.achievements.map((achievement) => {
          return (
            <div className="flex justify-center">
              <Typography colour="green" size="base" text={achievement} />
            </div>
          );
        })}
      {props.projectLink && (
        <div className="flex justify-center">
          <Button onClick={() => handleProjectLinkClick()} type="transparent">
            <Typography
              colour="white"
              size="base"
              text={"👀 Click here to check it out 👀"}
              className="hover:text-gray-400"
            ></Typography>
          </Button>
        </div>
      )}
      {props.learnMoreLink && (
        <div className="flex justify-center">
          <Button onClick={() => handleLearnMoreClick()} type="transparent">
            <Typography
              colour="white"
              size="base"
              text={"Click here to learn more"}
              className="hover:text-gray-400"
            ></Typography>
          </Button>
        </div>
      )}
      {props.image && (
        <div className="flex justify-center mt-1">
          <Image src={props.image} width="750" height="500"></Image>
        </div>
      )}
    </div>
  );
}

export default Project;
