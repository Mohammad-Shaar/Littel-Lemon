import HeroSection from "../Components/Main/HomeComp/HeroSection/HeroSection";
import SpecialsMealsSection from "../Components/Main/HomeComp/SpecialsMealsSection/SpecialsMealsSection";
import CommintSection from "../Components/Main/HomeComp/CommintSection/CommintSection";
import ChefsSection from "../Components/Main/HomeComp/ChefsSection/ChefsSection";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Outlet />
      <HeroSection />
      <SpecialsMealsSection />
      <CommintSection />
      <ChefsSection />
    </>
  );
};

export default Home;
