import React from "react";
import banarIgBg from "../../../assets/images/bg.png";
import banarImg from "../../../assets/images/chair.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Banner = () => {
  return (
    <section className=""
      style={{
        background: `url(${banarIgBg})`,
      }}
    >
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            alt=""
            src={banarImg}
            className=" lg:w-1/2  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Your New Smile Starts <br /> Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
           <PrimaryButton></PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
