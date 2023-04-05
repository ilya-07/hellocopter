import React from "react";
import { AiOutlineClose } from "react-icons/ai";
const Close = () => {
  return (
    <div className="p-1 cursor-pointer sm:p-3 w-fit border-[#05c305]  border border-solid rounded-[50%]">
      <AiOutlineClose className="text-[10px] sm:text-[20px] text-[#05c305] md:text-[25px] relative" />
    </div>
  );
};

export default Close;
