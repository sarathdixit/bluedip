import React, { useState } from "react";
import CustomImage from "../image/image";
import Button from "../button/button";
import { useRouter } from "next/router";
import { ArrowDown2, ArrowRight } from "iconsax-react";
import Link from "next/link";

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
        <Link href={"/"}>
          <CustomImage
            url="/assets/images/logo.svg"
            className="w-[124px] h-[49px] lg:hidden"
          />
        </Link>
        <div onClick={() => setIsopen((prev) => !prev)}>
          <CustomImage
            url={`/assets/images/${!isopen ? "menu" : "close"}.svg`}
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
              BtnClassName=" !bg-transparent border border-[#CCAB57] !text-[#CCAB57] p-0 h-[52px]"
              cta={() => handleNavigation("/")}
            />
          ) : (
            <Button
              title="I’M A Restaurant"
              BtnClassName=" !bg-transparent border border-[#CCAB57] !text-[#CCAB57] p-0 h-[52px]"
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
          <div className="w-[33%]">
            <span className="text-[16px] font-[700] flex-1 text-[#D8B448] dm-sans border-b-2 border-[#D8B448] pb-1">
              Customers
            </span>
          </div>
        ) : (
          <div className="w-[33%]">
            <div className="flex gap-6 relative">
              {/* <div
                className="flex gap-1 cursor-pointer"
                onClick={() => setIsopen((prev) => !prev)}
              >
                <p
                  className={`border-b-[2px]  text-center text-[16px] font-[600] dm-sans pb-1 ${
                    router.pathname == "/dynamic-pricing"
                      ? "border-transparent"
                      : "border-[#D8B448] text-[#D8B448] "
                  }`}
                >
                  Solutions
                </p>
                <div className="mt-1">
                  <ArrowDown2 size="16px" color="#D8B448" />
                </div>
              </div> */}
              <div class="hs-dropdown relative inline-flex">
                <button
                  id="hs-dropdown-default"
                  type="button"
                  class={`hs-dropdown-toggle border-b-[2px]  text-center text-[16px] font-[600] dm-sans pb-1 inline-flex justify-center items-center gap-2 bg-white ${
                    router.pathname == "/dynamic-pricing"
                      ? "border-transparent"
                      : "border-[#D8B448] text-[#D8B448] "
                  }`}
                >
                  Solutions
                  <svg
                    class="hs-dropdown-open:rotate-180 w-2.5 h-2.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>

                <div
                  class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] hs-dropdown-open:opacity-100 opacity-0  hidden z-10 mt-2 w-[42%]  bg-white shadow-md rounded-lg p-2 "
                  aria-labelledby="hs-dropdown-default"
                >
                  <>
                    <div
                      className=" bg-white  px-[16px] py-[16px] "
                      // style={{
                      //   boxShadow:
                      //     "0px 16px 80px 0px rgba(127, 127, 126, 0.07)",
                      // }}
                    >
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
                </div>
              </div>
              <Link href={"dynamic-pricing"}>
                <div className="flex gap-1 cursor-pointer">
                  <p
                    className={`border-b-[2px]  text-center text-[16px] font-[600] dm-sans pb-1 ${
                      router.pathname != "/dynamic-pricing"
                        ? "border-transparent"
                        : "border-[#D8B448] text-[#D8B448] "
                    }`}
                    onClick={() => handleNavigation("/dynamic-pricing")}
                  >
                    How it Works
                  </p>
                </div>
              </Link>
            </div>
          </div>
        )}
        <Link href={"/"}>
          <CustomImage
            url="/assets/images/logo.svg"
            className="w-[124px] h-[49px]"
          />
        </Link>

        {router.pathname == "/" ? (
          <div className="flex gap-4 w-[33%] justify-end">
            <Button
              title="I’M A Restaurant"
              BtnClassName="w-[187px]  !bg-transparent border border-[#CCAB57] !text-[#CCAB57] !p-0 h-[52px]"
              cta={() => router.push("/restaurant")}
            />
            <Button
              title="Download App"
              BtnClassName="w-[175px] p-0 h-[52px] !p-0 h-[52px]"
            />
          </div>
        ) : (
          <div className="flex gap-4 items-center w-[33%] justify-end">
            <Button
              title="I’M A Customer"
              BtnClassName="w-[187px]  !bg-transparent border border-[#CCAB57] !text-[#CCAB57] !p-0 h-[52px]"
              cta={() => router.push("/")}
            />
            <Button
              title="Book A Consult"
              BtnClassName="w-[175px] p-0 h-[52px]"
              cta={() =>
                window.open(
                  "https://docs.google.com/forms/d/e/1FAIpQLSdwthFELcWB2dafpGNjn9M9XaCq2DEOal5zeyaZ4BEyCa4F9A/viewform"
                )
              }
            />
          </div>
        )}
      </div>
    </header>
  );
}
