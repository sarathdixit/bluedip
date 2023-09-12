import React, { useState } from "react";
import CustomImage from "../image/image";
import Button from "../button/button";
import { useRouter } from "next/router";
import { ArrowDown2, ArrowRight } from "iconsax-react";

export default function Header() {
  const router = useRouter();
  const [isopen, setIsopen] = useState(false);
  console.log(router.pathname);
  const handleNavigation = (route) => {
    router.push(route);
    setIsopen(false);
  };
  return (
    <header className="h-[80px] w-full bg-white">
      <div className="text-center px-4  h-[100%] flex justify-between lg:justify-center items-center">
        <CustomImage
          url="/assets/images/logo.svg"
          className="w-[124px] h-[49px] mr-2"
        />
        <div onClick={() => setIsopen((prev) => !prev)}>
          <CustomImage
            url="/assets/images/menu.svg"
            className="w-[36px] h-[36px] lg:hidden"
          />
        </div>
      </div>
      {isopen && (
        <div className=" bg-white px-[16px] py-[16px] lg:hidden min-h-screen z-30">
          {router.pathname == "/restaurant" ||
          router.pathname == "/dynamic-pricing" ? (
            <Button
              title="I’M A Customer"
              BtnClassName=" !bg-transparent border border-[#CCAB57] !text-[#CCAB57]"
              cta={() => handleNavigation("/")}
            />
          ) : (
            <Button
              title="I’M A Restaurant"
              BtnClassName=" !bg-transparent border border-[#CCAB57] !text-[#CCAB57]"
              cta={() => handleNavigation("/restaurant")}
            />
          )}
          {router.pathname != "/" && (
            <>
              <div className="mt-6">
                <div
                  className="cursor-pointer py-4 px-[16px] hover:bg-[#FCF9F0]"
                  onClick={() => handleNavigation("/restaurant")}
                >
                  <div className="flex items-center gap-2">
                    <p className="dm-sans text-[#31354A] font-[700]">
                      Overview
                    </p>
                    <ArrowRight size="20px" color="#000" />
                  </div>
                  <p className="text-[#6A7079] dm-sans">
                    How Bluedip increases your venue’s profitability
                  </p>
                </div>
                <div
                  className="p-4 cursor-pointer hover:bg-[#FCF9F0]"
                  onClick={() => handleNavigation("/takeaway")}
                >
                  <div className="flex items-center gap-2">
                    <p className="dm-sans text-[#31354A] font-[700]">
                      Takeaway
                    </p>
                    <ArrowRight size="20px" color="#000" />
                  </div>
                  <p className="text-[#6A7079] dm-sans">
                    Drive more takeaway Revenue
                  </p>
                </div>
                <div
                  className="p-4  cursor-pointer hover:bg-[#FCF9F0]"
                  onClick={() => handleNavigation("/dinein")}
                >
                  <div className="flex items-center gap-2">
                    <p className="dm-sans text-[#31354A] font-[700]">Dine-in</p>
                    <ArrowRight size="20px" color="#000" />
                  </div>
                  <p className="text-[#6A7079] dm-sans">
                    Fill tables and create your dream ambience
                  </p>
                </div>
              </div>
              <div
                className="px-[16px] py-[16px] border-y-[1px] border-[#E7D7AB] mt-3"
                onClick={() => handleNavigation("/dynamic-pricing")}
              >
                <div className="flex items-center gap-2">
                  <p className="dm-sans text-[#31354A] font-[700]">
                    How it works
                  </p>
                  <ArrowRight size="20px" color="#000" />
                </div>
              </div>
            </>
          )}

          {/* {router.pathname != "/" && (
            <div className="h-[1px] bg-[#CCAB57] mt-10"></div>
          )} */}

          <div className="px-[16px] py-[16px] mt-3">
            <div>
              <p className="dm-sans text-[#31354A] text-[16px] font-[700]">
                Free to download,
              </p>
              <p className="dm-sans text-[#695E41] font-[600]">
                get it on iOS or Android today.
              </p>
            </div>
            <Button title="Download App" BtnClassName="mt-6" />
          </div>
        </div>
      )}
      <div className="hidden lg:flex items-center justify-between px-20 absolute w-full top-3">
        {router.pathname == "/" ? (
          <div>
            <span className="text-[16px] font-[700] flex-1 text-[#D8B448] dm-sans border-b-2 border-[#D8B448] pb-1">
              Customers
            </span>
          </div>
        ) : (
          <div>
            <div className="flex gap-6 relative">
              <div
                className="flex gap-1 cursor-pointer"
                onClick={() => setIsopen((prev) => !prev)}
              >
                <p className="border-b-[2px]  border-[#D8B448] text-center text-[16px] font-[600] dm-sans pb-1">
                  Solutions
                </p>
                <div className="mt-1">
                  <ArrowDown2 size="16px" color="#D8B448" />
                </div>
              </div>
              <p className="dm-sans text-[#31354A] font-[700]">How it Works</p>
            </div>
            {isopen && (
              <>
                <div className="absolute bg-white w-[42%] top-[68px] px-[16px] py-[16px] ">
                  <div
                    className="cursor-pointer py-4 px-[16px] hover:bg-[#FCF9F0]"
                    onClick={() => handleNavigation("/restaurant")}
                  >
                    <div className="flex items-center gap-2">
                      <p className="dm-sans text-[#31354A] font-[700]">
                        Overview
                      </p>
                      <ArrowRight size="20px" color="#000" />
                    </div>
                    <p className="text-[#6A7079] dm-sans">
                      How Bluedip increases your venue’s profitability
                    </p>
                  </div>
                  <div
                    className="p-4 cursor-pointer hover:bg-[#FCF9F0]"
                    onClick={() => handleNavigation("/takeaway")}
                  >
                    <div className="flex items-center gap-2">
                      <p className="dm-sans text-[#31354A] font-[700]">
                        Takeaway
                      </p>
                      <ArrowRight size="20px" color="#000" />
                    </div>
                    <p className="text-[#6A7079] dm-sans">
                      Drive more takeaway Revenue
                    </p>
                  </div>
                  <div
                    className="p-4  cursor-pointer hover:bg-[#FCF9F0]"
                    onClick={() => handleNavigation("/dinein")}
                  >
                    <div className="flex items-center gap-2">
                      <p className="dm-sans text-[#31354A] font-[700]">
                        Dine-in
                      </p>
                      <ArrowRight size="20px" color="#000" />
                    </div>
                    <p className="text-[#6A7079] dm-sans">
                      Fill tables and create your dream ambience
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {router.pathname == "/" ? (
          <div className="flex gap-4">
            <Button
              title="I’M A Restaurant"
              BtnClassName="w-[187px]  !bg-transparent border border-[#CCAB57] !text-[#CCAB57]"
              cta={() => router.push("/restaurant")}
            />
            <Button title="Download App" BtnClassName="w-[175px]" />
          </div>
        ) : (
          <div className="flex gap-4">
            <Button
              title="I’M A Customer"
              BtnClassName="w-[187px]  !bg-transparent border border-[#CCAB57] !text-[#CCAB57]"
              cta={() => router.push("/")}
            />
            <Button title="Book A Consult" BtnClassName="w-[175px]" />
          </div>
        )}
      </div>
    </header>
  );
}
