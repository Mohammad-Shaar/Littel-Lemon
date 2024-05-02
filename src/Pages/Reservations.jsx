import { Outlet } from "react-router-dom";
import ReservationsSection from "../Components/Main/ReservationsComp/ReservationsSection/ReservationsSection";
import SecoundSection from "../Components/Main/ReservationsComp/SecoundSection/SecoundSection";

const Reservations = () => {
  return (
    <>
      <Outlet />
      <ReservationsSection />
      <SecoundSection />
    </>
  );
};

export default Reservations;
