import dentistBanner from "../assets/banner (1).png";

const Banner = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 via-white to-blue-50 py-10">
      <div className="w-11/12 mx-auto flex items-center justify-between flex-col-reverse lg:flex-row-reverse gap-10">
        <img
          src={dentistBanner}
          className="max-w-md w-full rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
          alt="Dentist Banner"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 leading-tight">
            Your Smile, Our Passion.
          </h1>
          <p className="py-6 text-gray-600 text-lg leading-relaxed">
            Experience top-notch dental care that brings confidence to your
            smile. We're here to make every visit comfortable and worthwhile.
          </p>
          <button className="btn btn-primary px-8 py-3 text-white text-lg rounded-full shadow-md hover:shadow-xl transition duration-300">
            Book Appointment
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
