import { useLoaderData } from "react-router-dom";

const Details = () => {
  const treatmentData = useLoaderData() || {};

  const {
    treatment,
    image,
    description,
    cost,
    duration,
    recoveryTime,
    successRate,
    doctor,
    availableSlots,
    isAvailable,
    ratings,
    patientsTreated,
    keywords,
    location,
    category,
  } = treatmentData;

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
            <p><strong>Cost:</strong> ${cost}</p>
            <p><strong>Duration:</strong> {duration}</p>
            <p><strong>Recovery:</strong> {recoveryTime}</p>
            <p><strong>Success Rate:</strong> {successRate}</p>
            <p><strong>Doctor:</strong> {doctor}</p>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Location:</strong> {location}</p>
            <p><strong>Status:</strong> {isAvailable ? "Available" : "Unavailable"}</p>
            <p><strong>Ratings:</strong> ⭐ {ratings}</p>
            <p><strong>Patients Treated:</strong> {patientsTreated}</p>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mt-4">Available Slots:</h4>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
