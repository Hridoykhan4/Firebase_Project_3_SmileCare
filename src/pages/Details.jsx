import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router-dom";
import { addAppointments } from "../utils/localStorage";
import AuthContext from "../contexts/AuthContext";

const Details = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const nav = useNavigate();

  const treatmentData = useLoaderData() || {};
  const [showModal, setShowModal] = useState(false);

  const {
    treatment,
    image,
    description,
    cost,
    duration,
    recoveryTime,
    successRate,
    doctor,
    availableSlots = [],
    isAvailable,
    ratings,
    patientsTreated,
    keywords = [],
    location,
    category,
  } = treatmentData;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setShowModal(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const onSubmit = (data) => {
    const { firstName, lastName, phone, address, appointmentDate } = data;

    const info = {
      firstName,
      lastName,
      phone,
      address,
      appointmentDate,
      email: user?.email || "",
      treatment,
    };

 

    addAppointments(info);

    reset();
    setShowModal(false);
    nav("/myAppointments");
  };

  return (
    <div className="w-11/12 mx-auto px-4 py-8">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2">
          <img
            src={image}
            alt={treatment}
            className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
          />
        </div>

        <div className="lg:w-1/2 p-6 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">{treatment}</h2>
          <p className="text-gray-600">{description}</p>

          <div className="grid grid-cols-2 gap-3 text-sm text-gray-700">
            <p>
              <strong>Cost:</strong> ${cost}
            </p>
            <p>
              <strong>Duration:</strong> {duration}
            </p>
            <p>
              <strong>Recovery:</strong> {recoveryTime}
            </p>
            <p>
              <strong>Success Rate:</strong> {successRate}
            </p>
            <p>
              <strong>Doctor:</strong> {doctor}
            </p>
            <p>
              <strong>Category:</strong> {category}
            </p>
            <p>
              <strong>Location:</strong> {location}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              {isAvailable ? "Available" : "Unavailable"}
            </p>
            <p>
              <strong>Ratings:</strong> ⭐ {ratings}
            </p>
            <p>
              <strong>Patients Treated:</strong> {patientsTreated}
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mt-4">
              Available Slots:
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {availableSlots.map((slot, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs"
                >
                  {slot}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mt-4">Keywords:</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {keywords.map((word, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
                >
                  #{word}
                </span>
              ))}
            </div>

            <button
              onClick={() => setShowModal(true)}
              className="relative inline-block px-6 py-3 mt-5 font-semibold tracking-wide text-white bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
            >
              Book Appointment
            </button>
          </div>
        </div>

        {showModal && (
          <div
            className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
            /*  onClick={(e) => {
              if (e.target.classList.contains("fixed")) {
                setShowModal(false);
              }
            }} */
          >
            <div className="bg-white p-6 rounded-xl shadow-lg w-11/12 max-w-md">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <InputField
                  label="First Name"
                  name="firstName"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Last Name"
                  name="lastName"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Email"
                  name="email"
                  value={user?.email}
                  type="email"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Appointment Date"
                  name="appointmentDate"
                  type="date"
                  register={register}
                  errors={errors}
                />
                <InputField
                  label="Address"
                  name="address"
                  register={register}
                  errors={errors}
                />

                <button
                  type="submit"
                  className="w-full bg-neutral text-white py-3 rounded-md font-semibold hover:bg-black transition"
                >
                  Make Appointment
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const InputField = ({
  label,
  name,
  type = "text",
  register,
  errors,
  value,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-semibold mb-1">
      {label}
    </label>
    <input
      id={name}
      type={type}
      value={value}
      placeholder={`Enter ${label}`}
      {...register(name, { required: `${label} is required` })}
      className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
    />
    {errors[name] && (
      <p className="text-red-500 text-xs mt-1">{errors[name]?.message}</p>
    )}
  </div>
);

export default Details;
