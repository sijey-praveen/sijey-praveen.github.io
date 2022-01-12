const variables = {
    "content" : document.querySelectorAll(".content"),
    "typing" : document.querySelector(".typing"),
    "isDark" : false,
    "body" : document.querySelector("body")
}

function __init__() {
    for (let i = 0;i < variables.content.length; i++) {
        variables.content[i].addEventListener("mouseover", () => {
            variables.content[i].parentNode.querySelector(".underline").style.width = variables.content[i].parentNode.querySelector(".underline").getAttribute("transform")
        })
        variables.content[i].addEventListener("mouseout", () => {
            variables.content[i].parentNode.querySelector(".underline").style.width = variables.content[i].parentNode.querySelector(".underline").getAttribute("default")
        })
    }

    setInterval(() => {
        variables.typing.style.opacity = "1"
        setTimeout(() => {
            variables.typing.style.opacity = "0"
        }, 500)
    }, 1000)
}

document.addEventListener("DOMContentLoaded", __init__)
window.onscroll = aos