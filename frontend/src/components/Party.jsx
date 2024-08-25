const Party = ({ party, index }) => {
  return (
    <div className="pl-4 w-full sm: flex h-60 sm:h-40 my-5 sm:items-center sm:w-2/3 mx-auto border-2 rounded-lg">
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
        {index + 1}
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="mt-4 flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-12 h-12"
            viewBox="0 0 24 24"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
            Party: {party.party}
          </h2>
          <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
            No. of Votes: {party.count}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Party;
