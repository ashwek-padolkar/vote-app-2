import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Candidate from "./Candidate";
import { candidateSliceActions } from "../store/candidateSlice";
import { useDispatch, useSelector } from "react-redux";
import party1 from "../assets/bjp-logo.jpg";
import party2 from "../assets/inc-logo.jpg";
import party3 from "../assets/aap-logo.jpg";
import party4 from "../assets/gf-logo.jpg";
import { API_BASE_URL } from "../apiConfig";

const VoteComponent = () => {
  const dispatch = useDispatch();
  const candidates = useSelector((store) => store.candidate);

  const navigate = useNavigate();

  const partyLogo = [party1, party2, party3, party4];

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/candidate`);
        const data = await response.json();

        dispatch(candidateSliceActions.setCandidateDetails(data));
      } catch (error) {
        console.error("Failed to fetch candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  const handleVote = async (id) => {
    try {
      const userInput = prompt("Are you sure? Type 'YES' to confirm.");

      if (userInput !== "YES") {
        return;
      }

      // Retrieve the token from localStorage
      const userToken = localStorage.getItem("authToken");

      if (!userToken) {
        console.error("No token found");
        return;
      }

      const response = await fetch(`${API_BASE_URL}/candidate/vote/${id}`, {
        method: "POST", // or "POST", "PUT", etc., depending on your endpoint
        headers: {
          Authorization: `Bearer ${userToken}`, // Pass the Bearer token
        },
      });

      if (response.ok) {
        navigate("/home/vote/response");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.log("vote: ", error);
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            CANDIDATES
          </h1>
        </div>
        <div className="flex justify-center flex-wrap -m-4">
          {candidates.map((candidate, index) => (
            <Candidate
              key={candidate._id}
              candidate={candidate}
              handleVote={handleVote}
              partyLogo={partyLogo[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VoteComponent;
