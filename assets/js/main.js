const variables = {
    "typing" : document.querySelector(".typing")
}

function __init__() {
    new requests("GET", "https://github.com/chromium-projects/paperpro", null, true).response((data) => {
        document.querySelector("#ppstarcount").innerText =  new BeautifulSoup(data, "#repo-stars-counter-star", "text").find
    })

    new requests("GET", "https://github.com/sijey-praveen/YouTube-Music-API", null, true).response((data) => {
        document.querySelector("#ytmstarcount").innerText = new BeautifulSoup(data, "#repo-stars-counter-star", "text").find
    })

    new requests("GET", "https://github.com/peregrine-lang/peregrine-lang.github.io", null, true).response((data) => {
        document.querySelector("#plwstarcount").innerText = new BeautifulSoup(data, "#repo-stars-counter-star", "text").find
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
