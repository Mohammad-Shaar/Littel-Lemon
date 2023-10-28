import { Outlet } from "react-router-dom";
import OptionMenu from "../Components/Main/MenuComp/OptionMenu/OptionMenu";

const RootMenuItem = () => {
  return (
    <>
      <OptionMenu />
      <Outlet />
    </>
  );
};

export default RootMenuItem;
