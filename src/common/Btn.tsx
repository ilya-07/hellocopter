import React from "react";

interface IProps {
  children: string;
}
const Btn: React.FC<IProps> = ({ children }) => {
  return (
    <a
      href="#basket"
      className="sm:text-[28px] w-fit text-center inline-block  scroll-smooth text-[#02E502] px-[45px] py-[15px] border border-solid border-[#02E502]"
    >
      {children}
    </a>
  );
};

export default Btn;
