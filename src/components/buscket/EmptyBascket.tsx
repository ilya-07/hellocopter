import React from "react";
import { images } from "../../assets/img";
const EmptyBascket = () => {
  return (
    <div className="flex text-white text-[20px] sm:text-[30px] lg:text-5xl flex-col items-center">
      <img
        className="w-[232px] h-[169px] sm:w-[314px] sm:h-[229px] mb-[30px]"
        src={images.empty}
        alt="empty basck"
      />
      <span className="text-[34px] relative after:content-[''] after:bg-[#05c305] inline-block   after:absolute after:left-[50%] after:translate-x-[-50%b]  after:z-[100] after:w-[70px] after:h-[2px] after:top-[55px] mb-[34px] text-white">
        Корзина Пуста
      </span>
      <span className="text-white">Продолжить покупки</span>
    </div>
  );
};

export default EmptyBascket;
