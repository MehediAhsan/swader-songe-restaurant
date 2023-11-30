import { Outlet } from "react-router-dom";
import Footer from "./../components/shared/Footer";
import SideBar from "./../components/shared/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="flex h-screen p-4 gap-4">
        <SideBar />
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
