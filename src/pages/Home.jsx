import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import ServiceCard from "../components/ServiceCard";
import FeedBack from "../components/FeedBack";

const Home = () => {
  const { services, feedBack: feedBacks } = useLoaderData() || [];

  return (
    <>
      <Banner></Banner>

      {/* Service Section for 5 Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto max-w-7xl gap-5">
        {services.slice(0, 5).map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </section>

      {/* Show All Button */}
      <div className="flex justify-center">
        <Link
          to="/allTreatments"
          className="relative inline-block px-6 py-3 font-semibold tracking-wide text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg shadow-md hover:from-blue-600 hover:to-cyan-500 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          <span className="relative z-10">Show All Services</span>
          <span className="absolute inset-0 rounded-lg opacity-0 hover:opacity-10 bg-white transition-opacity duration-300"></span>
        </Link>
      </div>

      {/* Patient Review Section */}

      <div className="flex gap-3 w-full mt-6">
        <div className="card bg-base-300 rounded-box grid h-3 grow place-items-center"></div>
        <div className=" divider-horizontal">||</div>
        <div className="card bg-base-300 rounded-box grid h-3 grow place-items-center"></div>
      </div>

      <>
        <h2 className="my-5 text-xl sm:text-3xl underline   text-center text-blue-500 font-bold">Reviews</h2>
        <section className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto max-w-7xl gap-5">
          {feedBacks.map((feed) => (
            <FeedBack key={feed.reviewId} feed={feed}></FeedBack>
          ))}
        </section>
      </>
    </>
  );
};

export default Home;
