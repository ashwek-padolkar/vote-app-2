import unknownParty from "../assets/unknown.jpg";

const Candidate = ({ candidate, handleVote, partyLogo }) => {
  const defaultPartyLogo = unknownParty;

  const handleOnClick = (candidateId) => {
    handleVote(candidateId);
  };

  return (
    <div className="m-4 p-4 2xl:w-1/6  xl:lg:w-1/5 lg:w-1/4 md:w-1/3 border-2 rounded-lg shadow-2xl">
      <div className="h-full flex flex-col items-center">
        {partyLogo !== undefined ? (
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={partyLogo}
          />
        ) : (
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={defaultPartyLogo}
          />
        )}
        <div className="w-full px-4">
          <div>
            <h2 className="inline text-lg text-gray-900">Name:</h2>
            <h2 className="inline font-medium text-lg text-gray-900">
              {"  " + candidate.name}
            </h2>
          </div>
          <div>
            <h3 className="inline text-lg text-gray-900">Age:</h3>
            <h3 className="inline font-medium text-lg text-gray-900">
              {"  " + candidate.age}
            </h3>
          </div>
          <div>
            <h3 className="inline text-lg text-gray-900">Party:</h3>
            <h3 className="inline font-medium text-lg text-gray-900">
              {"  " + candidate.party}
            </h3>
          </div>
          {/* <p className="mb-4">
            DIY tote bag drinking vinegar cronut adaptogen squid.
          </p> */}
          <center>
            <button
              onClick={() => handleOnClick(candidate._id)}
              className="inline-flex text-white bg-indigo-500 border-0 my-4 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Vote
            </button>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Candidate;
