import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Reservations from "./Pages/Reservations";
import Confirm from "./Pages/Confirm";
import OrderOnline from "./Pages/OrderOnline";
import RootMenuPage from "./Pages/RootMenuPage";
import ItemPage from "./Pages/ItemPage";
import MealsSec from "./Components/Main/MenuComp/MealsSec/MealsSec";
import DessertSec from "./Components/Main/MenuComp/DessertSec/DessertSec";
import DrinkSec from "./Components/Main/MenuComp/DrinkSec/DrinkSec";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "menu",
        element: <RootMenuPage />,
        children: [
          { index: true, element: <MealsSec /> },
          { path: ":itemId", element: <ItemPage /> },
          { path: "desserts", element: <DessertSec /> },
          { path: "desserts/:itemId", element: <ItemPage /> },
          { path: "drinks", element: <DrinkSec /> },
          { path: "drinks/:itemId", element: <ItemPage /> },
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
      { path: "orderonline", element: <OrderOnline /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
