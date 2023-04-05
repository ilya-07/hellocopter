import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  generalSUmm,
  minusOne,
  plusOne,
  productsState,
} from "../../redux/addHelicopterSlice";

const FullBascket = () => {
  const commonSumm = useSelector(generalSUmm);
  const result = useSelector(productsState);
  const dispatch = useDispatch();
  const minus = (el) => {
    dispatch(minusOne(el));
  };
  const plus = (el) => {
    dispatch(plusOne(el));
  };
  return (
    <div className="text-white max-h-[600px] overflow-y-scroll pr-10  scrollbar scrollbar-thumb-[#02E502] scrollbar-track-[#1E1D1D]">
      {result.map((el, i) => (
        <div key={i}>
          <div className="flex justify-between items-center pb-[45px] mb-[15px] sm:mb-[45px] border-b border-b-[#464646]">
            <img src={el.img} alt="" />
            <div className="flex flex-col">
              <span className="mb-5 text-2xl">{el.title}</span>
              <span>Артикул: {el.model}</span>
            </div>
            <div className="flex gap-[27px] items-center">
              <div className="flex items-center border border-[#464646] border-solid">
                <span
                  onClick={plus.bind("", el)}
                  className="p-3 text-2xl cursor-pointer"
                >
                  +
                </span>
                <span className="p-3 text-2xl">{el.count}</span>
                <span
                  onClick={minus.bind("", el)}
                  className="p-3 text-2xl cursor-pointer"
                >
                  -
                </span>
              </div>
              <span className="text-[22px]">${el.price}</span>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center">
        <span className="text-2xl">
          Общая сумма: <span className="font-bold">{commonSumm}</span>$
        </span>

        <a className="sm:text-[28px] block text-center w-fit px-9  scroll-smooth text-[#02E502] py-[15px] border border-solid border-[#02E502]">
          Оформить заказ
        </a>
      </div>
    </div>
  );
};

export default FullBascket;
