import { useState } from "react"


function CheckBox() {

    const [tech , setTech] = useState([])

    const handleChange = (e)=>{
        const {value, checked} = e.target;
        if(checked){
          setTech([...tech, value])   //spread must be in array and array form
        } else {
            setTech(tech.filter((item)=>item !== value))              //this when turning to false then also it will be change and records value of changing input and by filtering not equal to that value remaining we will set.
        }
    }
  return (
    <>
    <div className="section">
        Select Tech Stacks only by Input Change  <br /> 
        <label htmlFor="">
            <label htmlFor="">HTML</label>
            <input type="checkbox" value="HTML" onChange={handleChange} style={{cursor:"pointer"}}/>
            <label htmlFor="" >CSS</label>
            <input type="checkbox" value="CSS" onChange={handleChange} style={{cursor:"pointer"}}/>
            <label htmlFor="">JavaScript</label>
            <input type="checkbox" value="JavaScript" onChange={handleChange} style={{cursor:"pointer"}}/>
            <div style={{marginTop:"10px", marginBottom:"10px"}}>{tech.map((item, index)=><span key={index} style={{backgroundColor:"gray", padding:"5px"}}>{item},</span>)}</div>
        </label>
    </div>
    
    </>
  )
}

export default CheckBox