import CustomImage from "@/modules/common/components/image/image";
import React, { useState } from "react";
import Slider from "react-slick";
import Lottie from "lottie-react";
import webjson from "../modules/home/json/season.json";
import mobilejson from "../modules/home/json/season mobile.json";

export default function Index() {
  const [activeTab, setActiveTab] = useState(1);
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
      <div
        style={{
          backgroundImage: 'url("/assets/images/Homebackground.svg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="px-4 py-5"
      >
        <div className="lg:w-[680px] m-auto lg:py-[20px]">
          <CustomImage
            url="/assets/images/herotext.svg"
            className="w-[full] h-[188px] hidden lg:block"
          />
          <CustomImage
            url="/assets/images/mobile-heading.svg"
            className="w-[full] h-[148px]  lg:hidden"
          />

          <p className=" lg:px-[54px] text-center font-[500] mt-3 lg:mt-4 dm-sans text-[20px] text-[#202937]">
            A mobile app that helps you discover local restuarants with
            exclusive offers throughout the day
          </p>
          <div className="flex gap-5 justify-center mt-8">
            <CustomImage
              url="/assets/images/App Store.svg"
              className="w-[189px] h-[61px]"
            />
            <CustomImage
              url="/assets/images/Play Store.svg"
              className="w-[202px] h-[61px]"
            />
          </div>
        </div>
        <div className="m-auto relative">
          <CustomImage
            url="/assets/images/herosection.svg"
            className="w-[1221px] h-[545px] hidden lg:block m-auto mb-8"
          />
          <CustomImage
            url="/assets/images/mobile-hero-section.svg"
            className="w-[100%] h-[419px]  lg:hidden m-auto mt-8"
          />
          {/* <CustomImage
            url="/assets/images/info.svg"
            className="w-[1206px] h-[120px] m-auto hidden lg:block top-[60px]"
          />
          <CustomImage
            url="/assets/images/mobile-info.svg"
            className="w-[100%] h-[120px] m-auto lg:hidden  "
          /> */}
        </div>
      </div>
      {/* <section className="px-4 py-5">
        <p className="mt-[42px] lg:mt-[120px] text-center text-[32px] lg:text-[48px]">
          Over 500 Restaurants in Delhi
        </p>
        <div className="flex justify-center mt-4 gap-2">
          <p
            onClick={() => setActiveTab(1)}
            className={`dm-sans text-[20px] font-[400]  px-4 pb-2 border-b-[2px] cursor-pointer ${
              activeTab == 1
                ? "border-b-[#D8B448] text-[#D8B448]"
                : "border-b-transparent text-[#6A7079]"
            } `}
          >
            East
          </p>
          <div className="w-[1px] h-[28px] mt-1 bg-[#6A7079]"></div>
          <p
            onClick={() => setActiveTab(2)}
            className={`dm-sans text-[20px] font-[400]  px-4 border-b-[2px] cursor-pointer ${
              activeTab == 2
                ? "border-b-[#D8B448] text-[#D8B448]"
                : "border-b-transparent text-[#6A7079]"
            } `}
          >
            West
          </p>
          <div className="w-[1px] h-[28px] mt-1 bg-[#6A7079]"></div>
          <p
            onClick={() => setActiveTab(3)}
            className={`dm-sans text-[20px] font-[400]  px-4 border-b-[2px] cursor-pointer ${
              activeTab == 3
                ? "border-b-[#D8B448] text-[#D8B448]"
                : "border-b-transparent text-[#6A7079]"
            } `}
          >
            North
          </p>
          <div className="w-[1px] h-[28px] mt-1 bg-[#6A7079]"></div>
          <p
            onClick={() => setActiveTab(4)}
            className={`dm-sans text-[20px] font-[400]  px-4 border-b-[2px] cursor-pointer  ${
              activeTab == 4
                ? "border-b-[#D8B448] text-[#D8B448]"
                : "border-b-transparent text-[#6A7079]"
            } `}
          >
            South
          </p>
        </div>
        <div className=" lg:w-[1184px] mx-auto mt-[32px] lg:mt-[60px]">
          <Slider {...settings} ref={sliderRef}>
            <CustomImage
              url="/assets/images/pizza.svg"
              className="w-[372.99px] h-[355.939px]  !mx-auto"
            />

            <div>
              <CustomImage
                url="/assets/images/pizza.svg"
                className="w-[372.99px] h-[355.939px] !mx-auto"
              />
            </div>
            <div>
              <CustomImage
                url="/assets/images/pizza.svg"
                className="w-[372.99px] h-[355.939px]  !mx-auto"
              />
            </div>
            <div>
              <CustomImage
                url="/assets/images/pizza.svg"
                className="w-[372.99px] h-[355.939px]  !mx-auto"
              />
            </div>
            <div>
              <CustomImage
                url="/assets/images/pizza.svg"
                className="w-[372.99px] h-[355.939px]  !mx-auto"
              />
            </div>
            <div>
              <CustomImage
                url="/assets/images/pizza.svg"
                className="w-[372.99px] h-[355.939px] !mx-auto"
              />
            </div>
          </Slider>
          <div className="flex gap-8 lg:gap-16 justify-center mt-4 lg:mt-12 pb-[48px] lg:pb-[100px]">
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
      </section> */}
      <section>
        <div
          style={{
            backgroundImage: 'url("/assets/images/pattern-bg.svg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="py-[42px] px-4  lg:py-[80px]"
        >
          <p className="text-[32px] lg:text-[48px] text-[#202937] text-center max-w-[500px] m-auto lg:leading-[52px] mb-6 lg:mb-[32px]">
            Exclusive offers in your pocket
          </p>
          <div className="lg:flex lg:w-[1184px] gap-8 justify-between m-auto">
            <div>
              <div className="flex mt-4 gap-5">
                <p
                  onClick={() => setActiveTab(1)}
                  className={`text-[20px] lg:text-[32px] font-[400]    border-b-[2px] cursor-pointer ${
                    activeTab == 1
                      ? "border-b-[#D8B448] text-[#202937]"
                      : "border-b-transparent text-[#6A7079]"
                  } `}
                >
                  Dine-in
                </p>
                <div className="w-[1px] h-[32px] my-auto  bg-[#6A7079]"></div>
                <p
                  onClick={() => setActiveTab(2)}
                  className={`text-[20px] lg:text-[32px] font-[400] border-b-[2px] cursor-pointer ${
                    activeTab == 2
                      ? "border-b-[#D8B448] text-[#202937]"
                      : "border-b-transparent text-[#6A7079]"
                  } `}
                >
                  Takeaway
                </p>
              </div>
              {activeTab == 1 ? (
                <>
                  <p className="dm-sans text-[16px] lg:text-[20px] text-[#202937] font-[500] mt-5">
                    Redeem a dine-in offer and enjoy up to 50% off your total
                    bill, including drinks!
                  </p>
                  <div className="flex mt-4 lg:mt-10 gap-7">
                    <div>
                      <CustomImage
                        url="/assets/images/vertical-timeline.svg"
                        className="w-[45px] lg:w-[50px] h-[224px]"
                      />
                    </div>
                    <div>
                      <p className="dm-sans text-[16px] font-[500] lg:text-[20px] text-[#202937] mt-[24px] lg:mt-3">
                        Redeem a dine-in offer
                      </p>
                      <br />
                      <br />
                      <p className="dm-sans text-[16px] font-[500] lg:text-[20px] text-[#202937]  mt-1">
                        Eat, drink, have a great time
                      </p>
                      <br />
                      <br />
                      <p className="dm-sans text-[16px] font-[500] lg:text-[20px] text-[#202937] mt-1">
                        Show your digital voucher to the venue on arrival and
                        they will apply the offer to the total bill at the end
                        of your meal.
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="dm-sans text-[16px]  lg:text-[20px] text-[#202937] font-[500] mt-5">
                    Choose your deal, order from your phone and receive
                    notifications when your food is ready to pick up.
                  </p>
                  <div className="flex mt-4  lg:mt-10 gap-7">
                    <div>
                      <CustomImage
                        url="/assets/images/vertical-timeline.svg"
                        className="w-[45px] lg:w-[50px] h-[224px]"
                      />
                    </div>
                    <div>
                      <p className="dm-sans text-[16px] font-[500] lg:text-[20px] text-[#202937]  mt-[24px] lg:mt-3">
                        Redeem a takeaway offer
                      </p>
                      <br />
                      <br />
                      <p className="dm-sans text-[16px] font-[500] lg:text-[20px] text-[#202937]  lg:mt-1">
                        Select items from the menu
                      </p>
                      <br />
                      <br />
                      <p className="dm-sans text-[16px] font-[500] lg:text-[20px] text-[#202937] mt-1">
                        Secure checkout from your phone, with real-time updates
                        to pick up your food when ready.
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
            <div>
              {activeTab == 1 ? (
                <CustomImage
                  url="/assets/images/dinnin-bg.svg"
                  className="w-full lg:w-[576.347px] h-[294px] mt-4 lg:mt-0 lg:h-[504.421px] flex-1"
                />
              ) : (
                <CustomImage
                  url="/assets/images/home-tab-image-2.svg"
                  className="w-full lg:w-[576.347px]  h-[294px] mt-4 lg:mt-0 lg:h-[504.421px] flex-1"
                />
              )}
            </div>
          </div>
        </div>
      </section>
      <section>
        <Lottie
          animationData={webjson}
          loop={true}
          className="hidden lg:block"
        />
        <Lottie animationData={mobilejson} loop={true} className=" lg:hidden" />
      </section>
    </main>
  );
}
