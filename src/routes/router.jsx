import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllTreatments from "../pages/AllTreatments";
import MyAppointments from "../pages/MyAppointments";
import Profile from "../pages/Profile";
import Details from "../pages/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
          const serviceData = await fetch("/services.json");
          const services = await serviceData.json();
          const feedBackData = await fetch("/happyClients.json");
          const feedBack = await feedBackData.json();
          return { services, feedBack };
        },
      },
      {
        path: "/allTreatments",
        element: <AllTreatments></AllTreatments>,
        loader: async () => await fetch("/services.json"),
      },
      {
        path: "/myAppointments",
        element: <MyAppointments></MyAppointments>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
      },
    ],
  },
]);
export default router;
