/* eslint-disable react/prop-types */
import Card from "./Card";

const AllCard = ({cardsData}) => {
    console.log(cardsData)
   
    return (
        <div className="w-10/12 mt-24 mx-auto">
       
            <div  className="grid  grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {
                    cardsData?.map((card) => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default AllCard;