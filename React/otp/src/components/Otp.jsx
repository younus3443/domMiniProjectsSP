import { useRef } from "react"

function Otp(){

  const inputs = useRef([])

  const handleChange = (e, index) => {

    const value = e.target.value

    if(value && index < 5){
      inputs.current[index + 1].focus()
    }

  }

  const handleKeyDown = (e, index) => {

    if(e.key === "Backspace" && !e.target.value && index > 0){
      inputs.current[index - 1].focus()
    }

  }

  return(
    <div className="flex gap-5 justify-center mt-10">

      {[...Array(6)].map((_, index)=>(
        <input
          key={index}
          maxLength="1"
          className="h-10 w-10 border text-center"
          ref={(el)=>inputs.current[index] = el}
          onChange={(e)=>handleChange(e,index)}
          onKeyDown={(e)=>handleKeyDown(e,index)}
        />
      ))}

    </div>
  )

}

export default Otp