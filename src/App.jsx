import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import RootLayout from "./Pages/RootLayout";
import ErrorPage from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Menu from "./Pages/Menu";
import Reservations from "./Pages/Reservations";
import OrderOnline from "./Pages/OrderOnline";
import LogIn from "./Pages/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "menu", element: <Menu /> },
      { path: "reservations", element: <Reservations /> },
      { path: "orderonline", element: <OrderOnline /> },
      { path: "login", element: <LogIn /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
