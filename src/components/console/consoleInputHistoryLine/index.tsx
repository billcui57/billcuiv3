import Typography from "@/components/typography";
import _ from "lodash";
import React, { FormEvent, SyntheticEvent } from "react";
import ConsoleLine from "../consoleLine";

type ConsoleInputHistoryLineProps = {
  userInput: any;
  pathName: string;
};

function ConsoleInputHistoryLine(props: ConsoleInputHistoryLineProps) {
  return (
    <ConsoleLine>
      <Typography colour="pink" size="base" text={`${props.pathName}`} />
      <Typography colour="pink" size="base" text="&#x3e; " />
      {!_.isEmpty(props.userInput) && (
        <Typography colour="pink" size="base" text={props.userInput} />
      )}
    </ConsoleLine>
  );
}

export default ConsoleInputHistoryLine;
