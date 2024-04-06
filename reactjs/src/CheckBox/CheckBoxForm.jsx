import { useRef, useState } from "react"


function CheckBoxForm() {
   
    const [tech , setTech] = useState([])   //for e.target method
    const [techByRef , setTechByRef] = useState([])


    const handleSubmitByEvent = (e)=>{
        e.preventDefault()
        const formData = new FormData(e.target)
        setTech(Array.from(formData.getAll("tech")))
    }

    const formRef = useRef(null)

    const handleSubmitByUseRef = (e)=>{
      e.preventDefault()
      const formData = new FormData(formRef.current)         //like const setEmail(formData.get("email"))  if want separately then name of input must be name = "email"
      setTechByRef(Array.from(formData.getAll("tech")))     
    }
  return (
    <>
    <div className="section">
        Select Tech Stacks using form submit  <br /> 
        <form htmlFor="" onSubmit={handleSubmitByEvent}>
            <label htmlFor="">HTML</label>
            <input type="checkbox" value="HTML" name="tech" style={{cursor:"pointer"}}/>
            <label htmlFor="" >CSS</label>
            <input type="checkbox" value="CSS" name="tech" style={{cursor:"pointer"}}/>
            <label htmlFor="">JavaScript</label>
            <input type="checkbox" value="JavaScript" name="tech" style={{cursor:"pointer",marginBottom: "10px"}}/> <br />
            <button type="submit">Submit</button>
        </form>
        <div style={{marginTop:"10px", marginBottom:"10px"}}>{tech.map((item, index)=><span key={index} style={{backgroundColor:"gray", padding:"5px"}}>{item},</span>)}</div>
    </div>

       {/* form handle using useRef its benefit we can use anywehere with the need of event but above we can use any where in this component */}
    <div className="section">
        Select Tech Stacks using form submit  <br /> 
        <form htmlFor="" ref={formRef} onSubmit={handleSubmitByUseRef}>
            <label htmlFor="">HTML</label>
            <input type="checkbox" value="HTML" name="tech" style={{cursor:"pointer"}}/>
            <label htmlFor="" >CSS</label>
            <input type="checkbox" value="CSS" name="tech" style={{cursor:"pointer"}}/>
            <label htmlFor="">JavaScript</label>
            <input type="checkbox" value="JavaScript" name="tech" style={{cursor:"pointer", marginBottom: "10px"}}/> <br />
            <button type="submit">Submit</button>
        </form>
        <div style={{marginTop:"10px", marginBottom:"10px"}}>{techByRef.map((item, index)=><span key={index} style={{backgroundColor:"gray", padding:"5px"}}>{item},</span>)}</div>
    </div>
    </>
  )
}

export default CheckBoxForm