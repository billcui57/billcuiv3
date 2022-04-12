/* eslint-disable react/jsx-key */
import ConsoleLine from "@/components/console/consoleLine";
import Typography from "@/components/typography";
import { Directory, File } from "@/types";
import React, { Component, useEffect, useState } from "react";

type ListDirectoryProps = {
  subdirectories: Directory[];
  files: File[];
};

const ListDirectory = (props: ListDirectoryProps) => {
  return (
    <React.Fragment>
      <ConsoleLine className="flex space-x-4">
        {props.subdirectories.map((subDir: Directory) => {
          return <Typography colour="green" size="base" text={subDir.name} />;
        })}
        {props.files.map((file: File) => {
          return <Typography colour="blue" size="base" text={file.name} />;
        })}
      </ConsoleLine>
    </React.Fragment>
  );
};

export default ListDirectory;
