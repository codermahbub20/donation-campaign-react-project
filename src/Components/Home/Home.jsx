import Banner from "./Banner/Banner";
import AllCard from "./Card/AllCard";
import Navbar from "./Navbar/Navbar";


const Home = () => {
    return (
        <div>
           <h1 className="bg-orange-400">This Is Home Section</h1> 
           <Navbar></Navbar>
           <Banner></Banner>
           <AllCard></AllCard>
        </div>
    );
};

export default Home;