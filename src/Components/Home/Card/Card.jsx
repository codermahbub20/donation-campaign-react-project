import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id, picture, card_bg, category, text_bg, category_bg, title } = card || {};
    console.log(id)
    return (
        <div className="mb-5">

            <Link to={`/cardsData/${id}`}>
                <div className={`card ${card_bg} shadow-xl`}>
                    <figure><img className="w-full h-48 rounded-xl " src={picture} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className={`text-${text_bg}  ${category_bg} card-title`}>{category}</h2>
                        <h1 className={`text-xl text-${text_bg} font-bold`}>{title}</h1>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;