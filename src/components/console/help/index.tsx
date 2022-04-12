import ConsoleLine from "@/components/console/consoleLine";
import Typography from "@/components/typography";
import React, { Component, useEffect, useState } from "react";

const Help = () => {
  return (
    <React.Fragment>
      <ConsoleLine>
        <Typography colour="green" size="base" text="* ls: " />
        <Typography colour="text" size="base" text="list directories" />
      </ConsoleLine>
      <ConsoleLine>
        <Typography colour="green" size="base" text="* cd: " />
        <Typography colour="text" size="base" text="change directory" />
      </ConsoleLine>
      <ConsoleLine>
        <Typography colour="green" size="base" text="* cat: " />
        <Typography colour="text" size="base" text="view a file" />
      </ConsoleLine>
      <ConsoleLine>
        <Typography colour="green" size="base" text="* clear: " />
        <Typography colour="text" size="base" text="clear terminal" />
      </ConsoleLine>
      <ConsoleLine>
        <Typography colour="green" size="base" text="* exit: " />
        <Typography colour="text" size="base" text="leave the terminal" />
      </ConsoleLine>
    </React.Fragment>
  );
};

export default Help;
