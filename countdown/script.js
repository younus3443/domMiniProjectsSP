const start=document.querySelector(".start")
const stop=document.querySelector(".stop")
const reset=document.querySelector(".reset")
const m1=document.querySelector(".m1")
const m2=document.querySelector(".m2")
const s1=document.querySelector(".s1")
const s2=document.querySelector(".s2")

let timer
let total=0

start.addEventListener("click",()=>{
    let min=Number(m1.value+m2.value)
    let sec=Number(s1.value+s2.value)

    total=min*60+sec
    if(total<=0){
        return
    }

    if(isNaN(min) || isNaN(sec) ||sec>59){
        alert("Enter valid num")
        return 
    }

    timer=setInterval(()=>{
        if(total<=0){
            clearInterval(timer)
            timer=null
            return
        }
        total--

        let mm=String(Math.floor(total/60)).padStart(2,"0")
        let ss=String(Math.floor(total%60)).padStart(2,"0")

        console.log(mm, ss)

        m1.value=mm[0]
        m2.value=mm[1]
        s1.value=ss[0]
        s2.value=ss[1]



    },1000)


    
})

stop.addEventListener("click",()=>{
    clearInterval(timer)
    // timer=null
})
reset.addEventListener("click",()=>{
    clearInterval(timer)
    timer=null
    m1.value=m2.value=s1.value=s2.value=0


})

