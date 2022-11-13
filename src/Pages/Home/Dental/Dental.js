import React from "react";
import dentalImg from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const Dental = () => {
  return (
    <div className="hero lg:p-24">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt=""
          src={dentalImg}
          className=" lg:w-1/2 rounded-lg shadow-2xl"
        />
        <div className="lg:pl-10">
          <h1 className="text-3xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <PrimaryButton>Get Started</PrimaryButton>
         
        </div>
      </div>
    </div>
  );
};

export default Dental;
