import { useEffect, useState } from "react";
import SubDonation from "./SubDonation";

const Donation = () => {

    const [donation,setDonation] = useState([])

    useEffect(() =>{
        const donationItem = JSON.parse(localStorage.getItem("donation"));
        if(donationItem){
            setDonation(donationItem) 
        }
    },[])

    console.log(donation)

    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 w-9/12 mx-auto">
        {
            donation.map(sub => <SubDonation key={sub.id} sub={sub}></SubDonation>)
        }
            
        </div>
    );
};

export default Donation;