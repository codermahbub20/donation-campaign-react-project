/* eslint-disable react/prop-types */
import Card from "./Card";

const AllCard = ({cardsData}) => {
    console.log(cardsData)
   
    return (
        <div className="w-10/12 mx-auto">
            <h1 className="">All Card Section</h1>
            <div  className="grid  grid-cols-1 cursor-pointer md:grid-cols-2 lg:grid-cols-4 gap-5 ">
                {
                    cardsData?.map((card) => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default AllCard;