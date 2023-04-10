import React from "react";
import Title from "../../common/Title";
import Btn from "../../common/Btn";
import { images } from "../../assets/img";

const ContactForm = () => {
  const inputStyle = `bg-transparent pt-7 border-b border-[#4B4A4A] h-[73px] block max-w-[210px] text-white focus:outline-none`;
  return (
    <section className="pb-[60px] w-[100vw] overflow-x-hidden relative   text-white   sm:pb-[80px]  lg:pb-[110px]  pt-3 sm:pt-[80px] lg:pt-[110px] px-4 sm:px-6 md:px-4 2xl:px-[200px] bg-[#151515]">
      <div className="bg-[#1e1d1d] relative lg:pt-[60px] md:pt-[45px] pt-[30px] px-[30px] flex w-full justify-between sm:px-[35px] lg:px-[70px] pb-14 sm:pb-[50px] lg:pb-[150px]">
        <div className="relative z-10">
          <div className="mb-[35px]">
            <Title title="Напишите нам" subtitle="Нужна помошь?" />
          </div>
          <p className="max-w-[656px] text-2xl mb-[30px]">
            Остались вопросы, заполните форму, и мы в течении 5 минут свяжемся с
            вами{" "}
          </p>
          <form className="flex mb-5 flex-wrap gap-[30px]">
            <div className="flex justify-between gap-[20px] flex-wrap">
              <input
                placeholder="Ваше имя"
                className={`${inputStyle} `}
                type="text"
              />
              <input
                placeholder="Ваш телефон"
                className={`${inputStyle}`}
                type="text"
              />
              <input
                placeholder="Ваше email"
                className={`${inputStyle}`}
                type="text"
              />
            </div>
            <Btn>Отправить</Btn>
          </form>
          <span className="text-[14px]">Политика конфидициальности</span>
        </div>
        <img
          className="absolute right-[-16px] top-[-20px] md:top-[-88px]"
          src={images.fGroup}
          alt=""
        />
        <img
          className="absolute w-[527] h-[352px] right-8 top-0 md:top-[-112px]"
          src={images.fHelo}
          alt=""
        />
      </div>
    </section>
  );
};

export default ContactForm;
