import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../../assets/images/chair.png";


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <header
     
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            alt="dentist chair"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="mr-6 sm:w-full">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
