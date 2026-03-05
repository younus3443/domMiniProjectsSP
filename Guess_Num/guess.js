const random = Math.floor(Math.random() * 100) + 1
const guessInput = document.querySelector("#num")
const submitBtn = document.querySelector('.submit')
const newBtn = document.querySelector(".new")
const spanNum = document.querySelector(".span")
const spanPast = document.querySelector(".past")

submitBtn.addEventListener("click", () => {

    if (!guessInput.value) {
        alert("Enter num")
        return
    }
    const guess = Number(guessInput.value)
    if (guess === random) {
        alert("correct guess")
    }
    else {
        let spantxt = Number(spanNum.textContent)
        if (spantxt <= 0) {
            alert("You lost the game")
            return
        }

        spantxt--
        spanNum.textContent = spantxt

        if (spantxt === 0) {
            alert("You lost the game")
            return
        }

    }

    guessInput.value = ""
    spanPast.textContent += guess + ","




})
newBtn.addEventListener("click", () => {
    guessInput.value = ""
    spanNum.textContent = 10
    spanPast.textContent = ""

})

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        const guess = Number(guessInput.value)
        if (guess === random) {
            alert("correct guess")
        }
        else {
            let spantxt = Number(spanNum.textContent)
            spantxt = spantxt - 1
            spanNum.textContent = spantxt
        }
        spanPast.textContent += guess + ","
        guessInput.value = ""


    }
})


