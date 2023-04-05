import React from "react";
import { ITitle } from "./types";

const Title: React.FC<ITitle> = ({ title, subtitle }) => {
  return (
    <div className="relative items-center text-center inline-flex flex-col h-fit">
      <h2 className="#454545 whitespace-nowrap text-4xl sm:text-[64px] lg:text-[100px] font-bold text-[#454545]">
        {title}
      </h2>
      <small className=" whitespace-nowrap  absolute left-2 top-1/2 transform -translate-y-1/2 z-10 text-[#02E502] text-2xl sm:text-[30px] lg:text-[48px]">
        {subtitle}
      </small>
    </div>
  );
};

export default Title;
