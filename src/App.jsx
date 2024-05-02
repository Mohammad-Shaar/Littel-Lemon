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
import LogIn from "./Components/Log/LogIn";
import LogOut from "./Components/Log/LogOut";
import Card from "./Components/HeaderAndFooter/cardButton/Card";

const routesForAllPages = [
  { path: "login", element: <LogIn /> },
  { path: "logout", element: <LogOut /> },
  { path: "orders", element: <Card /> },
];

const router = createBrowserRouter([
  {
    path: "Littel-Lemon",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
        children: [...routesForAllPages],
      },
      {
        path: "menuitems",
        element: <RootMenuPage />,
        children: [
          {
            path: "",
            element: <MenuItems items="meals" />,
            children: [
              { path: ":id", element: <ItemCard /> },
              ...routesForAllPages,
            ],
          },

          {
            path: "desserts",
            element: <MenuItems items="desserts" />,
            children: [
              { path: ":id", element: <ItemCard /> },
              ...routesForAllPages,
            ],
          },
          {
            path: "drinks",
            element: <MenuItems items="drinks" />,
            children: [
              { path: ":id", element: <ItemCard /> },
              ...routesForAllPages,
            ],
          },
        ],
      },
      {
        path: "about",
        element: <About />,
        children: [...routesForAllPages],
      },
      {
        path: "reservations",
        children: [
          {
            path: "",
            element: <Reservations />,
            children: [...routesForAllPages],
          },
          {
            path: "confirm",
            element: <Confirm />,
            children: [...routesForAllPages],
          },
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
