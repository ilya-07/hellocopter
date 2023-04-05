import React from "react";
import Title from "../common/Title";
import { images } from "../assets/img";

interface Props {}
const arrImg = [images.sp_1, images.sp_2, images.sp_3, images.sp_4];
const Client: React.FC = (props) => {
  return (
    <article className="px-4 bg-[#181818] py-[60px] sm:py-[80px] lg:py-[110px] sm:px-6 md:px-40 2xl:px-[200px]">
      <div className="mb-[100px] ">
        <Title title="Наши клиенты " subtitle="Партнеры" />
      </div>
      <div className="grid gap-5 grid-cols-1 md:grid-cols-4 sm:grid-cols-2">
        {arrImg.map((el: string, i: number) => (
          <div className="flex justify-center items-center">
            <img className="" key={i} src={el} />
          </div>
        ))}
      </div>
    </article>
  );
};

export default Client;
