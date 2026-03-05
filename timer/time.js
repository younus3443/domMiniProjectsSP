const n1=document.querySelector("#num1")
const n2=document.querySelector("#num2")
const n3=document.querySelector("#num3")
const n4=document.querySelector("#num4")
const start=document.querySelector(".b1")
const stop=document.querySelector(".b2")
const reset=document.querySelector(".b3")



let timer
let total=0
start.addEventListener("click",()=>{
    if(timer) return
    let min=Number(n1.value+n2.value)
    let sec=Number(n3.value+n4.value)


    if (isNaN(min) || isNaN(sec) || sec > 59) {
        alert("Enter valid MM:SS")
        return
    }

    total=min*60+sec
    if(total==0){
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

        n1.value=mm[0]
        n2.value=mm[1]
        n3.value=ss[0]
        n4.value=ss[1]
    },1000)
    start.style.backgroundColor="white"
    start.style.color="black"
    stop.style.backgroundColor=null
    stop.style.color=null

    

})

stop.addEventListener("click",()=>{
    clearInterval(timer)
    timer=null
    start.style.backgroundColor=null
    start.style.color=null
    stop.style.backgroundColor="white"
    stop.style.color="black"
})
reset.addEventListener("click",()=>{
    clearInterval(timer)
    timer=null
    n1.value=n2.value=n3.value=n4.value=0
    start.style.backgroundColor=null
    start.style.color=null
    stop.style.backgroundColor=null
    stop.style.color=null

})










// let timer
// let total = 0

// start.addEventListener("click", () => {
//     if (timer) return

//     const min = +(n1.value + n2.value)
//     const sec = +(n3.value + n4.value)

//     if (isNaN(min) || isNaN(sec) || sec > 59) {
//         alert("Enter valid MM:SS")
//         return
//     }

//     total = min * 60 + sec

//     timer = setInterval(() => {
//         if (total <= 0) {
//             clearInterval(timer)
//             timer = null
//             return
//         }

//         total--

//         let mm = String(Math.floor(total / 60)).padStart(2, "0")
//         let ss = String(total % 60).padStart(2, "0")

//         n1.value = mm[0]
//         n2.value = mm[1]
//         n3.value = ss[0]
//         n4.value = ss[1]

//     }, 1000)
// })

// stop.addEventListener('click',()=>{
//     clearInterval(timer)
//     timer=null

// })
// reset.addEventListener("click",()=>{
//     clearInterval(timer)
//     timer=null;
//     n1.value=n2.value=n3.value=n4.value=""
// })
