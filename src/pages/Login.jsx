import { useContext, useState } from "react";
import AuthContext from "../contexts/AuthContext";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { handleGoogleLogin, setUser, handleLogin, notify } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const { state } = useLocation();

  const nav = useNavigate();

  const from = state ? state : "/";

  const handleGoogleSignIn = () => {
    handleGoogleLogin()
      .then((result) => {
        setUser(result.user);
        nav(from);
        notify("Google SignIn Successful")
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const email = form.get("email");
    const password = form.get("password");

    handleLogin(email, password)
      .then((result) => {
        setUser(result.user);
        notify("Login Successful");
        nav(from);
      })
      .catch((err) => setError(err.code));
  };

  return (
    <div>
      <div className="w-full mx-auto max-w-lg bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">
          Login your account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="w-full bg-neutral text-white py-3 rounded-md font-semibold hover:bg-black transition"
          >
            Login
          </button>
        </form>

        <p className="text-red-500 mt-4">{error}</p>

        <p className="text-center text-sm mt-4">
          Don't have an account?{" "}
          <Link to="/register" className="text-sky-500 hover:underline">
            Register
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

export default Login;
