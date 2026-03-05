const textValue = document.querySelector("#input")
const list = document.querySelector(".list")
document.addEventListener("keydown",(e)=>{
    if(e.key==="Enter" && document.activeElement === textValue && textValue.value.trim() !== ""){

        const li=document.createElement("li")

        li.innerHTML = `
            <span class="text">${textValue.value}</span>
            <span class="edit">✏️</span>
            <span class="delete">🗑</span>
        `

        list.appendChild(li)
        textValue.value=""
    }
})

list.addEventListener("click", (e) => {

  const editBtn = e.target.closest(".edit")

  if (editBtn) {

    const li = editBtn.parentElement
    const textSpan = li.querySelector(".text")

    const input = document.createElement("input")
    input.type = "text"
    input.value = textSpan.textContent

    li.replaceChild(input, textSpan)
    input.focus()

    input.addEventListener("keydown", (event) => {

      if (event.key === "Enter") {

        const newSpan = document.createElement("span")
        newSpan.classList.add("text")
        newSpan.textContent = input.value

        li.replaceChild(newSpan, input)
      }

    })
  }
  const deleteBtn = e.target.closest(".delete")
  if (deleteBtn) {
    deleteBtn.parentElement.remove()
  }

})

