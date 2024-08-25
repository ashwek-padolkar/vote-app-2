import { Link } from "react-router-dom";
import theme from "../assets/theme.jpg";

const Theme = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-5 md:flex-row flex-col items-center xl:pt-0">
        <div className="xl:max-w-2xl xl:w-full lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img src={theme} height="600px" width="600px" alt="" />
        </div>
        <div className="xl:pl-2 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            BehtmlFore they sold out
            <br className="hidden lg:inline-block"></br>readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchhtmlFork pour-over freegan heirloom neutra
            air plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className="flex justify-center xl:mb-32">
            <Link to="/home/vote">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Vote Now
              </button>
            </Link>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme;
