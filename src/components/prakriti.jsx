

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



        const [fname, setfName] = useState("");
        const [lname, setlName] = useState("");
        const [email, setEmail] = useState("");
        const [city, setCity] = useState("");
        const [state, setState] = useState("");
        const [mobileno, setMobileno] = useState("");
        const [occupation, setOccupation] = useState("");
        const [address, setAddress] = useState("");
        const [date, setDate] = useState("");
        const [prakritians, setPrakritians] = useState("");
        const [praque1, setPraque1] = useState("");
        const [praque2, setPraque2] = useState("");
        const [praque3, setPraque3] = useState("");
        const [praque4, setPraque4] = useState("");
        const [praque5, setPraque5] = useState("");
        const [praque6, setPraque6] = useState("");
        const [praque7, setPraque7] = useState("");
        const [praque8, setPraque8] = useState("");
        const [praque9, setPraque9] = useState("");
        const [praque10, setPraque10] = useState("");
        const [praque11, setPraque11] = useState("");
        const [praque12, setPraque12] = useState("");
        const [praque13, setPraque13] = useState("");
        const [praque14, setPraque14] = useState("");
        const [praque15, setPraque15] = useState("");
        const [praque16, setPraque16] = useState("");
        const [praque17, setPraque17] = useState("");
        const [praque18, setPraque18] = useState("");
        const [praque19, setPraque19] = useState("");
        const [praque20, setPraque20] = useState("");
        const [praque21, setPraque21] = useState("");
        const [praque22, setPraque22] = useState("");
        const [praque23, setPraque23] = useState("");

        const [loader, setLoader] = useState(false);

        const handleSubmit = (e) => {
            e.preventDefault();
            setLoader(true);

        db.collection("prakriti")
        .add({
            fname:fname,
            lname: lname,
            email: email,
            city: city,
            state: state,
            mobileno: mobileno,
            occupation: occupation,
            address: address,
            date: date,
            prakritians: prakritians,
            praque1:praque1,
            praque2:praque2,
            praque3:praque3,
            praque4:praque4,
            praque5:praque5,
            praque6:praque6,
            praque7:praque7,
            praque8:praque8,
            praque9:praque9,
            praque10:praque10,
            praque11:praque11,
            praque12:praque12,
            praque13:praque13,
            praque14:praque14,
            praque15:praque15,
            praque16:praque16,
            praque17:praque17,
            praque18:praque18,
            praque19:praque19,
            praque20:praque20,
            praque21:praque21,
            praque22:praque22,
            praque23:praque23
        })
        .then(() => {
            setLoader(false);
            alert("Your Prakratti will be mailed you in the provided mailId by you👍");
          })
          .catch((error) => {
            alert(error.message);
            setLoader(false);
          });
          setfName("");
          setlName("");
          setEmail("");
          setDate("");
          setCity("");
          setState("");
          setOccupation("");
          setAddress("");
          setPrakritians("");
          setPraque1("");
          setPraque2("");
          setPraque3("");
          setPraque4("");
          setPraque5("");
          setPraque6("");
          setPraque7("");
          setPraque8("");
          setPraque9("");
          setPraque10("");
          setPraque11("");
          setPraque12("");
          setPraque13("");
          setPraque14("");
          setPraque15("");
          setPraque16("");
          setPraque17("");
          setPraque18("");
          setPraque19("");
          setPraque20("");
          setPraque21("");
          setPraque22("");
          setPraque23("");
        };
        // const add = (e)=> {
        //     setPrakritians([...prakritians, {e.target.value}])

        // }
        useEffect( ()=>{
            var q_curr;
                var q_next;
                var q_prev;
                var q1 = document.getElementById("q1");
                var next = document.getElementById('next')
                var back = document.getElementById('back');
                var subm = document.getElementById('submit-btn');
                q_curr = q1;
                q_next = q_curr.nextElementSibling;
                q_prev = q_curr.previousElementSibling;
                document.addEventListener('DOMContentLoaded', function () {
                    {
                        next.onclick = function () {
                            if (q_next) {
                                if (!q_next.nextElementSibling) {
                                    subm.classList.remove('hidden');
                                    next.classList.add('hidden');
                                }
                                else {
                                    subm.classList.add('hidden');
                                    next.classList.remove('hidden');
                                    back.classList.remove('hidden');
                                }
                                q_curr.style.left = "-750px";
                                q_next.style.left = "40px";
                                q_prev = q_curr;
                                q_curr = q_next;
                                q_next = q_curr.nextElementSibling;
                            }
                            else {
                                next.classList.add('hidden');
                                subm.classList.remove('hidden');
                            }
                        }
                        back.onclick = function () {
                            if (q_prev) {
                                if(!q_prev.previousElementSibling){
                                    back.classList.add('hidden');
                                }
                                next.classList.remove('hidden');
                                subm.classList.add('hidden');
                                q_curr.style.left = "750px";
                                q_prev.style.left = "40px";
                                q_next = q_curr;
                                q_curr = q_prev;
                                q_prev = q_curr.previousElementSibling;
                            }
                            else {
                                back.classList.add('hidden');
                            }
                        }
                    }
                });
         });

  return (
      
      <div className="container-prakriti">
        <div className="intros full-screen">
          {/* <img id="message-blob" src="../images/message-blob.png" /> */}
          <img id="message-blob" src="./img/images/message-blob.png" />
          <h1 id="namaste-text">Namaste</h1>
          <img id="namaste-img" src="./img/images/namaste-img.png" />
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

        {/* form started */}
        
        {/* <div className="form-div full-screen">
          <div className="heading">
            <img src="./img/images/bot.png" id="bot-img" alt="bot" />
              <p className="about-h1"><span>Hi I am Havya, Health Bot<br /></span>Tell me about you </p>
            </div>
            <div id="names">
                <div className="form-in">
                    <input className="input" type="text" name="fname" id="fname" placeholder="First Name" value={fname}
                                 onChange={(e) => setfName(e.target.value)} required/>
                    <input className="input" type="text" name="lname" id="lname" placeholder="Last Name" value={lname}
                                 onChange={(e) => setlName(e.target.value)} required/>
                </div>
                <div>
                    <input type="email" className="w-long input" name="email" id="email" placeholder="Email Address" value={email}
                                 onChange={(e) => setEmail(e.target.value)} required/> 
                </div>
                <div>
                    <label>Today Date:- </label>
                    <input type="date" className="input" name="date" id="date" placeholder="date" value={date}
                                 onChange={(e) => setDate(e.target.value)} required/> 
                </div>
                <div className="form-in">
                   <input className="input" type="text" name="address" id="city" placeholder="City" value={city}
                                 onChange={(e) => setCity(e.target.value)} required/> 
                   <input className="input" type="text" name="address" id="state" placeholder="State" value={state}
                                 onChange={(e) => setState(e.target.value)} required/> 
                </div>
                <div>
                   <input className="input w-long" type="drop"  name="phno" id="phno" placeholder="Mobile Number"value={mobileno}
                                 onChange={(e) => setMobileno(e.target.value)} required/> 
                </div>
                <div>
                   <select className="w-long input" id="occupation" placeholder="Choose your occupation" value={occupation}
                                 onChange={(e) => setOccupation(e.target.value)} required>
                       <option>Student</option>
                       <option>Employee</option>
                       <option>House Wife</option>
                       <option>Others</option>
                   </select>
                </div>
                <div>
                   <input type="text" className="w-long input" name="address" id="address" placeholder="Address" value={address}
                                 onChange={(e) => setAddress(e.target.value)} required/> 
                </div>
                
                
            </div>
        </div> */}
        <div className="heading">
            <img src="./img/images/bot.png" id="bot-img" alt="bot" />
              <p className="about-h1"><span>Hi I am Havya, Health Bot<br /></span>Tell me about you </p>
            </div>
        <div className="wrapper" id="listq">
                
                <div className="wrap">
                <form className="form" id="submit-form" onSubmit={handleSubmit}>
                <div className="questions" id="q1">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">1 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">User details</div>
                    <div className="pt-4">
                    <input className="input" type="text" name="fname" id="fname" placeholder="First Name" value={fname}
                                 onChange={(e) => setfName(e.target.value)} required/>
                    <input className="input" type="text" name="lname" id="lname" placeholder="Last Name" value={lname}
                                 onChange={(e) => setlName(e.target.value)} required/>
                <input type="email" className="w-long input" name="email" id="email" placeholder="Email Address" value={email}
                                 onChange={(e) => setEmail(e.target.value)} required/> 
                                 <input className="input w-long" type="drop"  name="phno" id="phno" placeholder="Mobile Number"value={mobileno}
                                 onChange={(e) => setMobileno(e.target.value)} required/> 
                
                    </div>
                  </div>
                <div className="questions" id="q2">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">2 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">Today Date:- AND Address</div>
                    <div className="pt-4">
                    <input type="date" className="input" name="date" id="date" placeholder="date" value={date}
                                 onChange={(e) => setDate(e.target.value)} required/> 
                    <br/>
                    <input className="input" type="text" name="address" id="city" placeholder="City" value={city}
                                 onChange={(e) => setCity(e.target.value)} required/> 
                   <input className="input" type="text" name="address" id="state" placeholder="State" value={state}
                                 onChange={(e) => setState(e.target.value)} required/> 
                
                    </div>
                  </div>
                <div className="questions" id="q2">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">3 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">Choose your occupation AND complete Address</div>
                    <div className="pt-4">
                    <select className="w-long input" id="occupation" placeholder="Choose your occupation" value={occupation}
                                 onChange={(e) => setOccupation(e.target.value)} required>
                       <option>Student</option>
                       <option>Employee</option>
                       <option>House Wife</option>
                       <option>Others</option>
                   </select>
                   <input type="text" className="w-long input" name="address" id="address" placeholder="Address" value={address}
                                 onChange={(e) => setAddress(e.target.value)} required/> 
                

                   </div>
                  </div>
                  <div className="questions" id="q2">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">1 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">1. Select your Physique type?</div>
                    <div className="pt-4">
                        <label className="options">A)Thin  <input type="radio" name="first"  value="A)Thin"  onChange={(e) =>  setPraque1(e.target.value)} required  /><span className="checkmark" /></label>
                        <label className="options">B)Medium<input type="radio" name="first" value="B)Medium" onChange={(e) =>  setPraque1(e.target.value)}   /><span className="checkmark" /></label>
                        <label className="options">C)Heavy <input type="radio" name="first" value="C)Heavy"  onChange={(e) =>  setPraque1(e.target.value)}          /><span className="checkmark" /></label>
                       
                    </div>
                  </div>
                  <div className="questions" id="q2">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">2 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">2. Are you good at adapting and mixing with a variety of people</div>
                    <div className="pt-4">
                        <label className="options">A)Sometimes        <input type="radio" name="q2" value="A)Sometimes" onChange={(e) =>  setPraque2(e.target.value)} required  /><span className="checkmark" /></label>
                        <label className="options">B)Yes, almost Times<input type="radio" name="q2" value="B)Yes, almost Times" onChange={(e) =>  setPraque2(e.target.value)}   /><span className="checkmark" /></label>
                        <label className="options">C)Many Times       <input type="radio" name="q2" value="C)Many Times" onChange={(e) =>  setPraque2(e.target.value)}          /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q3">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">3 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">3. Select your skin type</div>
                    <div className="pt-4">
                        <label className="options">A)Dry and Rough<input type="radio" name="q3" value="A)Dry and Rough" onChange={(e) =>  setPraque3(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Smooth       <input type="radio" name="q3" value="B)Smooth" onChange={(e) =>  setPraque3(e.target.value)}                 /><span className="checkmark" /></label>
                        <label className="options">C)Oily         <input type="radio" name="q3" value="C)Oily" onChange={(e) =>  setPraque3(e.target.value)}                   /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q4">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">4 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">4. Are your veins visible on skin</div>
                    <div className="pt-4">
                        <label className="options">A)Visible (if veins are visible on hands and feet) <input type="radio" name="q4" value="A)Visible (if veins are visible on hands and feet)" onChange={(e) =>  setPraque4(e.target.value)} required/><span className="checkmark" /></label>
                        <label className="options">B)Fairly Visible (if veins become visible on effort)<input type="radio"name="q4" value="B)Fairly Visible (if veins become visible on effort)" onChange={(e) =>  setPraque4(e.target.value)}        /><span className="checkmark" /></label>
                        <label className="options">C)Not visible (If veins not visible even on effort) <input type="radio"name="q4" value="C)Not visible (If veins not visible even on effort)" onChange={(e) =>  setPraque4(e.target.value)}         /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q5">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">5 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">5.How is your Voice/Speech?</div>
                    <div className="pt-4">
                        <label className="options">A)Low Pitch and fast         <input type="radio" name="q5" value="A)Low Pitch and fast" onChange={(e) =>  setPraque5(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)High Pitch                 <input type="radio" name="q5" value="B)High Pitch" onChange={(e) =>  setPraque5(e.target.value)}                  /><span className="checkmark" /></label>
                        <label className="options">C)Slow  Speech and deep voice<input type="radio" name="q5" value="C)Slow  Speech and deep voice" onChange={(e) =>  setPraque5(e.target.value)} /><span className="checkmark" /></label>
                      
                    </div>
                  </div>
                  <div className="questions" id="q6">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">6 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">6.When anxious/Tensed, do you know the reason?</div>
                    <div className="pt-4">
                        <label className="options">A)Rarely    <input type="radio" name="q6" value="A)Rarely" onChange={(e) =>  setPraque6(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Sometimes <input type="radio" name="q6" value="B)Sometimes" onChange={(e) =>  setPraque6(e.target.value)}       /><span className="checkmark" /></label>
                        <label className="options">C)Yes, often<input type="radio" name="q6" value="C)Yes, often" onChange={(e) =>  setPraque6(e.target.value)}      /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q7">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">7 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">7.What’s your eye size?</div>
                    <div className="pt-4">
                        <label className="options">A)Small <input type="radio" name="q7" value="A)Small" onChange={(e) =>  setPraque7(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Medium<input type="radio" name="q7" value="B)Medium" onChange={(e) =>  setPraque7(e.target.value)}         /><span className="checkmark" /></label>
                        <label className="options">C)Large<input type="radio"  name="q7" value="C)Large" onChange={(e) =>  setPraque7(e.target.value)}          /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q8">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">8 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">8.Select your type of walk</div>
                    <div className="pt-4">
                        <label className="options">A)Swift <input type="radio" name="q8" value="A)Swift" onChange={(e) =>  setPraque8(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Smooth<input type="radio" name="q8" value="B)Smooth" onChange={(e) =>  setPraque8(e.target.value)}         /><span className="checkmark" /></label>
                        <label className="options">C)Slow  <input type="radio" name="q8" value="C)Slow" onChange={(e) =>  setPraque8(e.target.value)}           /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q9">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">9 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">9.How is your Thirst?</div>
                    <div className="pt-4">
                        <label className="options">A)Variable <input type="radio" name="q9" value="A)Variable" onChange={(e) =>  setPraque9(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Excessive<input type="radio" name="q9" value="B)Excessive" onChange={(e) =>  setPraque9(e.target.value)}         /><span className="checkmark" /></label>
                        <label className="options">C)Less     <input type="radio" name="q9" value="C)Less" onChange={(e) =>  setPraque9(e.target.value)}              /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q10">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">10 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">10.How are your Bowel Habits?</div>
                    <div className="pt-4">
                        <label className="options">A)Constipated Stools<input type="radio" name="q10" value="A)Constipated Stools " onChange={(e) =>  setPraque10(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Regular           <input type="radio" name="q10" value="B)Regulaar" onChange={(e) =>  setPraque10(e.target.value)}                     /><span className="checkmark" /></label>
                        <label className="options">C)Sluggish Stools   <input type="radio" name="q10" value="C)Sluggish Stools" onChange={(e) =>  setPraque10(e.target.value)}              /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q11">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">11 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">11.Select your hair type</div>
                    <div className="pt-4">
                        <label className="options">A)Rough and Hard<input type="radio" name="q11" value="A)Rough and Hard" onChange={(e) =>  setPraque11(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Medium        <input type="radio" name="q11" value="B)Medium" onChange={(e) =>  setPraque11(e.target.value)}                  /><span className="checkmark" /></label>
                        <label className="options">C)Soft & Smooth <input type="radio" name="q11" value="C)Soft & Smooth" onChange={(e) =>  setPraque11(e.target.value)}           /><span className="checkmark" /></label>
                       
                    </div>
                  </div>
                  <div className="questions" id="q12">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">12 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">12.How’s Your Appetite?</div>
                    <div className="pt-4">
                        <label className="options">A)Variable (Sometimes Heavy Diet & Sometimes Less Diet)<input type="radio" name="q12" value="A)Variable (Sometimes Heavy Diet & Sometimes Less Diet)" onChange={(e) =>  setPraque12(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Heavy (Heavy Diets & Many meals)                     <input type="radio" name="q12" value="B)Heavy (Heavy Diets & Many meals)" onChange={(e) =>  setPraque12(e.target.value)}                               /><span className="checkmark" /></label>
                        <label className="options">C)Less and Regular (Less Diet & Regular Meals)         <input type="radio" name="q12" value="C)Less and Regular (Less Diet & Regular Meals)" onChange={(e) =>  setPraque12(e.target.value)}                   /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q13">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">13 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">13.Are you comfortable owning to your mistakes.</div>
                    <div className="pt-4">
                        <label className="options">A)Sometimes   <input type="radio" name="q13" value="A)Sometimes" onChange={(e) =>  setPraque13(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Quite Rarely<input type="radio" name="q13" value="B)Quite Rarely" onChange={(e) =>  setPraque13(e.target.value)}       /><span className="checkmark" /></label>
                        <label className="options">C)Yes, Often  <input type="radio" name="q13" value="C)Yes, Often" onChange={(e) =>  setPraque13(e.target.value)}         /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q14">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">14 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">14.How are your Eating Habits?</div>
                    <div className="pt-4">
                        <label className="options">A)Quick Eating<input type="radio" name="q14" value="A)Quick Eating" onChange={(e) =>  setPraque14(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Many Meals  <input type="radio" name="q14" value="B)Many Meals" onChange={(e) =>  setPraque14(e.target.value)}            /><span className="checkmark" /></label>
                        <label className="options">C)Slow Eating <input type="radio" name="q14" value="C)Slow Eating" onChange={(e) =>  setPraque14(e.target.value)}           /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q15">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">15 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">15.How are your Sleep Habits?</div>
                    <div className="pt-4">
                        <label className="options">A)Disturbed   <input type="radio" name="q15" value="A)Disturbed" onChange={(e) =>  setPraque15(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Moderate    <input type="radio" name="q15" value="B)Moderate" onChange={(e) =>  setPraque15(e.target.value)}           /><span className="checkmark" /></label>
                        <label className="options">C)Sound & Deep<input type="radio" name="q15" value="C)Sound & Deep" onChange={(e) =>  setPraque15(e.target.value)}       /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q16">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">16 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">16.Do you recognize when you are stressed, and can kep calm and resort to solution.</div>
                    <div className="pt-4">
                        <label className="options">A)very rarely<input type="radio" name="q16" value="A)Very rarely" onChange={(e) =>  setPraque16(e.target.value)}required/><span className="checkmark" /></label>
                        <label className="options">B)Sometimes  <input type="radio" name="q16" value="B)Sometimes" onChange={(e) =>  setPraque16(e.target.value)}          /><span className="checkmark" /></label>
                        <label className="options">C)Yes, Often <input type="radio" name="q16" value="C)Yes, Often" onChange={(e) =>  setPraque16(e.target.value)}         /><span className="checkmark" /></label>
                       
                    </div>
                  </div>
                  <div className="questions" id="q17">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">17 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">17.Your Sweating Patterns</div>
                    <div className="pt-4">
                        <label className="options">A)Very Less<input type="radio" name="q17" value="A)Very Less" onChange={(e) =>  setPraque17(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Excessive<input type="radio" name="q17" value="B)Excessive" onChange={(e) =>  setPraque17(e.target.value)}          /><span className="checkmark" /></label>
                        <label className="options">C)Rarely   <input type="radio" name="q17" value="C)Rarely" onChange={(e) =>  setPraque17(e.target.value)}             /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q18">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">18 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">18.Frequency of disease</div>
                    <div className="pt-4">
                        <label className="options">A)Frequently<input type="radio" name="q18" value="A)Frequently" onChange={(e) =>  setPraque18(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Moderately<input type="radio" name="q18" value="B)Moderately" onChange={(e) =>  setPraque18(e.target.value)}          /><span className="checkmark" /></label>
                        <label className="options">C)Rarely    <input type="radio" name="q18" value="C)Rarely" onChange={(e) =>  setPraque18(e.target.value)}              /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q19">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">19 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">19.Do You recognize when You are Angry, and are you able to avoid losing my temper ?</div>
                    <div className="pt-4">
                        <label className="options">A)Very rarely<input type="radio" name="q19" value="A)Very rarely" onChange={(e) =>  setPraque19(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Sometimes  <input type="radio" name="q19" value="B)Sometimes" onChange={(e) =>  setPraque19(e.target.value)}            /><span className="checkmark" /></label>
                        <label className="options">C)Yes, Often <input type="radio" name="q19" value="C)Yes, Often" onChange={(e) =>  setPraque19(e.target.value)}           /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q20">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">20 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">20.Are you talkative?</div>
                    <div className="pt-4">
                        <label className="options">A)Talkative        <input type="radio" name="q20" value="A)Talkative" onChange={(e) =>  setPraque20(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Like to gossip   <input type="radio" name="q20" value="B)Like to gossip" onChange={(e) =>  setPraque20(e.target.value)}     /><span className="checkmark" /></label>
                        <label className="options">C)To the point talk<input type="radio" name="q20" value="C)To the point talk" onChange={(e) =>  setPraque20(e.target.value)}  /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q21">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">21 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">21.Your physical Activity Level</div>
                    <div className="pt-4">
                        <label className="options">A)Hyperactive      <input type="radio" name="q21" value="A)Hyperactive" onChange={(e) =>  setPraque21(e.target.value)}required /><span className="checkmark" /></label>
                        <label className="options">B)Moderately Active<input type="radio" name="q21" value="B)Moderately Active" onChange={(e) =>  setPraque21(e.target.value)}   /><span className="checkmark" /></label>
                        <label className="options">C)Less Active      <input type="radio" name="q21" value="C)Less Active" onChange={(e) =>  setPraque21(e.target.value)}         /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  <div className="questions" id="q22">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">22 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">22.Do You take initiative and are highly motivated, even when You don’t feel like doing something ?</div>
                    <div className="pt-4">
                        <label className="options">A)Yes, Usally<input type="radio" name="q22" value="A)Yes, Usally" onChange={(e) =>  setPraque22(e.target.value)} required /><span className="checkmark" /></label>
                        <label className="options">B)Sometimes  <input type="radio" name="q22" value="B)Sometimes" onChange={(e) =>  setPraque22(e.target.value)}            /><span className="checkmark" /></label>
                        <label className="options">C)Rarely     <input type="radio" name="q22" value="C)Rarely" onChange={(e) =>  setPraque22(e.target.value)}               /><span className="checkmark" /></label>
                       
                    </div>
                  </div>
                  <div className="questions" id="q23">
                    <div className="text-center pb-4">
                      <div className="h5 font-weight-bold">23 of 23</div>
                    </div>
                    <div className="h4 font-weight-bold">23.When under pressure, are you able to think clearly and stay focused</div>
                    <div className="pt-4">
                        <label className="options">A)Very rarely<input type="radio" name="q23" value="A)Very rarely" onChange={(e) =>  setPraque23(e.target.value)} required/><span className="checkmark" /></label>
                        <label className="options">B)Sometimes  <input type="radio" name="q23" value="B)Sometimes" onChange={(e) =>  setPraque23(e.target.value)}           /><span className="checkmark" /></label>
                        <label className="options">C)Yes, Often <input type="radio" name="q23" value="C)Yes, Often" onChange={(e) =>  setPraque23(e.target.value)}          /><span className="checkmark" /></label>
                        
                    </div>
                  </div>
                  
                
                  <button className="btn btn-primary hidden" id="submit-btn" type="submit">Submit <span className="fas fa-arrow-up" /></button>
                </form>
                </div>
                
                <div className="d-flex justify-content-end pt-2 navigator">
                  <button className="btn btn-primary mx-3 hidden" id="back"><span className="fas fa-arrow-left pr-1" />Previous</button>
                  <button className="btn btn-primary" id="next">Next <span className="fas fa-arrow-right" /></button>
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