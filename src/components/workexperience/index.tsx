/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import React from "react";
import Typography from "@/components/typography";
import Image from "next/image";
import _ from "lodash";
import GithubLogo from "/public/githubLogo.png";
import Button from "@/components/button";
import { IProject, IWorkExperience } from "@/types";



function WorkExperience(props: IWorkExperience) {
  return (
    <div className="flex flex-col space-y-2">
      <div className="flex justify-center space-x-4 px-8 items-center">
        {/* {props.logo && (
          <div>
            <Image src={props.logo} width="32" height="32" objectFit="contain"></Image>
          </div>
        )} */}
        <Typography
          colour="red"
          size="lg"
          text={props.company}
          className="text-center"
        />
        {/* {props.logo && (
          <div>
            <Image src={props.logo} width="32" height="32" objectFit="contain"></Image>
          </div>
        )} */}
      </div>
      <div className="flex flex-wrap justify-center space-x-4">
      <Typography colour="yellow" size="md" text={`${props.startDate}-${props.endDate}`}/>
      </div>
      {props.usedTechs && <div className="flex flex-wrap justify-center space-x-4">
        {props.usedTechs.map((tech) => {
          return (
            <div>
              <Typography colour="white" size="md" text={tech} />
            </div>
          );
        })}
      </div>}
      <div className="flex justify-center">
        <Typography colour="text" size="base" text={props.description} />
      </div>
      {/*{props.image && (*/}
      {/*  <div className="flex justify-center mt-1">*/}
      {/*    <Image src={props.image} width="750" height="500" objectFit="contain"></Image>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
}

export default WorkExperience;
