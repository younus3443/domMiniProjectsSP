const board = document.querySelector(".board")
const reset=document.querySelector("button")

for(let r=0;r<3;r++){
    for(let c=0;c<3;c++){
        const cell=document.createElement("div")
        cell.classList.add("cell")
        board.appendChild(cell)
    }
}

const cells=document.querySelectorAll(".cell")
count=0
let gameOver=false
cells.forEach(cell=>{
    cell.addEventListener("click",()=>{
        if(cell.textContent!=="") return 
        if(count%2==0){
                
            cell.textContent="X"
        }else{
            cell.textContent="O"
        }
        count++
        checkWinner()
        
    })

})

function checkWinner(){
    const totalPatterns=[
        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
    ]
    totalPatterns.forEach(pattern=>{
        const[a,b,c]=pattern
        if(cells[a].textContent&&cells[a].textContent===cells[b].textContent && cells[a].textContent===cells[c].textContent){
            alert(cells[a].textContent+" wins")
            resetBoard()
            gameOver=true
            

            
        }
    })
    if(count===9){
        alert("Match Draw")
    }

    
}
function resetBoard(){
    cells.forEach(cell=>{
        cell.textContent=""
    })
    count=0
    gameOver=false
}
reset.addEventListener("click",resetBoard)