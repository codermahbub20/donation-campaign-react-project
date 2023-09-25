


const Banner = () => {

    const handleSearch = () =>{
        const searchField = document.getElementById('search-field');

    }

    return (
        <div>
            <div className="hero h-[70vh]" style={{ backgroundImage: 'url(https://i.ibb.co/G33QmwV/Rectangle-4281.png)' }}>
                <div className="hero-overlay bg-white bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className=" ">
                        <h1 className="text-3xl font-bold text-black mb-5">I Grow By Helping People In Need</h1>
                    <input id="search-field" type="text" placeholder="Type here" className="input text-black  w-[300px] max-w-xs" />
                    <button onClick={handleSearch} className=" px-6 py-3 text-white bg-[#FF444A]">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;