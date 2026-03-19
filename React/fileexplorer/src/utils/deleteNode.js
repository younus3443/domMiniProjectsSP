export function deleteNode(tree, targetName){

  if(!tree.items) return tree

  tree.items = tree.items.filter(
    item => item.name !== targetName
  )

  tree.items.forEach(item =>
    deleteNode(item,targetName)
  )

  return {...tree}
}