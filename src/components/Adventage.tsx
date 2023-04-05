import React from "react";
import Title from "../common/Title";
import { advenage } from "../assets/text";
import { IAdventage } from "../common/types";

const Adventage = () => {
  return (
    <div className="pb-[60px] sm:pb-[80px] lg:pb-[110px]  pt-3 sm:pt-[80px] lg:pt-[85px] px-4 sm:px-6 md:px-40 2xl:px-[200px] bg-[#151515]">
      <div className=" mb-16">
        <Title title="ПОЧЕМУ НАМ ДОВЕРЯЮТ ?" subtitle="Наши приемущества" />
      </div>
      <div className="flex flex-wrap gap-5">
        {advenage.map((el: IAdventage, i: number) => (
          <div
            className=" p-[30px] sm:py-[35px] lg:py-[60px] flex-[29%] flex-col bg-[#1E1D1D]"
            key={i}
          >
            <div className="mb-5 flex gap-4 lg:gap-5 items-center">
              <el.icon className="text-[40px] text-[#02E502]" />
              <h3 className="text-white sm:text-[18px] lg:text-[20px]">
                {el.title}
              </h3>
            </div>
            <p className="max-w-[238px] sm:max-w-[274px] lg:max-w-[376px] text-white">
              {el.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adventage;
