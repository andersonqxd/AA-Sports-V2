import react from "react";
import "./Home.css";
import banner from "../assets/icons/banner/1367_desk_full_campanha_payday.gif"
import ListProducts from "../components/product/ListProducts"


// colocando alguns produtos


const Home = () => {
    

    return(
        <div className="home-page">
            <img src={banner} alt="loja virtual" className="home-banner" />
            {/* <Carousel/> */}
            <ListProducts />
        </div>
    );
};

export default Home;