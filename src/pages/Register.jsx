import { useContext, useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const Register = () => {
  const { handleRegister, setUser, manageProfile, handleGoogleLogin, notify } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const nav = useNavigate();

  const { state } = useLocation();
  const from = state ? state : "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirm-password");

    if (password !== confirmPassword) {
      return setError("Password is not matching");
    }

    setError("");

    handleRegister(email, password)
      .then((result) => {
        setUser(result.user);
        manageProfile(name, photo).then(() => {
     
        });
        nav(from);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

 

  const handleGoogleSignIn = () => {
    handleGoogleLogin()
      .then((result) => {
        setUser(result.user);
        notify("Registration is Successful");
        nav(from);
      })
      .catch(() => {
       
      });
  };

  return (
    <div>
      <div className="w-full mx-auto max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">
              Your Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label htmlFor="photo" className="block text-sm font-semibold mb-1">
              Photo URL
            </label>
            <input
              name="photo"
              id="photo"
              type="text"
              placeholder="Enter your photo URL"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold mb-1"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
          </div>

          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-semibold mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="Confirm Your Password"
              className="w-full px-4 py-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
            />
            {error && <p className="text-red-600">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-neutral text-white py-3 rounded-md font-semibold hover:bg-black transition"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-sky-500 hover:underline">
            Login
          </Link>
        </p>

        <div className="space-y-3 mt-4">
          <button className="btn w-full rounded-full border border-gray-300">
            <FaFacebookF className="text-blue-600" />
            Continue with Facebook
          </button>
          <button
            onClick={handleGoogleSignIn}
            className="btn w-full rounded-full border border-gray-300"
          >
            <FaGoogle className="text-red-500" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
