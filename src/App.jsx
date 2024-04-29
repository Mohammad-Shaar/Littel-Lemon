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
import MenuItems from "./Components/Main/MenuComp/MenuItems/MenuItems";
import ItemCard from "./Components/UI/ItemCard/ItemCard";

const router = createBrowserRouter([
  {
    path: "Littel-Lemon",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "menuitems",
        element: <RootMenuPage />,
        children: [
          {
            index: true,
            element: <MenuItems items="meals" />,
          },
          {
            path: ":id",
            element: <MenuItems items="meals" idForIndex />,
          },
          {
            path: "desserts",
            element: <MenuItems items="desserts" />,
            children: [{ path: ":id", element: <ItemCard /> }],
          },
          {
            path: "drinks",
            element: <MenuItems items="drinks" />,
            children: [{ path: ":id", element: <ItemCard /> }],
          },
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
