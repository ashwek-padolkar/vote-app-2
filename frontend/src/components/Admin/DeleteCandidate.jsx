import { useRef } from "react";
import { API_BASE_URL } from "../../apiConfig";

const DeleteCandidate = () => {
  const candidateIdElement = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const candidateId = candidateIdElement.current.value;

    try {
      const userToken = localStorage.getItem("authToken");

      if (!userToken) {
        console.error("No token found");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/candidate/${candidateId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.ok) {
        candidateIdElement.current.value = "";

        alert("Candidate deleted successfully.");
      } else {
        alert("Invalid Candidate id");
      }
    } catch (error) {
      console.log("add candidate: ", error);
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <div className="flex min-h-full flex-1 flex-col justify-center shadow-xl mb-4 px-6 py-14 border-2 lg:px-8 md:max-w-[420px] lg:max-w-[420px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Delete Candidate
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="candidateId"
                  className="leading-7 text-sm text-gray-600"
                >
                  Candidate id
                </label>
                <input
                  type="text"
                  id="candidateId"
                  name="candidateId"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="123456789021"
                  ref={candidateIdElement}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteCandidate;
