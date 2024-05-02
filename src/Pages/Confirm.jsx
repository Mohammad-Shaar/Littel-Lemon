import { Outlet } from "react-router-dom";
import FormSection from "../Components/Main/ConfirmComp/FormSection/FormSection";
import SecoundSection from "../Components/Main/ConfirmComp/SecoundSection/SecoundSection";

const Confirm = () => {
  return (
    <>
      <Outlet />
      <FormSection />
      <SecoundSection />
    </>
  );
};

export default Confirm;
