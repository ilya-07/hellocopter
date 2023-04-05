import React, { useRef } from "react";
import { images } from "./../assets/img";
interface IHeader {
  title: string;
  count: {
    count: string;
    title?: string;
  }[];
  text: string;
  bg: string;
}
const Header: React.FC<IHeader> = (props) => {
  return (
    <div className=" h-fit pb-[120px] overflow-hidden px-4 py-1 sm:px-6 lg:py-5 lg:px-40 2xl:px-[200px] w-full pt-[260px] sm:pt-7 lg:pt-[100px] relative">
      <h1
        className={`${
          props.text
            ? "mb-[23px] sm:mb-[20px] lg:mb-[50px]"
            : " mb-16 sm:mb-[78px] lg:mb-40"
        }  text-3xl text-white max-w-[267px] sm:max-w-[337px] sm:text-[30px] lg:max-w-[800px] lg:text-6xl`}
      >
        {props.title ? props.title : null}
      </h1>
      <p className="max-w-[290px] sm:max-w-[375px] md:max-w-[564px] mb-[56px] sm:text-[18px] lg:text-2xl text-white lg:mb-[136px]">
        {props.text ? props.text : null}
      </p>
      <div className="flex gap-5 sm:gap-[30px] mb-[74px]">
        {props.count &&
          props.count.map((el, i) => (
            <div className="lg:mb-[154px]  mb-[10px] sm:mb-[5px]" key={i}>
              <h3 className="text-white text-[18px] mb-[10px] sm:mb-[5px] sm:text-2xl lg:text-5xl lg:mb-[54px]">
                {el.count}
              </h3>
              <small className="text-white text-[14px] sm:text-[18px] md:text-2xl">
                {el.title}
              </small>
            </div>
          ))}
      </div>
      <img
        className="absolute w-[100vw] h-[100%] left-0 scale-y-[0.95] -top-7 -z-[2]"
        src={props.bg}
        alt=""
      />
      <img
        className="absolute w-[100vw] h-[100%] left-0 top-0 transform   -z-[1] "
        src={images.cover}
        alt=""
      />
      <img
        className="absolute w-[750px]  bottom-[340px] left-0 "
        src={images.road}
        alt=""
      />
      <img
        className="absolute  bottom-[430px] left-[780px] w-[80px] h-[80px]"
        src={images.pelot}
        alt=""
      />
    </div>
  );
};

export default Header;
