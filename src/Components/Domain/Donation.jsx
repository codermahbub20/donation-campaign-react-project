import { useEffect, useState } from "react";
import SubDonation from "./SubDonation";

const Donation = () => {

    const [donation,setDonation] = useState([])
    const [datalength,setDatalength] = useState(4);

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
            donation.slice(0,datalength).map(sub => <SubDonation key={sub.id} sub={sub}></SubDonation>)
        }
         <div className={datalength === donation.length && 'hidden' || "flex mt-5 md:ml-[490px]"}>
                <button className="px-3 rounded-xl text-xl   text-white py-3 bg-green-700" onClick={() => setDatalength(donation.length)}>See All</button>
            </div>
            
        </div>
    );
};

export default Donation;