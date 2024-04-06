import { useState } from "react"

function RadioButton() {

    const [radioButton, setRadioButton] = useState("male")

    let handleChange = (e)=>{
        setRadioButton(e.target.value)   
     }
    //  console.log(radioButton) outside on function calling then set then console here change with change value
     
  return (
    <>
    <div className="section">
    {/* all input inside label if we want to select only one of the option at a time */}
    {/* If we want checked then will be true */}
          <label htmlFor="option">   
              Select Gender <br />
            <label htmlFor="">Male</label>
            <input type="radio" name="option" value= "male" id="male" onChange={handleChange} checked={radioButton === "male"} style={{cursor:"pointer"}}/>  
            <label htmlFor="">Female</label>
            <input type="radio" name="option" value= "female" id="female" onChange={handleChange} checked={radioButton === "female"}  style={{cursor:"pointer"}}/>
            <div style={{padding:"8px"}}>Selected: <span style={{backgroundColor:"orange", padding:"4px 6px"}}>{radioButton}</span></div>
            {/* for default checked we are doing checked checked="option1"  Its like condition checked accepts boolean so radioButton === option1 it gives true so checked*/}
        </label>
    </div>
    </>
  )
}

export default RadioButton