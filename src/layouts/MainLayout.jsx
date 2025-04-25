import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>   
            </header>  
            <Outlet></Outlet>     

            <>
                <Footer></Footer>
            </>    
        </div>
    );
};

export default MainLayout;