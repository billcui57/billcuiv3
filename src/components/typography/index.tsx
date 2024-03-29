import classNames from "classnames";
import React from "react";
import {
  BLUE,
  RED,
  TEXT,
  WHITE,
  GREEN,
  YELLOW,
  PINK,
} from "@/constants/colours";
import {
  SM,
  BASE,
  LG,
  SECTION_HEAD,
  TITLE,
  DISPLAY,
  SUBTITLE,
} from "@/constants/sizes";

type TypographyProps = {
  text: String | number;
  size: string;
  className?: string;
  colour: string;
  bold?: boolean;
  noWrap?: boolean;
  indent?: number;
  link?: string;
};

const COLOURS = {
  RED: "red",
  BLUE: "blue",
  TEXT: "text",
  WHITE: "white",
  GREEN: "green",
  YELLOW: "yellow",
  PINK: "pink",
};

const SIZES = {
  SM: "xs",
  BASE: "base",
  LG: "lg",
  SECTION_HEAD: "section-head",
  SUBTITLE: "subtitle",
  TITLE: "title",
  DISPLAY: "display",
};

const Typography = (props: TypographyProps) => {
  const classes = classNames(
    `inline-block whitespace-pre-wrap break-words ${props.className}`,
    {
      [`text-${WHITE}`]: props.colour == COLOURS.WHITE,
      [`text-${TEXT}`]: props.colour == COLOURS.TEXT,
      [`text-${BLUE}`]: props.colour == COLOURS.BLUE,
      [`text-${PINK}`]: props.colour == COLOURS.PINK,
      [`text-${RED}`]: props.colour == COLOURS.RED,
      [`text-${GREEN}`]: props.colour == COLOURS.GREEN,
      [`text-${YELLOW}`]: props.colour == COLOURS.YELLOW,
      [`text-${SM}`]: props.size == SIZES.SM,
      [`text-${BASE}`]: props.size == SIZES.BASE,
      [`text-${LG}`]: props.size == SIZES.LG,
      [`text-${SECTION_HEAD}`]: props.size == SIZES.SECTION_HEAD,
      [`text-${SUBTITLE}`]: props.size == SIZES.SUBTITLE,
      [`text-${TITLE}`]: props.size == SIZES.TITLE,
      [`text-${DISPLAY}`]: props.size == SIZES.DISPLAY,
      [`indent-${props.indent * 4}`]: props.indent,
      ["font-bold"]: props.bold,
      ["overflow-ellipsis overflow-hidden"]: props.noWrap,
    }
  );

  if (!props.text) {
    return null;
  }

  const renderText = () => {
    return <p className={classes}>{props.text}</p>;
  };

  if (props.link !== undefined) {
    return (
      <a href={props.link} className="hover:opacity-75">
        {renderText()}
      </a>
    );
  }

  return renderText();
};

export default Typography;
