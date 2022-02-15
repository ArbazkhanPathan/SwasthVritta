

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
          

  return (
      <div>
      <div className="container-prakriti">
        <div className="intros full-screen">
          {/* <img id="message-blob" src="../images/message-blob.png" /> */}
          <img id="message-blob" src="./img/images/message-blob.png" />
          <h1 id="namaste-text">Namaste</h1>
          <img id="namaste-img" src="./img/images/namaste-img.png" />
        </div>
            
        {/* <div className="form-div full-screen">
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
        </div> */}

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
        <form className="form" onSubmit={handleSubmit}>
        <div className="form-div full-screen">
          <div className="heading">
            <img src="./img/images/bot.png" id="bot-img" alt="bot" />
              <p className="about-h1"><span>Hi I am Havya, Health Bot<br /></span>Tell me about you </p>
            </div>
            <div id="names">
                <div className="form-in">
                    <input className="input" type="text" name="fname" id="fname" placeholder="First Name" value={fname}
                                 onChange={(e) => setfName(e.target.value)}/>
                    <input className="input" type="text" name="lname" id="lname" placeholder="Last Name" value={lname}
                                 onChange={(e) => setlName(e.target.value)}/>
                </div>
                <div>
                    <input type="email" className="w-long input" name="email" id="email" placeholder="Email Address" value={email}
                                 onChange={(e) => setEmail(e.target.value)} /> 
                </div>
                <div className="form-in">
                   <input className="input" type="text" name="address" id="city" placeholder="City" value={city}
                                 onChange={(e) => setCity(e.target.value)}/> 
                   <input className="input" type="text" name="address" id="state" placeholder="State" value={state}
                                 onChange={(e) => setState(e.target.value)}/> 
                </div>
                <div>
                   <input className="input w-long" type="drop"  name="phno" id="phno" placeholder="Mobile Number"value={mobileno}
                                 onChange={(e) => setMobileno(e.target.value)} /> 
                </div>
                <div>
                   <select className="w-long input" id="occupation" placeholder="" value={occupation}
                                 onChange={(e) => setOccupation(e.target.value)}>
                       <option>Student</option>
                       <option>Employee</option>
                       <option>House Wife</option>
                       <option>Others</option>
                   </select>
                </div>
                <div>
                   <input type="text" className="w-long input" name="address" id="address" placeholder="Address" value={address}
                                 onChange={(e) => setAddress(e.target.value)}/> 
                </div>
                {/* <input className="w-long input" type="file" name="photo" id="photo" placeholder="Upload you photo" /> */}
                
            </div>
        </div>
        <div className="full-screen 4q-assessment">
            <div className='container_assesment'>
          {/* <div className='box_assesment'> */}
            {/* {props.data
              ? props.data.map((d, i) => (
                <div key={`${d.question}-${i}`} > */}
                    <div className='box_assesment'>
                        {/* <h2>{d.question}</h2>
                        <input type="radio" name={d.id} value={d.option1} onChange={(e) => setPrakritians(e.target.value)}/>{d.option1}
                        <input type="radio" name={d.id} value={d.option2} onChange={(e) => setPrakritians(e.target.value)}/>{d.option2}
                        <input type="radio" name={d.id} value={d.option3} onChange={(e) => setPrakritians(e.target.value)}/>{d.option3} */}
                        {/* <button>{d.option1}</button>
                        <button>{d.option2}</button>
                        <button>{d.option3}</button> */}

                        <h2>1. Select your Physique type..</h2>
                        <input type="radio" name="q1" value="A)Thin" onChange={(e) =>  setPraque1(e.target.value)}/>A)Thin
                        <input type="radio" name="q1" value="B)Medium" onChange={(e) =>  setPraque1(e.target.value)}/>B)Medium
                        <input type="radio" name="q1" value="C)Heavy" onChange={(e) =>  setPraque1(e.target.value)}/>C)Heavy
                        <br/>
                        

                        <h2>2. Are you good at adapting and mixing with a variety of people</h2>
                        <input type="radio" name="q2" value="A)Sometimes" onChange={(e) =>  setPraque2(e.target.value)}/>A)Sometimes
                        <input type="radio" name="q2" value="B)Yes, almost Times" onChange={(e) =>  setPraque2(e.target.value)}/>B)Yes, almost Times
                        <input type="radio" name="q2" value="C)Many Times" onChange={(e) =>  setPraque2(e.target.value)}/>C)Many Times
                        <br/>
                        

                        <h2>3. Select your skin type</h2>
                        <input type="radio" name="q3" value="A)Dry and Rough" onChange={(e) =>  setPraque3(e.target.value)}/>A)Dry and Rough
                        <input type="radio" name="q3" value="B)Smooth" onChange={(e) =>  setPraque3(e.target.value)}/>B)Smooth
                        <input type="radio" name="q3" value="C)Oily" onChange={(e) =>  setPraque3(e.target.value)}/>C)Oily
                        <br/>
                        

                        <h2>4. Are your veins visible on skin</h2>
                        <input type="radio" name="q4" value="A)Visible (if veins are visible on hands and feet)" onChange={(e) =>  setPraque4(e.target.value)}/>A)Visible (if veins are visible on hands and feet)
                        <input type="radio" name="q4" value="B)Fairly Visible (if veins become visible on effort)" onChange={(e) =>  setPraque4(e.target.value)}/>B)Fairly Visible (if veins become visible on effort)
                        <input type="radio" name="q4" value="C)Not visible (If veins not visible even on effort)" onChange={(e) =>  setPraque4(e.target.value)}/>C)Not visible (If veins not visible even on effort)
                        <br/>
                        

                        <h2>5.How is your Voice/Speech?</h2>
                        <input type="radio" name="q5" value="A)Low Pitch and fast" onChange={(e) =>  setPraque5(e.target.value)}/>A)Low Pitch and fast
                        <input type="radio" name="q5" value="B)High Pitch" onChange={(e) =>  setPraque5(e.target.value)}/>B)High Pitch
                        <input type="radio" name="q5" value="C)Slow  Speech and deep voice" onChange={(e) =>  setPraque5(e.target.value)}/>C)Slow  Speech and deep voice
                        <br/>
                        

                        <h2>6.When anxious/Tensed, do you know the reason?</h2>
                        <input type="radio" name="q6" value="A)Rarely" onChange={(e) =>  setPraque6(e.target.value)}/>A)Rarely
                        <input type="radio" name="q6" value="B)Sometimes" onChange={(e) =>  setPraque6(e.target.value)}/>B)Sometimes
                        <input type="radio" name="q6" value="C)Yes, often" onChange={(e) =>  setPraque6(e.target.value)}/>C)Yes, often
                        <br/>
                        

                        <h2>7.What’s your eye size?</h2>
                        <input type="radio" name="q7" value="A)Small" onChange={(e) =>  setPraque7(e.target.value)}/>A)Small
                        <input type="radio" name="q7" value="B)Smooth" onChange={(e) =>  setPraque7(e.target.value)}/>B)Medium
                        <input type="radio" name="q7" value="C)Large" onChange={(e) =>  setPraque7(e.target.value)}/>C)Large
                        <br/>
                        

                        <h2>8.Select your type of walk</h2>
                        <input type="radio" name="q8" value="A)Swift" onChange={(e) =>  setPraque8(e.target.value)}/>A)Swift
                        <input type="radio" name="q8" value="B)Smooth" onChange={(e) =>  setPraque8(e.target.value)}/>B)Smooth
                        <input type="radio" name="q8" value="C)Slow" onChange={(e) =>  setPraque8(e.target.value)}/>C)Slow
                        <br/>
                        

                        <h2>9.How is your Thirst?</h2>
                        <input type="radio" name="q9" value="A)Variable" onChange={(e) =>  setPraque9(e.target.value)}/>A)Variable
                        <input type="radio" name="q9" value="B)Excessive" onChange={(e) =>  setPraque9(e.target.value)}/>B)Excessive
                        <input type="radio" name="q9" value="C)Less" onChange={(e) =>  setPraque9(e.target.value)}/>C)Less
                        <br/>
                        

                        <h2>10.How are your Bowel Habits?</h2>
                        <input type="radio" name="q10" value="A)Constipated Stools " onChange={(e) =>  setPraque10(e.target.value)}/>A)Constipated Stools 
                        <input type="radio" name="q10" value="B)Regulaar" onChange={(e) =>  setPraque10(e.target.value)}/>B)Regular
                        <input type="radio" name="q10" value="C)Sluggish Stools" onChange={(e) =>  setPraque10(e.target.value)}/>C)Sluggish Stools
                        <br/>
                        

                        <h2>11.Select your hair type</h2>
                        <input type="radio" name="q11" value="A)Rough and Hard" onChange={(e) =>  setPraque11(e.target.value)}/>A)Rough and Hard
                        <input type="radio" name="q11" value="B)Medium" onChange={(e) =>  setPraque11(e.target.value)}/>B)Medium
                        <input type="radio" name="q11" value="C)Soft & Smooth" onChange={(e) =>  setPraque11(e.target.value)}/>C)Soft & Smooth
                        <br/>
                        

                        <h2>12.How’s Your Appetite?</h2>
                        <input type="radio" name="q12" value="A)Variable (Sometimes Heavy Diet & Sometimes Less Diet)" onChange={(e) =>  setPraque12(e.target.value)}/>A)Variable (Sometimes Heavy Diet & Sometimes Less Diet)
                        <input type="radio" name="q12" value="B)Heavy (Heavy Diets & Many meals)" onChange={(e) =>  setPraque12(e.target.value)}/>B)Heavy (Heavy Diets & Many meals)
                        <input type="radio" name="q12" value="C)Less and Regular (Less Diet & Regular Meals)" onChange={(e) =>  setPraque12(e.target.value)}/>C)Less and Regular (Less Diet & Regular Meals)
                        <br/>
                        

                        
                        

                        <h2>13.Are you comfortable owning to your mistakes.</h2>
                        <input type="radio" name="q13" value="A)Sometimes" onChange={(e) =>  setPraque13(e.target.value)}/>A)Sometimes
                        <input type="radio" name="q13" value="B)Quite Rarely" onChange={(e) =>  setPraque13(e.target.value)}/>B)Quite Rarely
                        <input type="radio" name="q13" value="C)Yes, Often" onChange={(e) =>  setPraque13(e.target.value)}/>C)Yes, Often
                        <br/>
                        

                        <h2>14.How are your Eating Habits?</h2>
                        <input type="radio" name="q14" value="A)Quick Eating" onChange={(e) =>  setPraque14(e.target.value)}/>A)Quick Eating
                        <input type="radio" name="q14" value="B)Many Meals" onChange={(e) =>  setPraque14(e.target.value)}/>B)Many Meals
                        <input type="radio" name="q14" value="C)Slow Eating" onChange={(e) =>  setPraque14(e.target.value)}/>C)Slow Eating
                        <br/>
                        

                        <h2>15.How are your Sleep Habits?</h2>
                        <input type="radio" name="q15" value="A)Disturbed" onChange={(e) =>  setPraque15(e.target.value)}/>A)Disturbed
                        <input type="radio" name="q15" value="B)Moderate" onChange={(e) =>  setPraque15(e.target.value)}/>B)Moderate
                        <input type="radio" name="q15" value="C)Sound & Deep" onChange={(e) =>  setPraque15(e.target.value)}/>C)Sound & Deep
                        <br/>
                        

                        <h2>16.Do you recognize when you are stressed, and can kep calm and resort to solution.</h2>
                        <input type="radio" name="q16" value="A)Very rarely" onChange={(e) =>  setPraque16(e.target.value)}/>A)very rarely
                        <input type="radio" name="q16" value="B)Sometimes" onChange={(e) =>  setPraque16(e.target.value)}/>B)Sometimes
                        <input type="radio" name="q16" value="C)Yes, Often" onChange={(e) =>  setPraque16(e.target.value)}/>C)Yes, Often
                        <br/>

                        <h2>17.Your Sweating Patterns</h2>
                        <input type="radio" name="q17" value="A)Very Less" onChange={(e) =>  setPraque17(e.target.value)}/>A)Very Less
                        <input type="radio" name="q17" value="B)Excessive" onChange={(e) =>  setPraque17(e.target.value)}/>B)Excessive
                        <input type="radio" name="q17" value="C)Rarely" onChange={(e) =>  setPraque17(e.target.value)}/>C)Rarely
                        <br/>
                        

                        <h2>18.Frequency of disease</h2>
                        <input type="radio" name="q18" value="A)Frequently" onChange={(e) =>  setPraque18(e.target.value)}/>A)Frequently
                        <input type="radio" name="q18" value="B)Moderately" onChange={(e) =>  setPraque18(e.target.value)}/>B)Moderately
                        <input type="radio" name="q18" value="C)Rarely" onChange={(e) =>  setPraque18(e.target.value)}/>C)Rarely
                        <br/>
                        

                        <h2>19.Do You recognize when You are Angry, and are you able to avoid losing my temper ?</h2>
                        <input type="radio" name="q19" value="A)Very rarely" onChange={(e) =>  setPraque19(e.target.value)}/>A)Very rarely
                        <input type="radio" name="q19" value="B)Sometimes" onChange={(e) =>  setPraque19(e.target.value)}/>B)Sometimes
                        <input type="radio" name="q19" value="C)Yes, Often" onChange={(e) =>  setPraque19(e.target.value)}/>C)Yes, Often
                        <br/>
                        

                        <h2>20.Are you talkative?</h2>
                        <input type="radio" name="q20" value="A)Talkative" onChange={(e) =>  setPraque20(e.target.value)}/>A)Talkative 
                        <input type="radio" name="q20" value="B)Like to gossip" onChange={(e) =>  setPraque20(e.target.value)}/>B)Like to gossip
                        <input type="radio" name="q20" value="C)To the point talk" onChange={(e) =>  setPraque20(e.target.value)}/>C)To the point talk
                        <br/>
                        

                        <h2>21.Your physical Activity Level</h2>
                        <input type="radio" name="q21" value="A)Hyperactive" onChange={(e) =>  setPraque21(e.target.value)}/>A)Hyperactive
                        <input type="radio" name="q21" value="B)Moderately Active" onChange={(e) =>  setPraque21(e.target.value)}/>B)Moderately Active
                        <input type="radio" name="q21" value="C)Less Active" onChange={(e) =>  setPraque21(e.target.value)}/>C)Less Active
                        <br/>
                        

                        <h2>22.Do You take initiative and are highly motivated, even when You don’t feel like doing something ?</h2>
                        <input type="radio" name="q22" value="A)Yes, Usally" onChange={(e) =>  setPraque22(e.target.value)}/>A)Yes, Usally
                        <input type="radio" name="q22" value="B)Sometimes" onChange={(e) =>  setPraque22(e.target.value)}/>B)Sometimes
                        <input type="radio" name="q22" value="C)Rarely" onChange={(e) =>  setPraque22(e.target.value)}/>C)Rarely
                        <br/>
                        

                        <h2>23.When under pressure, are you able to think clearly and stay focused</h2>
                        <input type="radio" name="q23" value="A)Very rarely" onChange={(e) =>  setPraque23(e.target.value)}/>A)Very rarely
                        <input type="radio" name="q23" value="B)Sometimes" onChange={(e) =>  setPraque23(e.target.value)}/>B)Sometimes
                        <input type="radio" name="q23" value="C)Yes, Often" onChange={(e) =>  setPraque23(e.target.value)}/>C)Yes, Often
                        <br/>
                        
                    </div>
                {/* </div>
                
              ))
              : 'Loading...'} */}
          </div>
          <button className="w-long input" type="submit">Submit</button>
          
        </div>
        </form>
        
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