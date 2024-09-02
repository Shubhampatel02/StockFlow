import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const [isChecked, setIsChecked] = useState(true); // Added state for checkbox
  const navigate = useNavigate();

  // Handling Input change for registration form.
  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Register User
  const registerUser = () => {
    fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((result) => {
        alert("Successfully Registered, Now Login with your details");
        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-200">
      <div className="w-full max-w-sm bg-white bg-opacity-80 p-6 rounded-lg shadow-lg border border-gray-200">
        <div className="mb-6 text-center">
          <img
            className="mx-auto h-12 w-auto"
            src={require("../assets/logo.png")}
            alt="Your Company"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">
            Register your account
          </h2>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                name="firstName"
                type="text"
                required
                className="relative block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-500 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleInputChange}
              />
              <input
                name="lastName"
                type="text"
                required
                className="relative block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-500 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleInputChange}
              />
            </div>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="relative block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-500 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="Email address"
              value={form.email}
              onChange={handleInputChange}
            />
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="relative block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-500 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              value={form.password}
              onChange={handleInputChange}
            />
            <input
              name="phoneNumber"
              type="tel"
              autoComplete="tel"
              required
              className="relative block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-500 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
              placeholder="Phone Number"
              value={form.phoneNumber}
              onChange={handleInputChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="agree-terms"
                name="agree-terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                checked={isChecked}
                onChange={(e) => setIsChecked(e.target.checked)}
              />
              <label
                htmlFor="agree-terms"
                className="ml-2 text-sm text-gray-700"
              >
                I Agree to Terms & Conditions
              </label>
            </div>
            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
            <p className="mt-4 text-center text-sm text-gray-600">
              Or{" "}
              <span className="font-medium text-indigo-600 hover:text-indigo-500">
                Already have an account?{" "}
                <Link to="/login">Sign in now</Link>
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
