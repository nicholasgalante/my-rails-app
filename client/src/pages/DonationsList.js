import React, {useState, useEffect} from "react";

function DonationsList(){
   const [donations, setDonations] = useState([])

   useEffect(() => {
      fetch("/mydonations").then((r) => {
        if (r.ok) {
          r.json().then((donations) => setDonations(donations));
        }
      });
    }, []);

    console.log(donations)

   return "hello world"
}

export default DonationsList;

 