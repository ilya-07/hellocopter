import React from "react";
import { images } from "../assets/img";
import { motion } from "framer-motion";

const Write = () => {
  return (
    <div className="relative   text-white  px-4 sm:px-6 md:px-40 2xl:px-[200px] pt-[220px] md:pt-[72px] lg:pt-[150px] pb-[42px] md:pb-[86px] lg:pb-[150px]">
      <motion.div
        initial="start"
        whileInView="end"
        transition={{ duration: 0.5, delay: 0.2 }}
        variants={{
          start: { opacity: 0, x: -30 },
          end: { opacity: 1, x: -0 },
        }}
        className="flex flex-col items-center sm:items-start "
      >
        <h2 className="text-center w-full sm:text-left mb-5 sm:mb-[30px] lg:mb-[50px] text-[22px] sm:text-[30px] lg:text-7xl">
          Оказываем услуги!
        </h2>
        <p className="text-center sm:text-left max-w-full sm:max-w-[321px] lg:max-w-[620px] sm:text-[18px] lg:text-[34px] lg:mb-[70px] sm:mb-[50px] mb-[30px]">
          Принимаем заявки по биологической и химической защите растений
          дронами, картографии и мониторингу.
        </p>
        <a
          href=""
          className="text-[22px] sm:text-[28px] block text-center  scroll-smooth text-[#02E502] px-[60px] sm:px-[74px] py-[15px] border border-solid border-[#02E502]"
        >
          Оставить заявку
        </a>
      </motion.div>
      <img
        className="absolute w-full h-full left-0 top-0 -z-[2]"
        src={images.suggest_bg}
        alt=""
      />
      <img
        className="absolute w-full h-full -left-[35%] top-0 -z-[1]"
        src={images.suggest_blure}
        alt=""
      />
    </div>
  );
};

export default Write;
