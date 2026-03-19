import { useState } from "react"
import FileExplorer from "./componenets/File"
import explorerData from "./componenets/data"
import { addNode } from "./utils/addNode"
import { deleteNode } from "./utils/deleteNode"

function App(){

  const [explorer,setExplorer] = useState(explorerData)

  const handleAdd = (folderName,type)=>{
    setExplorer(prev => addNode({...prev}, folderName,type))
  }

  const handleDelete = (name)=>{
    setExplorer(prev => deleteNode({...prev}, name))
  }

  return (
    <div className="p-5">
      <h2 className="text-xl mb-4">File Explorer</h2>

      <FileExplorer
        data={explorer}
        onAdd={handleAdd}
        onDelete={handleDelete}
      />

    </div>
  )
}

export default App