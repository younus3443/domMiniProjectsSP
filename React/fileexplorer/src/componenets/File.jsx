import { useState } from "react"
// import Edit from "./Edit"
// import Delete from "./Delete"
// import Add from "./Add"

function FileExplorer({ data, onDelete, onAdd }) {

  const [expand,setExpand] = useState(false)

  if(data.isFolder){
    return (
      <div className="ml-6">

        <div className="flex gap-2 items-center">

          <span onClick={()=>setExpand(!expand)}>📁</span>

          <Edit InitialName={data.name}/>

          <Delete onDelete={()=>onDelete(data.name)} />

          <Add onAdd={onAdd} folderName={data.name} />

        </div>

        {expand && data.items?.map((item,index)=>(
          <FileExplorer
            key={index}
            data={item}
            onDelete={onDelete}
            onAdd={onAdd}
          />
        ))}

      </div>
    )
  }

  return (
    <div className="ml-6 flex gap-2 items-center">

      📄
      <Edit InitialName={data.name}/>

      <Delete onDelete={()=>onDelete(data.name)} />


    </div>
  )
}

export default FileExplorer