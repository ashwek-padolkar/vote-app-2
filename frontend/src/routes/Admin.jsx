import { Outlet } from "react-router-dom";
import AdminHeader from "../components/Admin/AdminHeader";

const Admin = () => {
  return (
    <div className="min-h-full">
      <AdminHeader />
      <Outlet />
    </div>
  );
};

export default Admin;
