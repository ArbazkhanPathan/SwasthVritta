

// export const Prakriti1 = (props) => {
//   return (
//     <div id='prakriti1'>
      
        
//           <h2>Prakriti1</h2>
          
        
//         <div className='container_assesment'>
//           {/* <div className='box_assesment'> */}
//             {props.data
//               ? props.data.map((d, i) => (
//                 <div key={`${d.question}-${i}`} >
//                   <div className='box_assesment'>
//                   <h2>{d.question}</h2>
//                   <button>{d.option1}</button>
                  
//             <button>{d.option2}</button>
//             <button>{d.option3}</button>
//             <button>{d.option4}</button>
//             <br/>
//                 </div>
//                 </div>
//               ))
//               : 'Loading...'}
//           </div>
//         {/* </div> */}
      
//     </div>
//   )
// }




import React, { useState, useEffect } from "react";

import { db } from "../firebase";

const Prakriti1 = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Us </h1>

      <label>Name</label>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>Email</label>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label>Message</label>
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      ></textarea>

      <button
        type="submit"
        style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
      >
        Submit
      </button>
    </form>
  );
};

export default Prakriti1;














// import { db } from "../firebase";
// import { collection, addDoc } from "firebase/firestore"; 
// import { getFirestore, doc } from 'firebase/firestore';
// import { setDoc } from "firebase/firestore/lite";


// const specialofTheDay = doc(db, 'dailySpecial/2021-09-14');
// function Prakriti1(){
//   const docData = {
//     name:'arbaz',
//     price:3.99,
//     milk: 'Whole',
//     vegan: false,
//   };
//   setDoc(specialofTheDay, docData);
// }

// console.log('hello arbaz')
// Prakriti1();
// export default Prakriti1;