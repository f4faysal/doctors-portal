import React, { useState } from "react";
import banarIgBg from '../../../assets/images/bg.png';
import AppointmentBanner from "../AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "../AvailableAppointments/AvailableAppointments";


const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <section  className="my-6"
    style={{
      background: `url(${banarIgBg})`,
      backgroundSize: "cover",
    }}>
      <div>
        <AppointmentBanner
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        ></AppointmentBanner>
        <AvailableAppointments
          selectedDate={selectedDate}
        ></AvailableAppointments>
      </div>
    </section>
  );
};

export default Appointment;
