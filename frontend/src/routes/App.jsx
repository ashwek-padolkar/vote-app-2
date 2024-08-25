import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet, useLocation } from "react-router-dom";
import Header2 from "../components/Header2";

function App() {
  const location = useLocation();
  const showAnotherHeader = ["/", "/login", "/results"];

  return (
    <>
      {!showAnotherHeader.includes(location.pathname) ? (
        <Header />
      ) : (
        <Header2 />
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
