const input = document.querySelector(".input")
const container = document.querySelector(".container")

let chips = []

input.addEventListener("input", () => {

    const text = input.value.trim()

    container.innerHTML = ""

    chips.forEach(word => createChip(word))

    if(text !== ""){
        createChip(text,true) 
    }

})
input.addEventListener("keydown",(e)=>{

    if(e.key === "Enter"){

        e.preventDefault()

        const text = input.value.trim()

        if(text === "") return

        chips.push(text)

        input.value=""

        render()

    }

})

function render(){

    container.innerHTML=""

    chips.forEach(word => createChip(word))

}

function createChip(text,isPreview=false){

    const chip=document.createElement("span")
    chip.classList.add("chip")
    chip.textContent=text

    if(!isPreview){

        const remove=document.createElement("button")
        remove.textContent="✖"

        remove.addEventListener("click",()=>{

            chips = chips.filter(c => c !== text)
            render()

        })

        chip.appendChild(remove)

    }

    container.appendChild(chip)

}