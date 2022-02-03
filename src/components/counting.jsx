// export const Counting = (props) => {
//     return (
//       <div id='services' className='text-center'>
//         <div className='container'>
//           <div className='section-title'>
//             <h2>Our Community</h2>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
//               dapibus leonec.
//             </p>
//           </div>
          
//         </div>
//       </div>
//     )
//   }



const Counting = () => {
  var project = setInterval(projectDone, 30)
  var clients = setInterval(happyClients, 90)
  let count1 = 1;
  let count2 = 1;

  

  function projectDone() {
    count1++
    document.querySelector("#number1").innerHTML = count1
    if (count1 == 100) {
        clearInterval(project)
    }
}

function happyClients() {
  count2++
  document.querySelector("#number2").innerHTML = count2
  if (count2 == 25) {
      clearInterval(clients)
  }
}

  


    return (
      <div id='counting' className='text-center'>
        <div className='container'>
          <div className='section-title'>
          
          <h2>Our Community</h2>


          
  <div class="counter-up">
      
    <div class="content">
      <div class="box">
        <div class="icon"><i class="fas fa-users"></i></div>
        <div id="number1" class="counter">100+</div>
        <div class="text">Patients Served</div>
      </div>
      <div class="box">
        <div class="icon"><i class="fas fa-medkit"></i></div>
        <div id="number2" class="counter">25+</div>
        <div class="text">Doctor Registered</div>
      </div>
    </div>
  </div>





          </div>
        
        </div>
      </div>
    )
  }
  export default Counting