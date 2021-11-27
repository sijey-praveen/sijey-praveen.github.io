const textarea = document.querySelector(".text")
const lines = document.querySelector(".lines")
const main = document.getElementById("main")
const events = ["change", "mousewheel", "scroll", "DOMContentLoaded", "keyup", "click"]

function render_lines() {
    let display = ""
    for (let i = 0;i < textarea.value.split("\n").length;i++) {
        display += `<span>${i}</span>`
    }
    lines.scrollTop = textarea.scrollTop
    lines.innerHTML = display
}

for (let i = 0;i < events.length;i++) {
    textarea.addEventListener(events[i], () => {render_lines()})
}

document.addEventListener("DOMContentLoaded", () => {render_lines()})
document.querySelector(".dark-btn").addEventListener("click", () => {main.className = "textfeild-dark"})
document.querySelector(".light-btn").addEventListener("click", () => {main.className = "textfeild-light"})
