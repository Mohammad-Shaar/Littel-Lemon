import { Outlet } from "react-router-dom";
import Intro from "../Components/Main/AboutComp/Intro/Intro";
import LocationSec from "../Components/Main/AboutComp/LocationSec/LocationSec";

const About = () => {
  return (
    <>
      <Outlet />
      <Intro />
      <LocationSec />
    </>
  );
};

export default About;
