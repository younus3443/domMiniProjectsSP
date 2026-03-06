const board=document.querySelector(".board")
const reset=document.querySelector("button")
const attempts=document.querySelector("p")

const values=[]
for(let i=1;i<=8;i++){
    values.push(i)
    values.push(i)
}
values.sort(()=>Math.random()-0.5)

let index=0
let count=0
for(let r=0;r<4;r++){
    for(let c=0;c<4;c++){
        const cell=document.createElement("div")
        cell.classList.add("cell")
        cell.dataset.value=values[index]
        index++
        board.appendChild(cell)
    }
}

let firstCard=null
let secondCard=null
let matches=0


const cells=document.querySelectorAll(".cell")

cells.forEach(cell=>{
    cell.addEventListener("click",()=>{
        cell.textContent=cell.dataset.value
        cell.classList.add("flip")
        
        if(!firstCard){
            firstCard=cell
            count++
            attempts.textContent=`Attempts:${count}`
            return
        }
        secondCard=cell
        count++
            attempts.textContent=`Attempts:${count}`
        checkMatch()

    })
})



function checkMatch(){
    if(firstCard.dataset.value===secondCard.dataset.value){
        matches++
        if(matches===8){
            alert(`match Completed  in  ${count} attempts`)
            count=0
            attempts.textContent = `Attempts: ${count}`
            
        }
        firstCard=null
        secondCard=null

    }else{

        setTimeout(()=>{
            firstCard.textContent=""
            secondCard.textContent=""
            firstCard.classList.remove("flip")
            secondCard.classList.remove("flip")
            firstCard=null
            secondCard=null

        },800)
        
    }
}

reset.addEventListener("click",()=>{
    cells.forEach(cell=>{
        cell.textContent=""
        cell.classList.remove("flip")
    })
    firstCard=null
    secondCard=null
    matches=0
    attempts.textContent="Attempts:0"
    count=0
})
