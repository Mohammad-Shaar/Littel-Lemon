import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations";
import Confirm from "./Pages/Confirm";
import OrderOnline from "./Pages/OrderOnline";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "menu", element: <Menu /> },
      {
        path: "reservations",
        children: [
          {
            index: true,
            element: <Reservations />,
          },
          {
            path: "confirm",
            element: <Confirm />,
          },
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
