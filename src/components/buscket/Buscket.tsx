import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { countState } from "../../redux/addHelicopterSlice";
import { hideBasck } from "../../redux/showBascketSlice";
import Close from "../Close";
import EmptyBascket from "./EmptyBascket";
import FullBascket from "./FullBascket";

const Buscket = () => {
  const stateProducts = useSelector(countState);
  const dispatch = useDispatch();
  const hideBlock = () => {
    dispatch(hideBasck());
  };
  return (
    <div className="border-black border border-solid pb-[45px] w-[60vw] z-40 fixed bg-[#1E1D1D] px-[20px] py-[14px] lg:top-[75px] left-[20vw] ">
      <div className="flex  justify-between w-full items-center mb-1">
        <h4 className="text-white text-4xl">Корзина</h4>
        <div onClick={hideBlock} className="inline-block">
          <Close />
        </div>
      </div>
      {stateProducts > 0 ? <FullBascket /> : <EmptyBascket />}
    </div>
  );
};

export default Buscket;
