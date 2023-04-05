import React from "react";
import { images } from "../assets/img";
import { BiPhoneCall } from "react-icons/bi";
import { SlSocialVkontakte, SlSocialInstagram } from "react-icons/sl";
import { SiTiktok } from "react-icons/si";
import { BsBasketFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
const links = ["about", "contact", "home", "news"];
const Footer = () => {
  const showBascket = () => {};
  const [click, setClick] = React.useState(false);
  return (
    <div className="bg-[#151515] border-t border-gr px-4 py-1 sm:px-6 md:py-5 md:px-40 2xl:px-[200px] flex justify-between items-center w-full z-10 relative">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img
            className="w-8 h-8 sm:w-[72px] sm:h-[72px]"
            src={images.logo}
            alt=""
          />
        </Link>
        <span className="hidden sm:flex text-white items-center">
          <BiPhoneCall className="mr-2" />
          <span>+7861 21791 18</span>
        </span>
      </div>
      <div className="navigation flex items-center">
        <div className="socialv flex gap-3 sm:gap-5 items-center  md:gap-8">
          <span className=" text-lg text-white">
            Подписывайтесь на наши соцсети
          </span>
          <div className="p-1 sm:p-3 border-[#01B601] border border-solid rounded-[50%]">
            <SlSocialVkontakte className="text-white text-[10px] sm:text-[20px] md:text-[25px]" />
          </div>
          <div className="p-1 sm:p-3 border-[#01B601] border border-solid rounded-[50%]">
            <SlSocialInstagram className="text-white text-[10px] sm:text-[20px] md:text-[25px]" />
          </div>
          <div className="p-1 sm:p-3 border-[#01B601] border border-solid rounded-[50%]">
            <SiTiktok className="text-[10px] sm:text-[20px] text-white md:text-[25px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
