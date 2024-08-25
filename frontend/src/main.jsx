import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./routes/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Registration from "./routes/Registration.jsx";
import Home from "./routes/Home.jsx";
import Vote from "./routes/Vote.jsx";
import Response from "./routes/Response.jsx";
import Results from "./routes/Results.jsx";
import { Provider } from "react-redux";
import votingStore from "./store/index.js";
import Login from "./components/Login.jsx";
import MyProfile from "./components/MyProfile.jsx";
import Admin from "./routes/Admin.jsx";
import AddCandidate from "./components/Admin/AddCandidate.jsx";
import AdminDashboard from "./components/Admin/AdminDashboard.jsx";
import GetCandidates from "./components/Admin/GetCandidates.jsx";
import UpdateCandidate from "./components/Admin/UpdateCandidate.jsx";
import DeleteCandidate from "./components/Admin/DeleteCandidate.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Registration /> },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/profile",
        element: <MyProfile />,
      },
      {
        path: "/home/vote",
        element: <Vote />,
      },
      {
        path: "/home/vote/response",
        element: <Response />,
      },
      {
        path: "/results",
        element: <Results />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "/admin",
        element: <AdminDashboard />,
      },
      {
        path: "/admin/add",
        element: <AddCandidate />,
      },
      {
        path: "/admin/get",
        element: <GetCandidates />,
      },
      {
        path: "/admin/update",
        element: <UpdateCandidate />,
      },
      {
        path: "/admin/delete",
        element: <DeleteCandidate />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={votingStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>
);
