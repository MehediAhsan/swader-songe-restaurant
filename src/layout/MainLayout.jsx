import { Outlet } from "react-router-dom";
import Footer from "./../components/shared/Footer";
import Header from "./../components/shared/Header";

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