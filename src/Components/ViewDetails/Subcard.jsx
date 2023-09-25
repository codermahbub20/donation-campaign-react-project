import { Link } from "react-router-dom";
import swal from "sweetalert";


const Subcard = ({ card }) => {
    const { id, picture,  text_bg,  title, description } = card || {};

        const handleAddDonation = () =>{
            // console.log(card)
            const addedDonationarray = [];

            const donationItem = JSON.parse(localStorage.getItem('donation'));

            if(!donationItem){

                addedDonationarray.push(card);
                localStorage.setItem('donation',JSON.stringify(addedDonationarray));

                swal("Good job!", "Successfully Donate ", "success", {
                    button: "Aww yess!",
                  });
                  
            }else{

                const isExist = donationItem.find(card => card.id === id);

                if(!isExist){
                    addedDonationarray.push(... donationItem , card);
                    localStorage.setItem('donation',JSON.stringify(addedDonationarray));
                    swal("Good job!", "Successfully Donate ", "success", {
                        button: "Aww yess!",
                      });
                }else{
                    swal("Error!", "No Duplicate time donate!", "error", {
                        button: "Okay!",
                      });
                }
            }
            
        }

    return (
        <div className="w-10/12 md:w-9/12 h-[100vh]  mx-auto">
            <div className="hero ">
                <img className="h-[60vh] md:h-[70vh] w-full" src={picture} alt="" />
                <div className="hero-overlay p-6 mt-[170px] md:mt-[220px] lg:mt-[385px] h-28 bg-opacity-80">
                <Link onClick={handleAddDonation}><button className={`btn bg-${text_bg} border-none btn-secondary`}>Donate $290</button></Link>
                </div>
            </div>
            <h1 className="md:text-3xl font-bold py-5">{title}</h1>
            <p className="text-lg">{description}</p>
        </div>
    );
};

export default Subcard;