const inputs = document.querySelectorAll("#i")

inputs.forEach((input, index) => {
    input.addEventListener("input", (e) => {
        input.value = input.value.replace(/[^0-9]/g, "")
        if (input.value && index < inputs.length - 1) {
            inputs[index + 1].focus()
        }
    })
    input.addEventListener("keydown", (e) => {
        if (e.key === "Backspace") {
            if (input.value) {
                input.value = ""
            } else if (index > 0) {
                inputs[index - 1].focus()
                input.value = ""
            }
        }
        if (e.key === "ArrowLeft" && index > 0) {
            inputs[index - 1].focus()
        }
        if (e.key === "ArrowRight" && index < inputs.length - 1) {
            inputs[index + 1].focus()
        }
    })
})

document.querySelector(".inputs").addEventListener("paste", (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/[^0-9]/g, "")
    const digits = pasteData.split("")

    inputs.forEach((input, i) => {
        input.value = digits[i] || ""
    })
})