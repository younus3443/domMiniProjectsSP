let count = document.querySelector("p")
let plus = document.querySelector(".plus")
let minus = document.querySelector(".minus")
let stepInput = document.querySelector("#step")
let reset = document.querySelector(".r")


plus.addEventListener("click", () => {
    const step = Number(stepInput.value) || 1
    count.textContent = Number(count.textContent) + step
})
minus.addEventListener("click", () => {
    const step = Number(stepInput.value) || 1
    count.textContent = Number(count.textContent) - step
})
reset.addEventListener("click", () => {
    count.textContent = 0
    // stepInput.value = 1

})

document.addEventListener("keydown", (event) => {
    const step = Number(stepInput.value) || 1
    if (event.key === "+" || event.key === "ArrowUp") {
        count.textContent = Number(count.textContent) + step
    }
    if (event.key === "-" || event.key === "ArrowDown") {
        count.textContent = Number(count.textContent) - step
    }
    if (event.key === "PageUp") {
        stepInput.value = step + 1
    }
    if (event.key === "PageDown") {
        stepInput.value = step - 1

    }
})

