/* eslint-disable jsx-a11y/alt-text */

import Typography from "@/components/typography";

type SectionHeadProps = {
  title: string;
};

const SectionHead = (props: SectionHeadProps) => {
  return (
    <Typography
      text={props.title}
      size="section-head"
      colour="text"
      className="bg-gray-600 rounded-lg p-2 m-2"
    ></Typography>
  );
};

export default SectionHead;
