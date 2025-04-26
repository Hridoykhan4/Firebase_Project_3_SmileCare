import { useContext } from "react";
import { NavLink } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Navbar = () => {
  const { user, handleLogOut } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500 transition duration-200"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allTreatments"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500 transition duration-200"
          }
        >
          All Treatments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myAppointments"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500 transition duration-200"
          }
        >
          My Appointments
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold"
              : "hover:text-blue-500 transition duration-200"
          }
        >
          Profile
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-white/70 backdrop-blur-md shadow-lg sticky top-0 z-50 px-4">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow rounded-box w-52 bg-white space-y-2"
          >
            {links}
          </ul>
        </div>
        {/* Brand Name */}
        <NavLink to="/" className="sm:text-xl font-bold text-blue-700 ml-2">
          SmileCare
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{links}</ul>
      </div>

      <div className="navbar-end space-x-3">
        {user ? (
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLogOut}
              className="btn btn-outline btn-primary rounded-full"
            >
              Logout
            </button>
            <details className="dropdown dropdown-end">
              <summary className="m-1 btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img
                    src={user?.photoURL || "/default-avatar.png"}
                    alt="Profile"
                  />
                </div>
              </summary>
              <ul className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 space-y-1">
                <li>
                  <a>{user && user?.email || "Email Not Found"}</a>
                </li>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
              </ul>
            </details>
          </div>
        ) : (
          <NavLink
            to="/login"
            className="btn btn-primary px-6 rounded-full shadow-md hover:shadow-lg transition duration-300"
          >
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
