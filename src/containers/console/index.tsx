/* eslint-disable react/jsx-key */
import ConsoleLine from "@/components/console/consoleLine";
import Typography from "@/components/typography";
import Welcome from "@/components/console/welcome";
import Help from "@/components/console/help";
import React, { Component, useEffect, useState } from "react";
import ConsoleInputLine from "@/components/console/consoleInputLine";
import { IDirectory } from "@/types";
import _ from "lodash";
import ListDirectory from "@/components/console/listDirectory";
import ErrorLine from "@/components/console/errorLine";
import ConsoleInputHistoryLine from "@/components/console/consoleInputHistoryLine";
import { projects, workExperiences } from "@/components/console/files";
import { useRouter } from "next/router";
import { displayFile } from "@/utils/display";

const ConsoleContainer = () => {
  let [userInput, setUserInput] = useState<String>();
  let [screen, setScreen] = useState<any[]>([<Welcome key="welcome" />]);
  let [currDir, setCurrDir] = useState<IDirectory>(() => initializeDir());
  const router = useRouter();

  function initializeDir() {
    //returns rootDir
    let rootDir = new IDirectory("", [], [], undefined);

    let projDir = new IDirectory("projects", [], projects, rootDir);

    // let hackathons = new IDirectory("hackathons", [], [], rootDir);

    let workExperience = new IDirectory("workexperiences", [], workExperiences, rootDir);

    // rootDir.subdirectories = [projDir, hackathons, workExperience];

    rootDir.subdirectories = [projDir, workExperience];

    return rootDir;
  }

  useEffect(() => {
    const element = document.getElementById(`bottom`);
    element?.scrollIntoView({ behavior: "smooth" });
  });

  //autocompletee
  const handlePressedTab = () => {
    //empty command with only whitespaces
    if (userInput?.length === 0 || !userInput?.trim()) {
      //do nothing
      return;
    }

    if (userInput.split(" ") && userInput.split(" ")[0] === "cd") {
      let incompleteDir = userInput.split(" ")[1];

      if (incompleteDir) {
        let cand = currDir.subdirectories?.find((dir) =>
          dir.name.includes(incompleteDir)
        );
        if (cand) {
          setUserInput(userInput.replace(incompleteDir, cand.name));
        }
      }
    } else if (userInput.split(" ") && userInput.split(" ")[0] === "cat") {
      let incompleteFile = userInput.split(" ")[1];

      if (incompleteFile) {
        let cand = currDir.files?.find((file) =>
          file.name.includes(incompleteFile)
        );
        if (cand) {
          setUserInput(userInput.replace(incompleteFile, cand.name));
        }
      }
    }
  };

  const handlePressedEnter = () => {
    let finalScreen: any[] = _.cloneDeep(screen);
    if (userInput == "clear") {
      finalScreen = [];
      setUserInput("");
      setScreen(finalScreen);
      return;
    }

    finalScreen = [
      ...finalScreen,
      <ConsoleInputHistoryLine
        pathName={currDir.pathName}
        userInput={userInput}
      />,
    ];

    if (!userInput) {
      //nothing
    } else if (userInput == "exit") {
      router.push("/");
    } else if (userInput == "help") {
      finalScreen = [...finalScreen, <Help />];
    } else if (userInput == "ls") {
      finalScreen = [
        ...finalScreen,
        <ListDirectory
          files={currDir.files}
          subdirectories={currDir.subdirectories}
        />,
      ];
    } else if (userInput.split(" ") && userInput.split(" ")[0] === "cd") {
      if (userInput.split(" ").length > 2) {
        finalScreen = [
          ...finalScreen,
          <ErrorLine message="Too many arguments" />,
        ];
      } else if (userInput.split(" ").length < 2) {
        finalScreen = [
          ...finalScreen,
          <ErrorLine message="Not enough arguments" />,
        ];
      } else {
        let requestedDirectory = userInput.split(" ")[1];

        //prev
        if (requestedDirectory === "..") {
          let prevDir = currDir.parent;
          if (prevDir) {
            setCurrDir(prevDir);
          } else {
            finalScreen = [
              ...finalScreen,
              <ErrorLine message="Root directory does not have a parent directory" />,
            ];
          }
        }
        //elsewhere
        else {
          let cand = currDir.subdirectories?.find(
            (dir) =>
              dir.name === requestedDirectory ||
              dir.name === "/" + requestedDirectory
          );
          if (cand) {
            setCurrDir(cand);
          } else {
            finalScreen = [
              ...finalScreen,
              <ErrorLine message="Directory name does not exist" />,
            ];
          }
        }
      }
    } else if (userInput.split(" ") && userInput.split(" ")[0] === "cat") {
      if (userInput.split(" ").length > 2) {
        finalScreen = [
          ...finalScreen,
          <ErrorLine message="Too many arguments" />,
        ];
      } else if (userInput.split(" ").length < 2) {
        finalScreen = [
          ...finalScreen,
          <ErrorLine message="Not enough arguments" />,
        ];
      } else {
        let requestedFile = userInput.split(" ")[1];

        let cand = currDir.files?.find((file) => file.name === requestedFile);
        if (cand) {
          finalScreen = [
            ...finalScreen,
            <div className="mx-16">{displayFile(cand)}</div>,
          ];
        } else {
          finalScreen = [
            ...finalScreen,
            <ErrorLine message="File does not exist" />,
          ];
        }
      }
    } else {
      finalScreen = [...finalScreen, <ErrorLine message="Unknown command" />];
    }

    setUserInput("");
    setScreen(finalScreen);
  };

  return (
    <div>
      {screen.map((consoleLine) => {
        return consoleLine;
      })}
      <ConsoleInputLine
        currDir={currDir.pathName}
        setUserInput={setUserInput}
        handlePressedTab={handlePressedTab}
        handlePressedEnter={handlePressedEnter}
        userInput={userInput}
        id="bottom"
      />
    </div>
  );
};

export default ConsoleContainer;
