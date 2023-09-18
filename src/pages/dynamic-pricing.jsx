/* eslint-disable @next/next/no-img-element */
import Button from "@/modules/common/components/button/button";
import CustomImage from "@/modules/common/components/image/image";
import React from "react";
import Slider from "react-slick";

export default function Pricing() {
  const settings = {
    dots: false, // Hide the dots
    arrows: false, // Hide the original arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Center the items
    centerPadding: "0", // Adjust the padding as needed
  };
  const sliderRef = React.useRef();
  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  return (
    <main>
      <section
        style={{
          backgroundImage: 'url("/assets/images/Homebackground.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="px-4 pb-[68px]"
      >
        <div className="lg:w-[747px] m-auto py-[36px] lg:py-[60px]">
          <p className="text-center font-[400] mt-4 text-[40px] lg:text-[62px] text-[#202937] leading-[47px] lg:leading-[74px]">
            Dynamic Pricing For Hospitality
          </p>
          <p className="text-center font-[400] mt-4 dm-sans text-[20px] text-[#202937]">
            Our AI driven software provides affordable access to dynamic pricing
            to make you a profitable and thriving hospitality venue.
          </p>
        </div>
        <div className="bg-white py-3 px-4 max-w-[905px] m-auto rounded-lg flex justify-center">
          <div className="flex flex-col gap-1 lg:gap-8 lg:!flex-row  justify-evenly lg:items-center">
            <div className="flex items-center gap-3 max-w-[500px]">
              <img
                src="/assets/images/dinein-grid-image1.svg"
                alt=""
                className="w-[42px] h-[42px] lg:w-[72px] lg:h-[72px]"
              />
              <p className="text-[20px] lg:text-[30px]">
                Book your free consult today
              </p>
            </div>
            <div>
              <Button
                title="Get Started"
                BtnClassName=" !bg-[#CCAB57] border lg:w-[200px]"
                cta={() =>
                  window.open(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdwthFELcWB2dafpGNjn9M9XaCq2DEOal5zeyaZ4BEyCa4F9A/viewform"
                  )
                }
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className=" pt-10 lg:py-[80px] lg:mt-[80px] px-4"
        style={{
          backgroundImage: 'url("/assets/images/image 16.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <p className="text-center font-[400] text-[32px] lg:text-[48px] lg:w-[520px] m-auto text-[#202937] leading-[47px] lg:leading-[58px]">
          What is dynamic Pricing?
        </p>
        <p className="max-w-[725px] m-auto text-center dm-sans text-[16px] lg:text-[20px] text-[#202937] mt-4">
          Dynamic pricing is a long-standing strategy used by airlines and
          hotels to maximize revenue. The platform utilizes flexible pricing to
          attract customers during off-peak hours. The goal is to maintain
          constant traffic in restaurants, ensuring fewer empty tables
          throughout the day.
        </p>
        <CustomImage
          url="/assets/images/dynamic-grid.svg"
          className="w-[1197px] h-[191px] m-auto mt-12  hidden lg:block"
        />
        <CustomImage
          url="/assets/images/dynamic-price-mobile.svg"
          className="w-[100%] h-[216px] m-auto mt-12 lg:hidden"
        />
      </section>
      <section className="px-4 mt-[80px]">
        {/* <CustomImage
          url="/assets/images/dynamic-section.svg"
          className="w-[1203px] h-[1049px] m-auto mt-0 hidden lg:block"
        />
        <CustomImage
          url="/assets/images/dynamic-section-mobile.svg"
          className="w-[full] h-[1080px] m-auto mt-2 lg:hidden"
        />
        <CustomImage
          url="/assets/images/dynamic-final-section.svg"
          className="w-[1203px] h-[769px] m-auto my-20 hidden lg:block"
        />
        <CustomImage
          url="/assets/images/dynamic-final-section-mobile.svg"
          className="w-[full] h-[956px] m-auto mt-8 lg:hidden"
        /> */}
        <div className="max-w-[1200px] m-auto">
          <p className="text-center font-[400] text-[32px] lg:text-[48px] lg:w-[520px] m-auto text-[#202937] leading-[47px] lg:leading-[58px]">
            How it can benefit your restaurant?
          </p>
          <div className="flex flex-col-reverse lg:flex-row lg:gap-[130px] items-center  lg:mt-[80px]">
            <div className="w-[100%] lg:w-[50%]">
              <p className="text-[20px] lg:text-[32px] text-[#202937]">
                Optimise everyday of the week
              </p>
              <p className="dm-sans text-[#4D545F] text-[16px] lg:text-[20px] mt-2">
                It comes as no surprise that some days are more popular than
                others. With Bluedip, that doesn’t have to be the case. Millions
                of customers are wanting to eat out early in the week, just not
                at the same price they pay on Friday and Saturday. Using Bluedip
                turns traditionally loss leading days into profit generating
                ones while supercharging already profitable days.
              </p>
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <CustomImage
                url="/assets/images/dynami-timeline-image.svg"
                className="w-full lg:max-w-[557.5px] h-[312px] m-auto lg:mt-8 "
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row  lg:gap-[130px] items-center lg:mt-[80px]">
            <div className="w-[100%] lg:w-[50%]">
              <CustomImage
                url="/assets/images/dynami-timeline-image.svg"
                className="w-[100%] h-[312px] m-auto lg:mt-8 "
              />
            </div>
            <div className="w-[100%] lg:w-[50%]">
              <p className="text-[20px] lg:text-[32px] text-[#202937]">
                Optimise targeted times
              </p>
              <p className="dm-sans text-[#4D545F] text-[16px] lg:text-[20px] mt-2">
                Every restaurant is faced with peak and off peak times during
                the day. Adding extra revenue before and after these peak times
                without adjusting your staffing will have huge impacts on your
                profitability. Let alone benefits like filling window seats
                before dinner service encouraging walk-ins or keeping the
                atmosphere rolling as the night gets on.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="my-[60px]  lg:my-[120px]">
        <div className="max-w-[1200px] m-auto">
          <p className="text-center font-[400] text-[32px] lg:text-[48px] lg:w-[520px] m-auto text-[#202937] leading-[47px] lg:leading-[58px]">
            How it works on the Bluedip platform
          </p>
          <div className="lg:flex gap-[68px] px-[16px] lg:px-0 mt-[60px]">
            <div className="border-[1px] border-[#d8b4488a] py-[24px] px-[20px] lg:px-[33px] lg:py-[30px] rounded-[10px]">
              <CustomImage
                url="/assets/images/bluedip-grid-image.svg"
                className="w-full lg:w-[481px] h-[226.429px] lg:h-[342px] m-auto"
              />
              <div className="w-[99%] mt-[24px] lg:mt-[30px]">
                <p className="text-[20px] lg:text-[32px] text-[#202937]">
                  Targeted dynamic pricing
                </p>
                <p className="dm-sans text-[#929496] text-[16px] lg:text-[20px] mt-2">
                  Choose your own days and times with accurate AI predictions.
                </p>
              </div>
            </div>
            <div className="border-[1px] border-[#d8b4488a] py-[24px] px-[20px] lg:px-[33px] lg:py-[30px] rounded-[10px] mt-[32px] lg:mt-0">
              <CustomImage
                url="/assets/images/bluedip-grid-image2.svg"
                className="w-full lg:w-[481px] h-[226.429px] lg:h-[342px] m-auto"
              />
              <div className="w-[99%] mt-[24px] lg:mt-[30px]">
                <p className="text-[20px] lg:text-[32px] text-[#202937]">
                  Optimise targeted times
                </p>
                <p className="dm-sans text-[#929496] text-[16px] lg:text-[20px] mt-2">
                  It&apos;s no surprise that some days are more popular than
                  others. That doesn&apos;t have to be the case with Bluedip.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
