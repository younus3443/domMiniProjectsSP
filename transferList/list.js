const left=document.querySelector("#left")
const right=document.querySelector("#right")
const allRight=document.querySelector(".allRight")
const allLeft=document.querySelector(".allLeft")
const leftBtn=document.querySelector(".left")
const rightBtn=document.querySelector(".right")


rightBtn.addEventListener("click",()=>{
    const checked=left.querySelectorAll("input:checked")
    checked.forEach(cb=>{
        cb.checked=false
        right.appendChild(cb.parentElement)
    })
})
leftBtn.addEventListener("click",()=>{
    const checked=document.querySelectorAll("input:checked")
    checked.forEach(cb=>{
        cb.checked=false
        left.appendChild(cb.parentElement)
    })
})
allLeft.addEventListener("click",()=>{
    const checked=document.querySelectorAll("input")
    checked.forEach(cb=>{
        left.appendChild(cb.parentElement)
    })
    
})
allRight.addEventListener("click",()=>{
    const checked=document.querySelectorAll("input")
    checked.forEach(cb=>{
        right.appendChild(cb.parentElement)
    })
    
})




