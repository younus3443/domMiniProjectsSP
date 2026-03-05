const board=document.querySelector(".board")

for(let r=0;r<8;r++){
    for(let c=0;c<8;c++){
        const cell=document.createElement('div')
        cell.classList.add("cell")

        if((r+c)%2===0){
            cell.classList.add("white")
        }
        else{
            cell.classList.add("black")
        }

        cell.dataset.row=r
        cell.dataset.col=c

        board.appendChild(cell)
    }

}

const cells=document.querySelectorAll(".cell")
cells.forEach(cell=>{
    cell.addEventListener("click",()=>{
        const r=cell.dataset.row
        const c=cell.dataset.col

        cells.forEach(cell=>{
            cell.classList.remove("diagonal")
        })

        cells.forEach(cell=>{
            const r1=cell.dataset.row
            const c1=cell.dataset.col

            if(Math.abs(r1-r)===Math.abs(c1-c)){
                cell.classList.add("diagonal")
            }
        })



    })
})