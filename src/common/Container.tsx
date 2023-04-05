import React from "react";

interface IProps {
  children: JSX.Element;
}

const Container: React.FC<IProps> = ({ children }) => {
  return (
    <div className=" px-4 sm:px-6 md:px-40 2xl:px-[200px] py-4 sm:py-6  lg:py-[50px]">
      {children}
    </div>
  );
};

export default Container;
