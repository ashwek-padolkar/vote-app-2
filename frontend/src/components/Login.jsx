import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../apiConfig";

const Login = () => {
  const navigate = useNavigate();

  const aadharCardNumberElement = useRef();
  const passwordElement = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingUser = {
      aadharCardNumber: aadharCardNumberElement.current.value,
      password: passwordElement.current.value,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(existingUser),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        const { role } = data;

        localStorage.setItem("authToken", token);

        aadharCardNumberElement.current.value = "";
        passwordElement.current.value = "";

        role === "voter" ? navigate("/home") : navigate("/admin");

        alert("Login successfully.");
      } else {
        alert("Invalid username or password.");
      }
    } catch (error) {
      console.log("login: ", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex min-h-full flex-1 flex-col justify-center shadow-xl mb-4 px-6 py-6 border-2 lg:px-8 md:max-w-[420px] lg:max-w-[420px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="aadhar"
                  className="leading-7 text-sm text-gray-600"
                >
                  Aadhar Card No.
                </label>
                <input
                  type="text"
                  id="aadharCardNumber"
                  name="aadharCardNumber"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="123456789021"
                  ref={aadharCardNumberElement}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="password"
                  className="leading-7 text-sm text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="password707"
                  ref={passwordElement}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Log in
              </button>
            </div>
          </form>

          <center className="p-4 mx-auto sm:max-w-sm">
            <p className="inline pr-2 text-sm text-gray-500">
              Don't have an account?
            </p>
            <Link to="/" className="text-blue-600 hover:text-blue-800">
              Sign up
            </Link>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Login;
