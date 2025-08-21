import ConsoleLine from "@/components/console/consoleLine";
import Typography from "@/components/typography";
import me from "@/constants/me";
import { LocalizationUtils } from "@/utils";
import React, { Component, useEffect, useState } from "react";

const Welcome = () => {
  return (
    <React.Fragment>
      <ConsoleLine>
        <Typography
          colour="red"
          size="base"
          text="💻 Welcome to Bill Cui’s Website LTS (GNU/Linux
          4.19.104-microsoft-standard x86_64) 💻"
        />
      </ConsoleLine>
      <ConsoleLine />
      <ConsoleLine>
        <Typography
          colour="yellow"
          size="base"
          text="* Documentation: "
          indent={1}
        />
        <Typography
          colour="text"
          size="base"
          text="Bill’s Resume"
          link={me.resumeLink}
        />
      </ConsoleLine>
      <ConsoleLine>
        <Typography
          colour="yellow"
          size="base"
          text="* Management: "
          indent={1}
        />
        <Typography
          colour="text"
          size="base"
          text={me.githubLink}
          link={me.githubLink}
        />
      </ConsoleLine>
      <ConsoleLine>
        <Typography colour="yellow" size="base" text="* Support: " indent={1} />
        <Typography
          colour="text"
          size="base"
          text={me.linkedinLink}
          link={me.linkedinLink}
        />
      </ConsoleLine>
      <ConsoleLine>
        <Typography colour="yellow" size="base" text="* Contact: " indent={1} />
        <Typography
          colour="text"
          size="base"
          text={me.contactEmail}
          link={LocalizationUtils.convertMailTo(me.contactEmail)}
        />
      </ConsoleLine>
      <ConsoleLine />
      <ConsoleLine>
        <Typography
          colour="text"
          size="base"
          text="System information as of "
          indent={1}
        />
        <Typography colour="green" size="base" text={new Date().toString()} />
      </ConsoleLine>
      <ConsoleLine>
        <Typography
          colour="yellow"
          size="base"
          text="User group: "
          indent={1}
        />
        <Typography
          colour="text"
          size="base"
          text={`Tesla`}
        />
      </ConsoleLine>
      <ConsoleLine>
        <Typography
          colour="text"
          size="base"
          text="This message is shown once a visit."
        />
      </ConsoleLine>
      <ConsoleLine>
        <Typography colour="text" size="base" text="Type " />
        <Typography colour="green" size="base" text="help " />
        <Typography colour="text" size="base" text="for list of commands" />
      </ConsoleLine>
    </React.Fragment>
  );
};

export default Welcome;
