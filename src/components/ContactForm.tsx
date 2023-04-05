import React from "react";
import Title from "../common/Title";

const ContactForm = () => {
  return (
    <div className="pb-[60px] text-white sm:pb-[80px]  lg:pb-[110px]  pt-3 sm:pt-[80px] lg:pt-[110px] px-4 sm:px-6 md:px-40 2xl:px-[200px] bg-[#151515]">
      <div className="bg-[#1e1d1d] lg:pt-[60px] md:pt-[45px] pt-[30px] px-[30px] flex w-full justify-between sm:px-[35px] lg:px-[70px] pb-14 sm:pb-[50px] lg:pb-[150px]">
        <div className="">
          <div className="mb-[30px]">
            <Title title="Напишите нам" subtitle="Нужна помошь?" />
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
