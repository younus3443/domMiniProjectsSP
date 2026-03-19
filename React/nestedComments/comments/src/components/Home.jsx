import { useState } from "react"
import Comment from "./Comments"

function Home(){

  const [input,setInput] = useState("")
  const [comments,setComments] = useState([])

  function addComment(){
    if(!input.trim()) return
    setComments(prev=>[...prev,
      {text:input,replies:[]}
    ])

    setInput("")
  }

  function deleteComment(index){
    setComments(prev => prev.filter((_,i)=> i !== index))
  }

  function addReply(index, text){
    setComments(prev => {
      const updated = [...prev]
      updated[index].replies.push({text, replies:[]})
      return updated
    })
  }

  return (
    <div>

      <h2 className="font-bold text-xl p-5">
        Comments
      </h2>

      <input
        className="border ml-5"
        placeholder="Add comment..."
        value={input}
        onChange={(e)=>setInput(e.target.value)}
      />

      <button className="ml-3" onClick={addComment}>
        Add
      </button>

      {comments.map((c,index)=>(
        <Comment
          key={index}
          data={c}
          onDelete={()=>deleteComment(index)}
          onReply={(text)=>addReply(index,text)}
        />
      ))}

    </div>
  )
}

export default Home
