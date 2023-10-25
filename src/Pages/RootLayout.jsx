import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Components/HeaderAndFooter/Header";
import Footer from "../Components/HeaderAndFooter/Footer";
import LogIn from "../Components/Log/LogIn";
import LogOut from "../Components/Log/LogOut";

const RootLayout = () => {
  const showLogCard = useSelector((state) => state.logInState.showLogCard);
  const logInCard = useSelector((state) => state.logInState.isLogIn);

  return (
    <>
      {showLogCard && !logInCard && <LogIn />}
      {showLogCard && logInCard && <LogOut />}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
