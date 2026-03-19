import { useState } from "react"

function Comment({ data, onDelete }) {

  const [replyText, setReplyText] = useState("")
  const [showReply, setShowReply] = useState(false)
  const [replies, setReplies] = useState(data.replies || [])

  function addReply(){
    if(!replyText.trim()) return

    const newReply = {
      text: replyText,
      replies:[]
    }

    setReplies(prev => [...prev, newReply])
    setReplyText("")
    setShowReply(false)
  }

  function deleteReply(index){
    setReplies(prev => prev.filter((_,i)=> i !== index))
  }

  return (
    <div className="ml-10 bg-gray-200 p-5 rounded-lg mt-3">

      <p>{data.text}</p>

      <div className="flex gap-10 mt-3">
        <button onClick={()=>setShowReply(!showReply)}>Reply</button>
        <button onClick={onDelete}>Delete</button>
      </div>

      {showReply && (
        <div className="mt-3">
          <input
            className="border p-1"
            placeholder="Write reply..."
            value={replyText}
            onChange={(e)=>setReplyText(e.target.value)}
          />

          <button className="ml-2" onClick={addReply}>
            Add Reply
          </button>
        </div>
      )}

      {replies.map((reply,index)=>(
        <Comment
          key={index}
          data={reply}
          onDelete={()=>deleteReply(index)}
        />
      ))}

    </div>
  )
}

export default Comment
