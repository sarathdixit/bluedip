/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function DineinGrid() {
  return (
    <div className="bg-white py-3 px-4 max-w-[1095px] m-auto rounded-lg flex justify-center">
      <div className="flex flex-col gap-1 lg:!flex-row lg:w-[952px] justify-evenly">
        <div className="flex items-center gap-3 max-w-[300px]">
          <img
            src="/assets/images/dinein-grid-image1.svg"
            alt=""
            className="w-[42px] h-[42px] lg:w-[72px] lg:h-[72px]"
          />
          <p className="dm-sans text-[16px] font-[600]">
            Influence higher spend
          </p>
        </div>
        <div className="h-[1px] lg:h-[64px] my-auto lg:w-[2px] bg-[#F5EEDD] "></div>
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/dinein-grid-image2.svg"
            alt=""
            className="w-[42px] h-[42px] lg:w-[72px] lg:h-[72px]"
          />
          <p className="dm-sans text-[16px] font-[600]">
            Maximise staff utilisation
          </p>
        </div>
        <div className="h-[1px] lg:h-[64px] my-auto lg:w-[2px] bg-[#F5EEDD] "></div>
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/dinein-grid-image3.svg"
            className="w-[42px] h-[42px] lg:w-[72px] lg:h-[72px]"
            alt=""
          />
          <p className="dm-sans text-[16px] font-[600]">
            Create ambience and demand
          </p>
        </div>
      </div>
    </div>
  );
}
