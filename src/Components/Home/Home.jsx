import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import AllCard from "./Card/AllCard";

const Home = () => {
    
    const cardsData = useLoaderData();
    // console.log(cardData);
    return (
        <div>
           <Banner></Banner>
           <AllCard key={cardsData.id} cardsData={cardsData} ></AllCard>
        </div>
    );
};

export default Home;