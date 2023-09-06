import CustomImage from "@/modules/common/components/image/image";
import React from "react";
import Slider from "react-slick";

export default function Takeaway() {
  const settings = {
    dots: false, // Hide the dots
    arrows: false, // Hide the original arrows
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true, // Center the items
    centerPadding: "0", // Adjust the padding as needed
    // responsive: [
    //   {
    //     breakpoint: 1200, // Large screens
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //     },
    //   },
    //   {
    //     breakpoint: 768, // Medium screens
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 576, // Small screens
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 0, // Extra-small screens
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
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
        className="pb-[68px]"
      >
        <div className="w-[747px] m-auto py-[60px]">
          <p className="text-center font-[400] mt-4  text-[62px] text-[#202937] leading-[74px]">
            Never An Empty Venue, During Off-Peak Hours
          </p>
          <p className="text-center font-[400] mt-4 dm-sans text-[20px] text-[#202937]">
            Use Bluedip to maximize profitability by filling empty tables even
            during off-peak hours
          </p>
        </div>
        <div className="">
          <CustomImage
            url="/assets/images/dinein-grid.svg"
            className="w-[1036px] h-[120px] m-auto "
          />
        </div>
      </section>
      <section className="py-[120px]">
        <CustomImage
          url="/assets/images/dinnein-section.svg"
          className="w-full h-[1597px] m-auto "
        />
      </section>
      <section className="bg-[#FCF9F0] py-[60px]">
        <p className="text-center font-[400] text-[48px] w-[520px] m-auto text-[#202937] leading-[74px]">
          Tap into a rapidly growing marketplace
        </p>
        <div className="bg-[#F9F4E5] w-[983px] m-auto mt-[60px] flex justify-between py-[32px] px-[48px]">
          <div>
            <p className="text-[#202937] text-[32px] text-center">283k</p>
            <p className="text-[#6A7079] dm-sans text-[20px] text-center">
              Monthly active customers
            </p>
          </div>
          <div>
            <p className="text-[#202937] text-[32px] text-center">10.34k</p>
            <p className="text-[#6A7079] dm-sans text-[20px] text-center">
              New customers every month
            </p>
          </div>
          <div>
            <p className="text-[#202937] text-[32px] text-center">283k</p>
            <p className="text-[#6A7079] dm-sans text-[20px] text-center">
              Average order value
            </p>
          </div>
        </div>
      </section>
      <section className="pt-[120px] pb-[80px]">
        <div>
          <p className="text-center font-[400] text-[48px] w-[520px] m-auto text-[#202937] leading-[74px] mb-[60px]">
            Our Reviews
          </p>
          <Slider {...settings} ref={sliderRef}>
            <CustomImage
              url="/assets/images/review.svg"
              className="w-[1061px] h-[421px] m-auto "
            />
          </Slider>
          <div className="flex gap-16 justify-center mt-12 pb-[100px]">
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
        </div>
        <CustomImage
          url="/assets/images/never.svg"
          className="w-[1061px] h-[189px] m-auto "
        />
      </section>
    </main>
  );
}
