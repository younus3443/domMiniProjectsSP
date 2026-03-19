export function addNode(tree, folderName, type){

  if(tree.name === folderName && tree.isFolder){

    const newItem =
      type === "folder"
        ? {
            name: "New Folder",
            isFolder: true,
            items: [] 
          }
        : {
            name: "New File",
            isFolder: false
          }

    tree.items = [...tree.items, newItem]

    return { ...tree }
  }

  if(tree.items){
    tree.items = tree.items.map(item =>
      addNode(item, folderName, type)
    )
  }

  return { ...tree }
}