const variables = {
    "typing" : $(".typing").select(),
}

function __init__() {
    $().get("https://github.com/chromium-projects/paperpro", (data) => {
        $("#ppstarcount").select().innerText = new BeautifulSoup(data, "#repo-stars-counter-star", "text").find
    })

    $().get("https://github.com/sijey-praveen/YouTube-Music-API", (data) => {
        $("#ytmstarcount").select().innerText = new BeautifulSoup(data, "#repo-stars-counter-star", "text").find
    })

    $().get("https://github.com/peregrine-lang/peregrine-lang.github.io", (data) => {
        $("#plwstarcount").select().innerText = new BeautifulSoup(data, "#repo-stars-counter-star", "text").find
    })

    $().get("https://github.com/sijey-praveen/Pure.js", (data) => {
        $("#pjsstarcount").select().innerText = new BeautifulSoup(data, "#repo-stars-counter-star", "text").find
    })

    setInterval(() => {
        variables.typing.style.opacity = "1"
        setTimeout(() => {
            variables.typing.style.opacity = "0"
        }, 500)
    }, 1000)
}

$().on("DOMContentLoaded", __init__)
$("window").on("scroll", aos)
