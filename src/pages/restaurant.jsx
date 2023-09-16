/* eslint-disable react/jsx-key */
import Button from "@/modules/common/components/button/button";
import Comingsoon from "@/modules/common/components/comingSoon";
import Faq from "@/modules/common/components/faq/faq";
import CustomImage from "@/modules/common/components/image/image";
import OverviewGird from "@/modules/common/components/overviewGrid";
import OverViewTimeline from "@/modules/common/components/overviewTimeline";
import Select from "@/modules/common/components/select/select";
import { faqs } from "@/modules/common/constant";
import React from "react";
import Slider from "react-slick";

export default function Restaurant() {
  const settings = {
    dots: false, // Hide the dots
    arrows: false, // Hide the original arrows
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true, // Center the items
    centerPadding: "0", // Adjust the padding as needed
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
            AI-Powered Solution for Restaurant Success
          </p>
          <p className="text-center font-[500] mt-4 dm-sans text-[20px] text-[#202937]">
            Attract a vast audience of food enthusiasts nationwide and leverage
            dynamic pricing strategies to enhance your profit margins.
          </p>
        </div>
        <div className="">
          <OverviewGird />
        </div>
      </section>
      <section className="py-[42px] lg:py-[120px]">
        <OverViewTimeline />
        <div className="mt-6">
          <Comingsoon />
        </div>
      </section>

      {/* <section
        style={{
          backgroundImage: 'url("/assets/images/Restaurant-frame.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-[42px] px-4"
      >
        <p className="text-[20px] text-center text-[#202937] max-w-[530px] m-auto lg:text-[48px] leading-[58px]">
          Calculate your revenue potential
        </p>
        <p className="dm-sans text-[#202937] text-[20px] text-center mt-5">
          Based on our Marketplace data, of 1000&lsquo;s of restaurants
        </p>
        <div className="bg-[#F8F1DF] max-w-[930px] m-auto rounded-[20px]  mt-10 py-5 lg:py-[39px] px-4 lg:px-[66px]">
          <p className="text-[#202937] text-[32px] lg:text-[40px] lg:text-center">
            Every Month you could earn
          </p>
          <div className="mt-10 hidden gap-4 justify-around lg:flex">
            <div>
              <Select />
              <div className="bg-white mt-10 text-center p-[32px] rounded-xl">
                <p className="dm-sans text-[#4D545F]">Customers</p>
                <p className="text-[50px] text-[#202937]">213-236</p>
              </div>
            </div>
            <div>
              <Select />
              <div className="bg-white mt-10 text-center  p-[32px] rounded-xl">
                <p className="dm-sans text-[#4D545F]">Revenue</p>
                <p className="text-[50px] text-[#202937]">₹4,730-5,227</p>
              </div>
            </div>
          </div>
          <div className="mt-10  gap-4 justify-around lg:hidden">
            <div>
              <Select className="!w-full" />
              <Select className="!w-full mt-5" />
            </div>
            <div>
              <div className="bg-white mt-5 text-center p-[32px] rounded-xl">
                <p className="dm-sans text-[#4D545F]">Customers</p>
                <p className="text-[40px] text-[#202937]">213-236</p>
              </div>
              <div className="bg-white mt-5 text-center  p-[32px] rounded-xl">
                <p className="dm-sans text-[#4D545F]">Revenue</p>
                <p className="text-[40px] text-[#202937]">₹4,730-5,227</p>
              </div>
            </div>
          </div>
          <Button
            title="Enquiry Today"
            BtnClassName={"max-w-[263px] m-auto mt-10"}
          />
        </div>
      </section> */}
      {/* <section className="py-[24px] max-w-[1250px] m-auto lg:pt-[80px] px-4 ">
        <div>
          <p className="text-center font-[400] text-[32px] lg:text-[48px] lg:w-[520px] m-auto text-[#202937] leading-[74px]mb-6 lg:mb-[60px]">
            Case studies from live venues
          </p>
          <Slider {...settings} ref={sliderRef}>
            <CustomImage
              url="/assets/images/casestudy1.svg"
              className=" lg:w-[378px] h-[296px] m-auto hidden lg:block"
            />
            <CustomImage
              url="/assets/images/casestudy2.svg"
              className=" lg:w-[378px] h-[296px] m-auto hidden lg:block"
            />
            <CustomImage
              url="/assets/images/casestudy3.svg"
              className=" lg:w-[378px] h-[296px] m-auto hidden lg:block"
            />
          </Slider>
          <div className="flex gap-16 justify-center mt-10  lg:pb-[80px]">
            <div onClick={goToPrevSlide}>
              <CustomImage
                url="/assets/images/saffron arrow lft.svg"
                className="w-[48px] h-[48px] cursor-pointer"
              />
            </div>
            <div onClick={goToNextSlide}>
              <CustomImage
                url="/assets/images/saffron arrow rt.svg"
                className="w-[48px] h-[48px]  cursor-pointer"
              />
            </div>
          </div>
          <CustomImage
            url="/assets/images/Restaurant-grid.svg"
            className="w-[841px] h-[144px] m-auto cursor-pointer hidden lg:block"
          />
          <CustomImage
            url="/assets/images/Restaurant-grid-mobile.svg"
            className="w-[100%] h-[468px] m-auto cursor-pointer lg:hidden"
          />
        </div>
      </section> */}
      <section className="px-4 py-[42px] lg:py-[120px]  bg-[#FDFBF5]">
        <div className="max-w-[1195px] m-auto">
          <p className="text-center font-[400] text-[32px] lg:text-[48px] m-auto text-[#202937] leading-[74px] lg:leading-[52px] mb-6 lg:mb-[60px]">
            Frequently asked Questions
          </p>
          {faqs.map((res) => (
            <div className="mt-6">
              <Faq res={res} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
