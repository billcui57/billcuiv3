import Typography from "@/components/typography";
import React, { FormEvent, SyntheticEvent } from "react";
import ConsoleLine from "../consoleLine";

type ConsoleInputLineProps = {
  setUserInput: any;
  handlePressedEnter: any;
  userInput: any;
  currDir: string;
  handlePressedTab: any;
  id?: any;
};

function ConsoleInputLine(props: ConsoleInputLineProps) {
  const handleUserTyping = (event: SyntheticEvent) => {
    let target = event.target as HTMLInputElement;
    props.setUserInput(target.value);
  };

  const handleUserKeyDown = (event: any) => {
    if (event.key === "Enter") {
      props.handlePressedEnter();
    } else if (event.key === "Tab") {
      event.preventDefault();
      //auto complete
      props.handlePressedTab();
    }
  };

  return (
    <ConsoleLine id={props.id}>
      <Typography colour="pink" size="base" text={`${props.currDir}`} />
      <Typography colour="pink" size="base" text="&#x3e; " />
      <input
        autoComplete="off"
        className="text-base bg-transparent outline-none w-10/12 text-pink-500"
        id="consoleInput"
        autoFocus
        type="text"
        onChange={handleUserTyping}
        onKeyDown={handleUserKeyDown}
        value={props.userInput}
      ></input>
    </ConsoleLine>
  );
}

export default ConsoleInputLine;
