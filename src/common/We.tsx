import React from "react";
import Title from "./Title";
import { BsArrowDownCircle, BsArrowUpCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
const We = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="pb-[20px] text-white sm:pb-[30px]  lg:pb-[50px]  pt-3 sm:pt-[80px] lg:pt-[110px] px-4 sm:px-6 md:px-40 2xl:px-[200px] bg-[#151515]">
      {props.title && (
        <div className="mb-5 sm:mb-10 lg:mb-[60px]">
          <Title title={props.title.title} subtitle={props.title.subtitle} />
        </div>
      )}
      {props.subtitle && (
        <div className="mb-5">
          <Link to="/">Главная</Link> /{" "}
          <span className="text-[#02E502] mb-[30px] sm:mb-[40px] lg:mb-[70px]">
            {props.subtitle}
          </span>
        </div>
      )}
      <div
        className={`${!open ? "h-[80px]" : "h-full"}  ${
          props.position
        } overflow-y-hidden mb-7`}
      >
        <p className={`w-full text-xl`}>{props.text}</p>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className="-left-1/2 transform translate-x-1/2 cursor-pointer "
      >
        {!open ? (
          <BsArrowDownCircle className="text-white text-[35px]" />
        ) : (
          <BsArrowUpCircle className="text-white text-[35px]" />
        )}
        <span className="absolute w-full h-full  before:absolute before:w-[70px] sm:before:w-[100px] translate-y-1/2 top-0 -left-[120px] sm:left-[-180px] before:bg-white before:h-[1px] before:content-[''] z-10 -before:top-1/2 before:translate-x-1/2 -before:left-2"></span>
        <span className="absolute w-full h-full  before:absolute before:w-[70px] sm:before:w-[100px] translate-y-1/2 top-0 -right-[13px] -sm:right-[12px] before:bg-white before:h-[1px] before:content-[''] z-10 -before:top-1/2 before:translate-x-1/2 -before:right-2"></span>
      </div>
    </div>
  );
};

export default We;
