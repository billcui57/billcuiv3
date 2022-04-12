import React from "react";
import Typography from "@/components/typography";

type ConsoleLineProps = {
  children?: any;
  className?: any;
  id?: any;
};

function ConsoleLine(props: ConsoleLineProps) {
  let content;
  if (props.children) {
    content = props.children;
  } else {
    content = <Typography text="&nbsp;" colour="text" size="base" />;
  }

  return (
    <div className={props.className} id={props.id}>
      {content}
    </div>
  );
}

export default ConsoleLine;
