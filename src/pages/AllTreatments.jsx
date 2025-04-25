import { useLoaderData } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const AllTreatments = () => {
  const services = useLoaderData() || [];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto max-w-7xl gap-5">
      {services.map((service) => (
        <ServiceCard key={service.id} service={service}></ServiceCard>
      ))}
    </section>
  );
};

export default AllTreatments;
