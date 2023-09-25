import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Subcard from "./Subcard";


const Viewdetails = () => {

    const [card, setCard] = useState()
    const { id } = useParams();
    console.log(id)

    const cardsData = useLoaderData();
    // console.log(cardsData)
    
    useEffect(() => {
        const findData = cardsData?.find((card) => card.id == id);
        setCard(findData)
    }, [cardsData, id])

    console.log(card)

    return (
        <div>
            <Subcard card={card}></Subcard> 
        </div>
    );
};

export default Viewdetails;