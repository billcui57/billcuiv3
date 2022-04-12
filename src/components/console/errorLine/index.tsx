/* eslint-disable react/jsx-key */
import ConsoleLine from "@/components/console/consoleLine";
import Typography from "@/components/typography";
import { Directory, File } from "@/types";
import React, { Component, useEffect, useState } from "react";

type ErrorLineProps = {
  message: string;
};

const ErrorLine = (props: ErrorLineProps) => {
  return (
    <ConsoleLine>
      <Typography colour="red" size="base" text={props.message} />
    </ConsoleLine>
  );
};

export default ErrorLine;
