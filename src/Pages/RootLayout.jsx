import { Outlet } from "react-router-dom";
import Header from "../Components/HeaderAndFooter/Header";
import Footer from "../Components/HeaderAndFooter/Footer";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
