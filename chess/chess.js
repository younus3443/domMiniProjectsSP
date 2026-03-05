const cells=document.querySelectorAll('.board td')

cells.forEach((cell,index)=>{
    const row=Math.floor(index/8)
    const col=index%8

    cell.dataset.row=row
    cell.dataset.col=col

    cell.addEventListener("click",handleClick)

})

function handleClick(event){
    document.querySelectorAll(".highlight").
    forEach(cell=>cell.classList.remove("highlight"))

    const clickR=event.target.dataset.row
    const clickC=event.target.dataset.col

    cells.forEach(cell=>{
        const currentR=cell.dataset.row
        const currentC=cell.dataset.col

        if(Math.abs(currentR-clickR)===Math.abs(currentC-clickC)){
            cell.classList.add("highlight")
        }
    })
}

