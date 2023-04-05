import React from "react";
import Title from "../common/Title";
import { about } from "../assets/text";

const Desc = () => {
  return (
    <div className="pb-[60px] text-white sm:pb-[80px]  lg:pb-[110px]  pt-3 sm:pt-[80px] lg:pt-[110px] px-4 sm:px-6 md:px-40 2xl:px-[200px] bg-[#151515]">
      <div className="mb-5 sm:mb-10 lg:mb-[60px]">
        <Title title="О нас" subtitle="Наша команда" />
      </div>
      <div className="flex items-start flex-wrap gap-[20px] w-full justify-between">
        {about.aboutDesc.map((el, i) => (
          <div
            className="flex-[100%] md:flex-[45%] lg:flex-[30%] max-w-[340px] mx-auto"
            key={i}
          >
            <div className="p-5 border flex justify-center items-center border-solid border-[#02E502] h-fit mb-[50px]">
              <img
                className="w-[250px] h-[186px] sm:w-[300px] sm:h-[225px] lg:w-[386px] lg:h-[288px]"
                src={el.img}
                alt=""
              />
            </div>
            <h3 className=" text-2xl mb-5 sm:mb-[26px]  ">{el.title}</h3>
            <span className="inline-block mb-5 sm:mb-[30px] text-lg">
              {el.subtitle}
            </span>
            <p className="max-w-[292px] text-justify opacity-80 sm:max-w-[330px] lg:max-w-[373px] text-lg">
              {el.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Desc;
