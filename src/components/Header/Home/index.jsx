import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Accordion from "../../Accordion";
import section1 from "../../../assets/images/section1.png";
import section2 from "../../../assets/images/section2.png";
import section3 from "../../../assets/images/section3.png";
import section4 from "../../../assets/images/section4.png";
import netflixPng from  '../../../assets/images/netflixPng.png'
import popcorn from "../../../assets/images/SVG.svg";

const Home = () => {


  return (
    <>
      <div
        style={{
          background: `url(${netflixPng})no-repeat center/cover`,
          minHeight: "80vh",
        }}
        className="py-[60px] "
      >
        <div className="conteiner">
          <div className="flex items-center justify-center md:mt-[150px] max-lg:mt-[90px] flex-col gap-[30px]">
            <h1 className="md:text-5xl max-lg:text-3xl font-bold">
              Unlimited movies, TV shows, and more
            </h1>
            <h1 className="md:text-3xl max-lg:text-xl">Watch anywhere. Cancel anytime.</h1>
            <h1 className="md:text-3xl max-lg:text-xl">
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
            <div className="flex items-center  2xl:justify-between max-xl:flex-col gap-[20px]">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#161616B2] py-[18px] px-[32px] xl:w-[450px] max-xl:w-[280px] text-white md:text-2xl max-lg:text-xl rounded-md border-2 border-gray-500 outline-none"
              />
              <button className="py-[18px] px-[32px] md:text-2xl max-lg:text-[18px] bg-[#E50914] font-semibold flex items-center justify-between gap-[15px]">
                Get Started <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[100px] relative border-b-4 border-b-gray-600">
        <div className="conteiner">
          <div className="homebg  md:flex max-lg:hidden items-center justify-center gap-[20px] py-[20px] absolute top-[-60px] w-[90%] left-[5%]">
            <img src={popcorn} alt="img" />
            <div className="flex items-start flex-col gap-[8px]">
              <h1 className="font-bold text-xl">
                The Netflix you love for just $6.99.
              </h1>
              <h1>Get the Standard with ads plan.</h1>
              <button className=" px-[32px] text-2xl text-[#448EF4] font-semibold flex items-center justify-between gap-[15px]">
                Learn More <FaChevronRight />
              </button>
            </div>
          </div>
          <div className="flex items-center 2xl:justify-around max-xl:flex-col">
            <div className="flex items-start flex-col gap-[20px]">
              <h1 className="md:text-4xl max-lg:text-2xl font-bold">Enjoy on your TV</h1>
              <p className="text-xl">
                Watch on Smart TVs, Playstation, Xbox, Chromecast,
                <br />
                Apple TV, Blu-ray players, and more.
              </p>
            </div>
            <img src={section1} alt="img" />
          </div>
        </div>
      </div>
      <div className="py-[100px]  border-b-4 border-b-gray-600">
        <div className="conteiner">
          <div className="flex items-center 2xl:justify-around max-xl:flex-col">
            <img src={section2} alt="img" />
            <div className="flex items-start flex-col gap-[20px]">
              <h1 className="md:text-4xl max-lg:text-2xl font-bold">Watch everywhere</h1>
              <p className="text-xl">
                Stream unlimited movies and TV shows on your <br />
                phone, tablet, laptop, and TV.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[100px]  border-b-4 border-b-gray-600">
        <div className="conteiner">
          <div className="flex items-center 2xl:justify-around max-xl:flex-col">
            <div className="flex items-start flex-col gap-[20px]">
              <h1 className="md:text-4xl max-lg:text-2xl font-bold">Create profiles for kids</h1>
              <p className="text-xl">
                Send kids on adventures with their favorite characters <br /> in
                a space made just for them—free with your <br /> membership.
              </p>
            </div>
            <img src={section3} alt="img" />
          </div>
        </div>
      </div>
      <div className="py-[100px]  border-b-4 border-b-gray-600">
        <div className="conteiner">
          <div className="flex items-center 2xl:justify-around max-xl:flex-col">
            <img src={section4} alt="img" />
            <div className="flex items-start flex-col gap-[20px]">
              <h1 className="md:text-4xl max-lg:text-2xl font-bold">
                Download your shows to <br />
                watch offline
              </h1>
              <p className="text-xl">
                Watch on a plane, train, or submarine...
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[100px] border-b-4 border-b-gray-600">
        <div className="conteiner">
          <div className="flex items-center flex-col gap-[40px]">
            <h1 className="md:text-4xl max-lg:text-2xl font-bold">Frequently Asked Questions</h1>
            <div className="flex items-start flex-col gap-[10px] mx-auto w-[70%]">
              <Accordion/>
            </div>
            <h1>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h1>
            <div className="flex items-center 2xl:justify-between max-xl:flex-col gap-[20px]">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#161616B2] py-[18px] px-[32px] xl:w-[450px] max-xl:w-[280px] text-white text-sm rounded-md border-2 border-gray-500 outline-none"
              />
              <button className="py-[18px] px-[32px] text-sm bg-[#E50914] font-semibold flex items-center justify-between gap-[15px]">
                Get Started <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
