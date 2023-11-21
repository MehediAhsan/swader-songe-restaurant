import { Outlet } from "react-router-dom";
import Header from "./../pages/shared/Header";
import SideBar from "./../pages/shared/SideBar";
import Footer from "./../pages/shared/Footer";

const DashboardLayout = () => {
  return (
    <div className="flex flex-col">
      <Header></Header>
      <div className="flex h-screen">
        <SideBar />
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
