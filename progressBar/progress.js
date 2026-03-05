const start=document.querySelector(".b1")
const stop=document.querySelector(".b2")
const reset=document.querySelector(".b3")
const loading=document.querySelector(".loading")

// const SSOT = {
//     progress : 0,
//     interval: 0
// }

let progress=0
let interval

start.addEventListener("click",()=>{
    if(interval) return
    interval=setInterval(()=>{
        if(progress>=100){
            clearInterval(interval)
            // interval=null
            return 
        }
        progress+=1
        loading.style.width=progress+"%"
    },100)
})
stop.addEventListener("click",()=>{
    clearInterval(interval)
    interval=null
})
reset.addEventListener("click",()=>{
    clearInterval(interval)
    location.reload();
})