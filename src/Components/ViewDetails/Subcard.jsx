

const Subcard = ({ card }) => {
    const { id, picture, card_bg, category, text_bg, category_bg, title, description } = card || {};
    return (
        <div className="w-10/12 md:w-9/12 h-[100vh]  mx-auto">
            <div className="hero ">
                <img className="h-[60vh] md:h-[70vh] w-full" src={picture} alt="" />
                <div className="hero-overlay p-6 mt-[170px] md:mt-[220px] lg:mt-[385px] h-28 bg-opacity-80">
                <button className={`btn bg-${text_bg} border-none btn-secondary`}>Donate $290</button>
                </div>
            </div>
            <h1 className="md:text-3xl font-bold py-5">{title}</h1>
            <p className="text-lg">{description}</p>
        </div>
    );
};

export default Subcard;