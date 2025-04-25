import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allTreatments"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          All Treatments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myAppointments"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          My Appointments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-semibold" : "hover:text-blue-500"
          }
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow rounded-box w-52 bg-white"
          >
            {links}
          </ul>
        </div>
        {/* Brand Name */}
        <NavLink to="/" className="text-2xl font-bold text-blue-700">
          SmileCare
        </NavLink>
      </div>

      {/* Desktop Nav */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-2 space-x-2">{links}</ul>
      </div>

      {/* Login Button */}
      <div className="navbar-end">
        <a className="btn btn-primary px-6 rounded-full shadow-md hover:shadow-lg transition duration-300">
          Login
        </a>
      </div>
    </div>
  );
};

export default Navbar;
