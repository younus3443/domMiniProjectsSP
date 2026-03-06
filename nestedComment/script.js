const input = document.querySelector(".comment-input")
const button = document.querySelector(".add-comment")
const container = document.querySelector(".comments-container")

button.addEventListener("click", () => {

    const text = input.value.trim()

    if(text === "") return

    const comment = createComment(text)

    container.appendChild(comment)

    input.value = ""

})

function createComment(text){

    const commentDiv = document.createElement("div")
    commentDiv.classList.add("comment")

    const content = document.createElement("p")
    content.textContent = text

    const replyBtn = document.createElement("button")
    replyBtn.textContent = "Reply"

    const repliesContainer = document.createElement("div")
    repliesContainer.classList.add("replies")

    replyBtn.addEventListener("click",()=>{

        const replyInput = document.createElement("input")
        replyInput.placeholder = "Write reply..."

        const replyButton = document.createElement("button")
        replyButton.textContent = "Add"

        replyButton.addEventListener("click",()=>{

            const replyText = replyInput.value.trim()

            if(replyText === "") return

            const replyComment = createComment(replyText)

            repliesContainer.appendChild(replyComment)

            replyInput.remove()
            replyButton.remove()

        })

        commentDiv.appendChild(replyInput)
        commentDiv.appendChild(replyButton)

    })

    commentDiv.appendChild(content)
    commentDiv.appendChild(replyBtn)
    commentDiv.appendChild(repliesContainer)

    return commentDiv
}