import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logInAction } from "./Store/LogInState";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Reservations from "./Pages/Reservations";
import Confirm from "./Pages/Confirm";
import RootMenuPage from "./Pages/RootMenuPage";
import MealsSec from "./Components/Main/MenuComp/MealsSec/MealsSec";
import DessertSec from "./Components/Main/MenuComp/DessertSec/DessertSec";
import DrinkSec from "./Components/Main/MenuComp/DrinkSec/DrinkSec";

const router = createBrowserRouter([
  {
    path: "Littel-Lemon",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "menu",
        element: <RootMenuPage />,
        children: [
          { index: true, element: <MealsSec /> },
          { path: "desserts", element: <DessertSec /> },
          { path: "drinks", element: <DrinkSec /> },
        ],
      },
      { path: "about", element: <About /> },
      {
        path: "reservations",
        children: [
          { index: true, element: <Reservations /> },
          { path: "confirm", element: <Confirm /> },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const loginInformation = localStorage.getItem("isLogged");
    if (loginInformation === "1") {
      dispatch(logInAction.logIn());
    }
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
