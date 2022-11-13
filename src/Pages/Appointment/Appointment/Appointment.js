import React, { useState } from "react";
import banarIgBg from "../../../assets/images/bg.png";
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section>
      <div
        className="my-6"
        style={{
          background: `url(${banarIgBg})`,
          backgroundSize: "100%",
        }}
      >
        <AppointmentBanner
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></AppointmentBanner>
      </div>
      <AvailableAppointments
        selectedDate={selectedDate}
      ></AvailableAppointments>
    </section>
  );
};

export default Appointment;
