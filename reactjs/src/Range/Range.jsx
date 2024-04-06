import { useState } from "react"


function Range() {
    const [value, setValue] = useState(0)
     //here onInput change basically as value change but onChange can be used but it shows value on removing of focus
    const handleInput = (e)=>{
        setValue(e.target.value)
    }
  return (
    <>
      <div className='section'>
         <label htmlFor="">
            Range <br />
            <input type="range" min="0" max="200" value= {value} onInput={handleInput} style={{cursor:"pointer"}}/>
         </label>
         <br />
         Range Value is : {value}
      </div>

    </>
    
  )
}

export default Range