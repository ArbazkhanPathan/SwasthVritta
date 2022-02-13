

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




// import React, { useState, useEffect } from "react";


// const Prakriti1 = () => {
    //   const [name, setName] = useState("");
    //   const [email, setEmail] = useState("");
    //   const [message, setMessage] = useState("");
    
    //   const [loader, setLoader] = useState(false);
    
    //   const handleSubmit = (e) => {
        //     e.preventDefault();
        //     setLoader(true);
        
        //     db.collection("contacts")
        //       .add({
            //         name: name,
            //         email: email,
            //         message: message,
            //       })
            //       .then(() => {
                //         setLoader(false);
                //         alert("Your message has been submitted👍");
                //       })
                //       .catch((error) => {
                    //         alert(error.message);
                    //         setLoader(false);
                    //       });
                    
                    //     setName("");
                    //     setEmail("");
                    //     setMessage("");
                    //   };
                    
                    //   return (
                        //     <form className="form" onSubmit={handleSubmit}>
                        //       <h1>Contact Us </h1>
                        
                        //       <label>Name</label>
                        //       <input
                        //         placeholder="Name"
                        //         value={name}
                        //         onChange={(e) => setName(e.target.value)}
                        //       />
                        
                        //       <label>Email</label>
                        //       <input
                        //         placeholder="Email"
                        //         value={email}
                        //         onChange={(e) => setEmail(e.target.value)}
                        //       />
                        
                        //       <label>Message</label>
                        //       <textarea
                        //         placeholder="Message"
                        //         value={message}
                        //         onChange={(e) => setMessage(e.target.value)}
                        //       ></textarea>
                        
                        //       <button
                        //         type="submit"
                        //         style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)" }}
                        //       >
                        //         Submit
                        //       </button>
                        //     </form>
                        //   );
                        // };
                        
                        // export default Prakriti1;
                        
                        
import { db } from "../firebase";                        
import "./prakriti.css"
import React, { useState, useEffect } from "react";
// export const Prakriti = (props) => {
  const Prakriti1 = (props) => {
  return (
      <div>
      <div className="container-prakriti">
        <div className="intros full-screen">
          {/* <img id="message-blob" src="../images/message-blob.png" /> */}
          <img id="message-blob" src="./img/images/message-blob.png" />
          <h1 id="namaste-text">Namaste</h1>
          <img id="namaste-img" src="./img/images/namaste-img.png" />
        </div>
            
        <div className="form-div full-screen">
          <div className="heading">
            <img src="./img/images/bot.png" id="bot-img" alt="bot" />
              <p className="about-h1"><span>Hi I am Havya, Health Bot<br /></span>Tell me about you </p>
            </div>
            <form id="names">
                <div className="form-in">
                    <input className="input" type="text" name="fname" id="fname" placeholder="First Name"/>
                    <input className="input" type="text" name="lname" id="lname" placeholder="Last Name"/>
                </div>
                <div>
                    <input type="email" className="w-long input" name="email" id="email" placeholder="Email Address" /> 
                </div>
                <div className="form-in">
                   <input className="input" type="text" name="address" id="city" placeholder="City" /> 
                   <input className="input" type="text" name="address" id="state" placeholder="State" /> 
                </div>
                <div>
                   <input className="input w-long" type="drop"  name="phno" id="phno" placeholder="Mobile Number" /> 
                </div>
                <div>
                   <select className="w-long input" id="occupation" placeholder="">
                       <option>Student</option>
                       <option>Employee</option>
                       <option>House Wife</option>
                       <option>Others</option>
                   </select>
                </div>
                <div>
                   <input type="text" className="w-long input" name="address" id="address" placeholder="Address" /> 
                </div>
                <input className="w-long input" type="file" name="photo" id="photo" placeholder="Upload you photo" />
                <button className="w-long input">Submit</button>
            </form>
        </div>

        <div className="prakriti-info full-screen">
            <div className="heading">
                <img src="./img/images/bot.png" id="bot-img" alt="bot" />
                <p className="about-h1">Before we proceed for prakrati assessment<br /> Let us see What is Prakriti</p>
            </div>
            <div className="prakriti-text">
                <h1>Basics of Prakriti</h1>
                <p className=""> Prakriti literally refers to “Nature” of an Individual.The Science of Life, Ayurveda emphasizes on the
                    fact that every individual is different.
                    Prakriti is the unique physical and psychological
                    nature of body.
                    Prakriti is hereditary in nature as it is determined at
                    the time of conception and remains unchanged
                    throughout the life of an individual.</p>



            </div>
        </div>
        <div className="prakriti-info full-screen">
            <div className="heading no-pad right ">
                <p className="about-h1 w-long no-pad"><b>What is Prakriti</b></p>
            </div>
            <div className="prakriti-text">
                <h2>Understanding Prakriti</h2>
                <p className="info-box"> 
                    Prakriti is the unique Psychosomatic Constitution which deals with determining :<br />
                    <ul className="list">
                        <li>Biological functions</li>
                        <li>Response to environmental factors and drugs</li>
                        <li>Susceptibility to diseases</li>
                    </ul><br />
                    <p className="info-box">
                        This makes it one of the earliest known concept of
                    Promotive, Protective and Curative personalized
                    medicine.
                    </p>
                </p>
            </div>
        </div>
        <div className="prakriti-info full-screen">
            <div className="heading no-pad right ">
                
                <p className="about-h1 w-long no-pad"><b>What is Prakriti</b></p>
            </div>
            <div className="prakriti-text">
                <h2>Applications of Prakriti</h2>
                <p className="info-box"> 
                    Your Unique Prakriti helps you decide :<br />
                    <ol className="list">
                        <li>Your Strengths along with Foods & Beverages, Physical & Mental Activities that promote your health.</li>
                        <li>Your Weaknesses along with Food & Beverages, Mental & Physical Activities that are harmful for you.</li>
                        <li>Personalized Treatment and Medication.</li>
                    </ol><br />
                    
                    <h2>Examples:</h2>
                    <ul className="list">
                        <li>Use of Cow Ghee in Diet is beneficial for Pittaja Individual.</li>
                        <li>Excessive Travelling is not advisable for Vataja Individual.</li>
                        <li>Honey is the Best Medicine of Choice for Kaphaja Individual.</li>
                    </ul>
                </p>
            </div>
        </div>

        <div className="prakriti-info full-screen">
            <div className="heading no-pad right ">
                
                <p className="about-h1 w-long"><b>Keep in mind</b></p>
            </div>
            <div className="prakriti-text">
                <p className="info-box"> 
                    Your Unique Prakriti helps you decide :<br />
                    <ul className="list">
                        <li>This is a test to determine your unique psychosomatic
                            temperament and help you make the right decisions for better
                            living.
                            </li>
                        <li>Do remember, there is no good or bad Prakriti.</li>
                        <li>To get the most accurate result you need to follow some
                            Precautions:

                            <ul className="sub-list">
                                <li>Be completely honest with your answers</li>
                                <li>Mention who you really are, not what you want to be</li>
                                <li>Choose trends that endure over a long timeframe</li>
                            </ul>

                        </li>
                    </ul><br />
                    
                </p>
            </div>
        </div>

        <div className="full-screen 4q-assessment">
            <div className='container_assesment'>
          {/* <div className='box_assesment'> */}
            {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.question}-${i}`} >
                    <div className='box_assesment'>
                        <h2>{d.question}</h2>
                        <button>{d.option1}</button>
                        <button>{d.option2}</button>
                        <button>{d.option3}</button>
                        <br/>
                        
                    </div>
                </div>
              ))
              : 'Loading...'}
          </div>
          
        </div>
  </div>
</div>

    
  )
}




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