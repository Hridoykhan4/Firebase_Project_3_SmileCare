import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>   
            </header>  
            <main className="min-h-[calc(100vh-400px)]">
            <Outlet></Outlet>     
            </main>

            <>
                <Footer></Footer>
            </>    
        </div>
    );
};

export default MainLayout;