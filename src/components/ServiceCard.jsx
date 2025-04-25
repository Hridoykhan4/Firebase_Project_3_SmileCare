import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { id, treatment, image, description, cost } = service;

  return (
    <div className="flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-md hover:shadow-2xl transition-shadow duration-300">
        <figure className="aspect-[4/3] w-full overflow-hidden">
          <img
            src={image}
            alt={treatment}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </figure>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-2">{treatment}</h2>
          <p title={description} className="text-gray-600 text-sm mb-4">
            {description.slice(0, 170)}...{" "}
            <Link to={`/details/${id}`} className="text-red-500 text-sm link">
              Read More
            </Link>
          </p>

          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
              <img
                src={`https://i.ibb.co.com/wm9RMN8/32ba8529-6b49-4757-b8cd-142f464cdc64photo.jpg `}
                alt="Avatar"
                className="w-10 h-10 object-cover rounded-full mr-2"
              />
              <span className="font-medium text-gray-700">Dr. John Doe</span>
            </div>
            <div className="text-right">
              <p className="font-semibold text-blue-600">
                <span className="link">Cost</span>: ${cost}
              </p>
            </div>
          </div>
          <div className="pt-4 flex justify-end">
            <button className="btn bg-sky-300 ">Checkout More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
