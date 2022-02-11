

export const Prakriti1 = (props) => {
  return (
    <div id='prakriti1'>
      
        
          <h2>Prakriti1</h2>
          
        
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
            <button>{d.option4}</button>
            <br/>
                </div>
                </div>
              ))
              : 'Loading...'}
          </div>
        {/* </div> */}
      
    </div>
  )
}
