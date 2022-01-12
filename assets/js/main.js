const variables = {
    "typing" : document.querySelector(".typing")
}


let letterlen = 0

function __init__() {
    new requests("GET", "https://api.sijey.repl.co/githubstarcount?repo=https://github.com/chromium-projects/paperpro", null, true).response((data) => {
        document.querySelector("#ppstarcount").innerText = JSON.parse(data).star_count
    })

    new requests("GET", "https://api.sijey.repl.co/githubstarcount?repo=https://github.com/sijey-praveen/YouTube-Music-API", null, true).response((data) => {
        document.querySelector("#ytmstarcount").innerText = JSON.parse(data).star_count
    })

    setInterval(() => {
        variables.typing.style.opacity = "1"
        setTimeout(() => {
            variables.typing.style.opacity = "0"
        }, 500)
    }, 1000)
}

document.addEventListener("DOMContentLoaded", __init__)
window.onscroll = aos