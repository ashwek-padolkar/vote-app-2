import unknownParty from "../../assets/unknown.jpg";

const CandidateList = ({ candidate, partyLogo }) => {
  const defaultPartyLogo = unknownParty;

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
        <div className="w-full">
          <div>
            <h2 className="inline text-sm text-gray-900">Id:</h2>
            <h2 className="inline font-medium text-sm text-gray-900">
              {"  " + candidate._id}
            </h2>
          </div>
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
        </div>
      </div>
    </div>
  );
};

export default CandidateList;
