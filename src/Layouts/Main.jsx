import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navber from "../Pages/Shared/Navber/Navber";
import Myself from "../Components/Myself";
import Banner from "../Components/BannerSection/Banner";
import Skilset from "../Components/skilSet/Skilset";
import Project from "../Components/Project/Project";
import Contact from "../Components/Contact";


const Main = () => {
    return (
        <div>

               
            <Navber></Navber>
            {/* <Outlet>    </Outlet>   */}
            <Banner></Banner>

            <Myself></Myself>
            {/* <Skilset></Skilset> */}
            <Project></Project>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Main;