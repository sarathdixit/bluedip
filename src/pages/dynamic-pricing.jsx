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
              <p className="text-[16px] lg:text-[20px]">
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
        className=" pt-10 lg:py-[60px] lg:mt-[80px] px-4"
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
      <section className="px-4 mt-10">
        <CustomImage
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
        />
      </section>
    </main>
  );
}
