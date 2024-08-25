import { useEffect, useState } from "react";
import CandidateList from "./CandidateList";
import party1 from "../../assets/bjp-logo.jpg";
import party2 from "../../assets/inc-logo.jpg";
import party3 from "../../assets/aap-logo.jpg";
import party4 from "../../assets/gf-logo.jpg";
import { API_BASE_URL } from "../../apiConfig";

const GetCandidates = () => {
  // const dispatch = useDispatch();
  // const candidates = useSelector((store) => store.candidate);

  // const navigate = useNavigate();
  const [candidates, setCandidates] = useState([]);

  const partyLogo = [party1, party2, party3, party4];

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/candidate`);
        const data = await response.json();

        setCandidates(data);
      } catch (error) {
        console.error("Failed to fetch candidates:", error);
      }
    };

    fetchCandidates();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
            CANDIDATES
          </h1>
        </div>
        <div className="flex justify-center flex-wrap -m-4">
          {candidates.map((candidate, index) => (
            <CandidateList
              key={candidate._id}
              candidate={candidate}
              partyLogo={partyLogo[index]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetCandidates;
