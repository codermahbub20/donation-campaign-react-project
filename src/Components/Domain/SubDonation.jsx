import { Link } from "react-router-dom";


const SubDonation = ({ sub }) => {

    const { id, picture,text_bg,title,category,category_bg, price, card_bg } = sub || {};

    return (
        <div className="mt-6">
            <div className={`card card-side md:w-[550px] h-[240px] ${card_bg}  shadow-xl`}>
                <figure><img className=" h-full md:w-[300px]" src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <h3 className={`card-title ${category_bg}   rounded-lg w-fit p-1 `}>{category}</h3>
                    <h3 className="card-title ">{title}</h3>
                    <h1 className="text-xl md:font-bold">${price}.00</h1>
                    <div className="card-actions ">
                        <Link to={`/cardsData/${id}`}><button className={`btn   bg-${text_bg} border-none`}>View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubDonation;