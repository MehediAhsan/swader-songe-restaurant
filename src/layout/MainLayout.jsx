import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Header from "../pages/shared/Header";


const MainLayout = () => {
    return (
        <div>
           <Header></Header>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default MainLayout;