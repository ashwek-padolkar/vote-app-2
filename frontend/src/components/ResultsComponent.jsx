import { useEffect, useState } from "react";
import Party from "./Party";
import party1 from "../assets/bjp-logo.jpg";
import party2 from "../assets/inc-logo.jpg";
import party3 from "../assets/aap-logo.jpg";
import party4 from "../assets/gf-logo.jpg";
import { API_BASE_URL } from "../apiConfig";

const ResultsComponent = () => {
  const [parties, setParties] = useState([]);

  const partyLogo = [party1, party2, party3, party4];

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/candidate/vote/count`);
        const data = await response.json();

        const partyArrayWithLogos = data.map((party, index) => ({
          ...party,
          logo: partyLogo[index] || null,
        }));

        setParties(partyArrayWithLogos);
      } catch (error) {
        console.error("Failed to fetch candidates:", error);
      }
    };

    fetchResults();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-wrap">
        {parties.map((party, index) => (
          <Party key={index} party={party} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ResultsComponent;
