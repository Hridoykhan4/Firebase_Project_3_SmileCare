const getAppointmentsData = () => {
  const storedAppointments = localStorage.getItem("appointments");
  return storedAppointments ? JSON.parse(storedAppointments) : [];
};

const saveToDB = (allData) => {
  localStorage.setItem("appointments", JSON.stringify(allData));
};

const addAppointments = (appointment) => {
  const storedAppointments = getAppointmentsData();

  storedAppointments.push(appointment);

  saveToDB(storedAppointments);
};

export { getAppointmentsData, addAppointments };
