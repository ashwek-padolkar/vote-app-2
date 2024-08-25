import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../apiConfig";

const Signup = () => {
  const navigate = useNavigate();

  const nameElement = useRef();
  const ageElement = useRef();
  const emailElement = useRef();
  const mobileElement = useRef();
  const addressElement = useRef();
  const aadharCardNumberElement = useRef();
  const passwordElement = useRef();
  const roleElement = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      name: nameElement.current.value,
      age: ageElement.current.value,
      email: emailElement.current.value,
      mobile: mobileElement.current.value,
      address: addressElement.current.value,
      aadharCardNumber: aadharCardNumberElement.current.value,
      password: passwordElement.current.value,
      role: roleElement.current.value,
    };

    try {
      const response = await fetch(`${API_BASE_URL}/user/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        const data = await response.json();
        const { token } = data;

        localStorage.setItem("authToken", token);

        nameElement.current.value = "";
        ageElement.current.value = "";
        emailElement.current.value = "";
        mobileElement.current.value = "";
        addressElement.current.value = "";
        aadharCardNumberElement.current.value = "";
        passwordElement.current.value = "";
        roleElement.current.value = "";

        newUser.role === "voter" ? navigate("/home") : navigate("/admin");

        alert("Registered successfully.");
      } else {
        if (newUser.role === "admin") {
          alert("Please select the role as 'Voter'");
        } else {
          alert("Account already exists. Please Login in.");
        }
      }
    } catch (error) {
      console.log("register: ", error);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="flex min-h-full flex-1 flex-col justify-center border-2 shadow-xl mb-4 px-14 py-6 md:max-w-[623px] lg:max-w-[623px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="name"
                  className="leading-7 text-sm text-gray-600"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="Hank Silver"
                  ref={nameElement}
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="age"
                  className="leading-7 text-sm text-gray-600"
                >
                  Age
                </label>
                <input
                  type="text"
                  id="age"
                  name="age"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="45"
                  ref={ageElement}
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="hanksilver@example.com"
                  ref={emailElement}
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="mobile"
                  className="leading-7 text-sm text-gray-600"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="5550123456"
                  ref={mobileElement}
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="address"
                  className="leading-7 text-sm text-gray-600"
                >
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="707 Redwood St, Anytown, USA"
                  ref={addressElement}
                />
              </div>
            </div>
            <div className="p-2 w-full sm:w-1/2">
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
            <div className="p-2 w-full sm:w-1/2">
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
            <div className="p-2 w-full sm:w-1/2">
              <div className="relative">
                <label
                  htmlFor="role"
                  className="block leading-7 text-sm text-gray-600"
                >
                  Role
                </label>
                <select
                  name="role"
                  // id="role"
                  ref={roleElement}
                  className="w-full p-2 mt-[1px] border-2 rounded"
                >
                  <option value="voter">Voter</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div className="p-2 w-full">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
            <div className="p-4 mx-auto sm:max-w-sm">
              <p className="inline pr-2 text-sm text-gray-500">
                Already have an account?
              </p>
              <Link to="/login" className="text-blue-600 hover:text-blue-800">
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
