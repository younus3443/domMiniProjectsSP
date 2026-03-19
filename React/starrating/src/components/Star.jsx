import { useState } from "react"

function Star(){
    const [rating,setRating]=useState(0)
    const [hover,setHover]=useState(0)

    return (
        <div className="flex flex-col justify-center text-center mt-5">
            <div className="text-5xl">
                {[1,2,3,4,5].map((star)=>(
                    <span 
                    key={star}
                    onClick={()=>(setRating(star))}

                    onMouseEnter={()=>setHover(star)}
                    onMouseLeave={()=>setHover(0)}
                    className={star<=hover ? "text-yellow-500" : ""}

                    >*</span>
                ))}
            </div>
            <p>{`Rating: ${rating}`}</p>
        </div>
    )

}
export default Star