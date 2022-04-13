/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import { Component, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Me from "public/me.jpg";
import Typography from "@/components/typography";
import Button from "@/components/button";
import { useRouter } from "next/router";
import SectionHead from "@/components/sectionHead";
import { projects } from "@/components/console/files";
import React from "react";

const HomeContainer = () => {
  const router = useRouter();

  const handleConsoleClick = () => {
    router.push("/console");
  };

  const handleEmailClick = () => {
    window.open("mailto:billcui2001@hotmail.com");
  };

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/billcui57/?originalSubdomain=ca");
  };

  const handleGithubClick = () => {
    window.open("https://github.com/billcui57");
  };

  return (
    <div className="px-8 lg:px-32 mt-16">
      <div className={`w-3/4 sm:w-1/2 lg:w-1/3 m-auto`}>
        <Image src={Me} objectFit="contain" className="rounded-full"></Image>
      </div>

      <div className="flex justify-center mt-4">
        <Typography colour="text" size="title" text={"Hi! I'm Bill Cui"} />
      </div>
      <div className="flex flex-col space-y-32  mt-4">
        <div id="whoami" className="flex flex-col space-y-4">
          <div className="flex justify-center">
            <SectionHead title="$ whoami"></SectionHead>
          </div>
          <div className="flex justify-center">
            <Typography
              text="I am a software developer who is always learning new things"
              size="base"
              colour="text"
              className="text-center"
            ></Typography>
          </div>
          <div className="flex justify-center">
            <Typography
              text="Currently, I am a third year Computer Science student at the University of Waterloo"
              size="base"
              colour="text"
              className="text-center"
            ></Typography>
          </div>
        </div>
        <div className="flex justify-center">
          <Button onClick={() => handleConsoleClick()} type="transparent">
            <Typography
              colour="red"
              size="base"
              text={"Familiar with Linux? Click here"}
            />
          </Button>
        </div>
        <div id="projects">
          <div className="flex justify-center">
            <SectionHead title="$ ls ~/projects"></SectionHead>
          </div>
          <div className="flex flex-col space-y-32 mt-4">
            {projects.map((project) => {
              return <div>{project.display}</div>;
            })}
          </div>
        </div>
        <div id="contactMe">
          <div className="flex justify-center">
            <SectionHead title="$ vim ~/.contact_me"></SectionHead>
          </div>
          <div className="flex space-x-4 justify-center mb-16 mt-4">
            <Button onClick={() => handleEmailClick()} type="transparent">
              <Typography colour="text" size="base" text={"Email"} />
            </Button>

            <Button onClick={() => handleLinkedInClick()} type="transparent">
              <Typography colour="text" size="base" text={"LinkedIn"} />
            </Button>
            <Button onClick={() => handleGithubClick()} type="transparent">
              <Typography colour="text" size="base" text={"GitHub"} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
