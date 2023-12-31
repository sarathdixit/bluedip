/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function TakeawayGrid() {
  return (
    <div className="bg-white py-3 px-4 max-w-[1095px] m-auto rounded-lg flex justify-center">
      <div className="flex flex-col gap-1 lg:gap-9 lg:flex-row lg:w-[952px] lg:justify-evenly ">
        <div className="flex items-center gap-3 max-w-[300px]">
          <img
            src="/assets/images/takeaway-grid-image1.svg"
            alt=""
            className="w-[42px] h-[42px] lg:w-[72px] lg:h-[72px]"
          />
          <p className="dm-sans text-[16px] font-[600]">
            Direct customer contact, no delivery partners
          </p>
        </div>
        <div className="h-[1px] lg:h-[64px] my-auto lg:w-[2px] bg-[#F5EEDD] "></div>
        <div className="flex items-center gap-3">
          <img
            src="/assets/images/takeaway-grid-image2.svg"
            alt=""
            className="w-[42px] h-[42px] lg:w-[72px] lg:h-[72px]"
          />
          <p className="dm-sans text-[16px] font-[600]">
            Maximise kitchen staff utilisation
          </p>
        </div>
        <div className="h-[1px] lg:h-[64px] my-auto lg:w-[2px] bg-[#F5EEDD] "></div>
        <div className="flex items-center gap-3 dm-sans">
          <img
            src="/assets/images/takeaway-grid-image3.svg"
            alt=""
            className="w-[42px] h-[42px] lg:w-[72px] lg:h-[72px]"
          />
          <p className="dm-sans text-[16px] font-[600]">Minimise food waste</p>
        </div>
      </div>
    </div>
  );
}
