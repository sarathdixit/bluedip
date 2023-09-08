import React from "react";
import CustomImage from "../image/image";
import Button from "../button/button";

export default function Header() {
  return (
    <header className="h-[80px] w-full bg-white">
      <div className="tex-center px-4  h-[100%] flex justify-between lg:justify-center items-center">
        <CustomImage
          url="/assets/images/logo.svg"
          className="w-[124px] h-[49px] mr-2"
        />
        <CustomImage
          url="/assets/images/menu.svg"
          className="w-[36px] h-[36px] lg:hidden"
        />
      </div>
      <div className="hidden lg:flex items-center justify-between px-20 absolute w-full top-3">
        <div>
          <span className="text-[16px] font-[700] flex-1 text-[#D8B448] dm-sans border-b-2 border-[#D8B448] pb-1">
            Customers
          </span>
        </div>
        <div className="flex gap-4">
          <Button
            title="I’M A Restaurant"
            BtnClassName="w-[187px]  !bg-transparent border border-[#CCAB57] !text-[#CCAB57]"
          />
          <Button title="Download App" BtnClassName="w-[175px]" />
        </div>
      </div>
    </header>
  );
}
