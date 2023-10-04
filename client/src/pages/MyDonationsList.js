import React, {useState, useEffect} from "react";
import MyDonationCard from "../components/MyDonationCard";

function MyDonationsList(){
   const [donations, setDonations] = useState([])

   useEffect(() => {
      fetch("/mydonations").then((r) => {
        if (r.ok) {
          r.json().then((donations) => setDonations(donations));
        }
      });
    }, []);

    console.log(donations)

   return (
       donations.map(donation => <MyDonationCard donation={donation}/>)
   )
}

export default MyDonationsList;

 