import { useRef } from "react";
import { API_BASE_URL } from "../../apiConfig";

const AddCandidate = () => {
  const candidateNameElement = useRef();
  const candidatePartyElement = useRef();
  const candidateAgeElement = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newCandidate = {
      name: candidateNameElement.current.value,
      party: candidatePartyElement.current.value,
      age: candidateAgeElement.current.value,
    };

    try {
      const userToken = localStorage.getItem("authToken");

      if (!userToken) {
        console.error("No token found");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/candidate`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify(newCandidate),
      });

      if (response.ok) {
        candidateNameElement.current.value = "";
        candidatePartyElement.current.value = "";
        candidateAgeElement.current.value = "";

        alert("Candidate added successfully");
      }
    } catch (error) {
      console.log("add candidate: ", error);
    }
  };

  return (
    <div className="flex justify-center mt-14">
      <div className="flex min-h-full flex-1 flex-col justify-center shadow-xl mb-4 px-6 py-6 border-2 lg:px-8 md:max-w-[420px] lg:max-w-[420px]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add Candidate
          </h2>
        </div>

        <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="candidateName"
                  className="leading-7 text-sm text-gray-600"
                >
                  Candidate name
                </label>
                <input
                  type="text"
                  id="candidateName"
                  name="candidateName"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="123456789021"
                  ref={candidateNameElement}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="candidateParty"
                  className="leading-7 text-sm text-gray-600"
                >
                  Party name
                </label>
                <input
                  type="text"
                  id="candidateParty"
                  name="candidateParty"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="123456789021"
                  ref={candidatePartyElement}
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  htmlFor="candidateAge"
                  className="leading-7 text-sm text-gray-600"
                >
                  Age
                </label>
                <input
                  type="text"
                  id="candidateAge"
                  name="candidateAge"
                  required
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  // value="123456789021"
                  ref={candidateAgeElement}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCandidate;
