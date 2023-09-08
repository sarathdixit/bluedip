/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomImage from "../image/image";

export default function Brand() {
  return (
    <div className="bg-[#FDFBF5] px-4 pt-8 pb-12 lg:px-12 lg:pb-[62px] lg:pt-[54px]">
      <div className="text-center">
        <span className="border-b-[2px] border-b-[#D8B448] text-transparent">
          asdasdasdasd
        </span>
      </div>
      <p className="text-[32px] lg:text-[40px] text-[#202937] text-center">
        You can see us on
      </p>
      <div className="flex flex-wrap justify-around mt-8">
        <img src="/assets/images/airbnb.svg" alt="" />
        <img src="/assets/images/airbnb.svg" alt="" />
        <img src="/assets/images/airbnb.svg" alt="" />
        <img src="/assets/images/airbnb.svg" alt="" />
        <img src="/assets/images/airbnb.svg" alt="" />
      </div>
      <div className="h-[1px] w-[80%] bg-[#E2DBCB] m-auto my-9 lg:my-[60px]"></div>
      <div className="flex flex-wrap gap-8 lg:flex-nowrap lg:justify-center lg:gap-[100px]">
        <div className="flex items-center gap-5">
          <CustomImage
            url="/assets/images/india.svg"
            className="w-[55px] h-[55px]"
          />
          <div>
            <p className="dm-sans text-[16px] font-[500] text-[#4D545F]">
              Start-up Founded
            </p>
            <p className="text-[20px] lg:text-[40px]">2023</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <CustomImage
            url="/assets/images/customers.svg"
            className="w-[55px] h-[55px]"
          />
          <div>
            <p className="dm-sans text-[16px] font-[500] text-[#4D545F]">
              Customers Base
            </p>
            <p className="text-[20px] lg:text-[40px]">2 Million+</p>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <CustomImage
            url="/assets/images/hotels.svg"
            className="w-[55px] h-[55px]"
          />
          <div>
            <p className="dm-sans text-[16px] font-[500] text-[#4D545F]">
              Restaurants in India
            </p>
            <p className="text-[20px] lg:text-[40px]">1000+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
