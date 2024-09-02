import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const authCheck = () => {
    setTimeout(() => {
      fetch("http://localhost:4000/api/login")
        .then((response) => response.json())
        .then((data) => {
          alert("Successfully Logged In");
          localStorage.setItem("user", JSON.stringify(data));
          authContext.signin(data._id, () => {
            navigate("/");
          });
        })
        .catch((err) => {
          alert("Wrong credentials, Try again");
          console.log(err);
        });
    }, 3000);
  };

  const loginUser = (e) => {
    if (form.email === "" || form.password === "") {
      alert("To login, please enter your email and password.");
    } else {
      fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(form),
      })
        .then((result) => {
          console.log("User login", result);
        })
        .catch((error) => {
          console.log("Something went wrong", error);
        });
    }
    authCheck();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-600 to-blue-200">
      <div className="w-full max-w-5xl flex shadow-lg">
        {/* Login Form Section */}
        <div className="w-full max-w-md bg-white bg-opacity-70 backdrop-blur-md p-8 rounded-lg shadow-lg">
          <div className="mb-6 text-center">
            <img
              className="mx-auto h-12 w-auto"
              src={require("../assets/logo.png")}
              alt="StockFlow Logo"
            />
          </div>
          <h2 className="text-center text-3xl font-bold text-gray-900 mb-6">
            Sign in to StockFlow
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-500 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full rounded-md border-gray-300 py-3 px-4 text-gray-900 placeholder-gray-500 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-gray-700"
                >
                  Remember me
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
                className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-3 px-4 text-sm font-semibold text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
              <p className="mt-4 text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  Register now
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Simplified Content Section */}
        <div className="hidden lg:flex flex-col justify-center items-start pl-12 space-y-4 text-white max-w-md">
          <h2 className="text-4xl font-bold">Welcome to StockFlow</h2>
          <p className="text-lg">
            Manage your inventory effortlessly. Track stock levels, monitor sales,products and optimize your business with ease.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center">
            
              Real-time tracking
            </li>
            <li className="flex items-center">
             
              Simplified management
            </li>
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Login;
