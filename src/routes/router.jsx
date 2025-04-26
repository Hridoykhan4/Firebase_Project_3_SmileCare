import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllTreatments from "../pages/AllTreatments";
import MyAppointments from "../pages/MyAppointments";
import Profile from "../pages/Profile";
import Details from "../pages/Details";
import Login from "../pages/Login";
import Register from "../pages/Register";

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:detailId",
        element: <Details></Details>,
        loader: async ({ params }) => {
          const res = await fetch(`/services.json`);
          const data = await res.json();
          const treatmentData = data.find(
            (d) => d.id === parseInt(params.detailId)
          );
          return treatmentData;
        },
      },
    ],
  },
]);
export default router;
