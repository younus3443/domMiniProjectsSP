function Home({ node, checked, setChecked }) {

  function getAllChildren(node){
    let ids=[node.id]
    if(node.children){
      node.children.forEach((child)=>{
        ids=[...ids,...getAllChildren(child)]
      })
    }
    return ids


  }


  function handleClick(isChecked){
    const allIds=getAllChildren(node)
    setChecked(prev=>{
      let updated
      if(isChecked){
        updated=[...new Set ([...prev,...allIds])]
      }
      else{
        updated=[prev.filter(id=>allIds.includes(id))]
      }
      return updated

    })
      
      
    }
        
    
  const allChildren=node.children? node.children.every(child=>checked.includes(child.id)):false
  const isChecked=checked.includes(node.id) ||allChildren
  return (
    <div className="ml-5">
      <label>
        <input type="checkbox" checked={isChecked} onChange={(e)=>handleClick(e.target.checked)}></input>
        {node.id}
      </label>
      {node.children?.map((child)=>{
        return <Home node={child} checked={checked} setChecked={setChecked}/>
      })}
    </div>
  )

  
}
export default Home