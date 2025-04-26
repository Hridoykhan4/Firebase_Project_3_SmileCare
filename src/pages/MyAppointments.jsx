import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { getAppointmentsData } from "../utils/localStorage";
import { Link } from "react-router-dom";

const MyAppointments = () => {
  const { user } = useContext(AuthContext);
  const [myVisits, setMyVisits] = useState([]);

  useEffect(() => {
    const getData = getAppointmentsData();
    if (getData) {
      const userData = getData.filter(
        (appointment) => user.email === appointment.email
      );
      setMyVisits(userData);
    }
  }, [user.email]);

  return (
    <div className="min-h-screen py-10 px-4 bg-gray-100">
      {myVisits.length <= 0 ? (
        <div className="flex flex-col justify-center items-center pt-20">
          <p className="font-semibold text-2xl text-red-900">
            No Appointment has been chosen yet!
          </p>
          <Link
            to="/allTreatments"
            className="mt-6 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-5 rounded-md transition"
          >
            Show Our Services
          </Link>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myVisits.map((visit, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-bold mb-2 text-sky-700">{visit?.treatment}</h3>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">First Name:</span> {visit?.firstName}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Last Name:</span> {visit?.lastName}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Phone:</span> {visit?.phone}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Email:</span> {visit?.email}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Appointment Date:</span> {visit?.appointmentDate}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Address:</span> {visit?.address}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyAppointments;
