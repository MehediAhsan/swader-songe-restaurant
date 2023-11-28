import { Outlet } from "react-router-dom";
import SideBar from "./../pages/shared/SideBar";
import Footer from "./../pages/shared/Footer";
// import DashboardHeader from "../dashboard/DashboardHeader";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col">
      {/* <DashboardHeader></DashboardHeader> */}
      <div className="flex h-screen p-4 gap-4">
        <SideBar />
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
