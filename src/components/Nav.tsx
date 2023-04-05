import React from "react";
import { images } from "../assets/img";
import { BiPhoneCall } from "react-icons/bi";
import { SlSocialVkontakte, SlSocialInstagram } from "react-icons/sl";
import { SiTiktok } from "react-icons/si";
import { BsBasketFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { countState } from "../redux/addHelicopterSlice";
import { useSelector, useDispatch } from "react-redux";
import { showBasck } from "../redux/showBascketSlice";
const links = ["about", "contact", "home", "news"];
const Nav = () => {
  const dispatch = useDispatch();
  const count = useSelector(countState);
  const showBascket = () => {
    dispatch(showBasck());
  };
  const [click, setClick] = React.useState(false);
  return (
    <div className="bg-[#151515] px-4 py-1 sm:px-6 md:py-5 md:px-40 2xl:px-[200px] flex justify-between items-center w-full z-10 relative">
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
        <div className="socialv flex gap-3 sm:gap-5 md:gap-8">
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
        <div className="flex md:gap-5 gap-2 items-center ml-3 md:ml-8">
          <span className="text-white text-[14px] sm:text-[24px]">RU</span>
          <span className="text-white text-[14px] sm:text-[24px]">ENG</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-5 md:gap-8 ml-3 md:ml-10">
          <div
            onClick={showBascket}
            id="basket"
            className="cursor-pointer relative p-1 sm:p-3 border-white border border-solid rounded-[50%]"
          >
            <BsBasketFill className="text-[10px] sm:text-[20px] text-white md:text-[25px]" />

            {count > 0 ? (
              <span className="absolute p-1 px-2 bg-red-600 rounded-[20px] -top-3 -left-1 text-white">
                {count}
              </span>
            ) : null}
          </div>
          <div
            onClick={() => setClick(!click)}
            className={`p-1 cursor-pointer sm:p-3 ${
              click ? "border-[#05c305]" : "border-white"
            } border border-solid rounded-[50%]`}
          >
            {click ? (
              <AiOutlineClose className="text-[10px] sm:text-[20px] text-[#05c305] md:text-[25px] relative" />
            ) : (
              <TfiMenuAlt className="text-[10px] sm:text-[20px] text-white md:text-[25px] relative" />
            )}
          </div>
          <ul
            className={`absolute pt-6 pl-7 w-[271px] bg-[#181818F2] text-[24px] text-black right-[198px] ${
              !click ? "-top-[1500px]" : `top-[112px]`
            }`}
          >
            {links.map((el, i) => (
              <li className="mb-8 text-white cursor-pointer" key={i}>
                <Link to={el === "home" ? "/" : el}>{el}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
