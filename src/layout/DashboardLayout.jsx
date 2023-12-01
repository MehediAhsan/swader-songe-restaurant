import { Outlet } from "react-router-dom";
import Footer from "./../components/shared/Footer";
import SideBar from "./../components/shared/SideBar";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col">
      <div className="flex p-6 gap-6">
        <SideBar />
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
