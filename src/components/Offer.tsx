import React from "react";
import { offer } from "../assets/text";
// import Title from "./Title";
import { useDispatch } from "react-redux";
import { addCount } from "../redux/addHelicopterSlice";
import Title from "../common/Title";

const Offer = () => {
  const dispatch = useDispatch();
  const add = (id: {}) => {
    dispatch(addCount(id));
  };
  return (
    <div className="pb-[60px] sm:pb-[80px] lg:pb-[110px] text-white bg-[#151515] pt-3 sm:pt-[80px] lg:pt-[85px] px-4 sm:px-6 md:px-40 2xl:px-[200px]">
      <div className="mb-5 sm:mb-10 lg:mb-[60px]">
        <Title subtitle="Наша продукция" title="НАШИ ПРЕДЛОЖЕНИЯ" />
      </div>
      {/* <div className="flex items-start gap-5 flex-wrap"> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-[auto_auto]">
        {offer.map((el, i) => (
          <article
            className="bg-[#1E1D1D]  p-5 lg:p-6 flex-[32%] grid grid-rows-[auto_1fr]"
            key={i}
          >
            <img
              className=" mb-5 sm:mb-7 w-[212px] h-[138px] sm:w-[373px] sm:h-[229px]"
              src={el.img}
              alt=""
            />
            <div className="info pl-[10px] lg:pl-[45px] grid grid-rows-[1fr_auto_auto_auto]">
              <h3 className="mb-5 sm:mb-[30px] text-[20px] align-top sm:text-[28px]">
                {el.title}
              </h3>
              <div className="flex flex-col mb-[30px] sm:mb-5">
                <span className=" font-bold mb-1">
                  Бренд:
                  <span className="font-normal ml-1">{el.brend}</span>
                </span>
                <span className="font-bold">
                  Модель:
                  <span className="font-normal ml-1">{el.model}</span>
                </span>
              </div>
              <div className=" text-2xl sm:text-[30px] mb-10 sm:mb-[49px]">
                ${el.price}
              </div>

              <a
                onClick={add.bind("", el)}
                href="#basket"
                className="sm:text-[28px] block text-center  scroll-smooth text-[#02E502] w-full py-[15px] border border-solid border-[#02E502]"
              >
                Добавить в корзину
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Offer;
