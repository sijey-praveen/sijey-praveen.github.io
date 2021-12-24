const title_bar_action_btns = [".close-btn", ".minimize-btn", ".maximize-btn"]
const hyperlink_action_btns = ["mail", "github", "telegram", "finder", "twitter"]

document.addEventListener("DOMContentLoaded", () => {
    window.location.replace("#readme")

    for (let i = 0;i < title_bar_action_btns.length;i++) {
        document.querySelector(title_bar_action_btns[i]).addEventListener("click", () => {
                window.location.replace("#")
            }
        )
    }

    for (let i = 0;i < hyperlink_action_btns.length;i++) {
        document.getElementById(hyperlink_action_btns[i]).addEventListener("click", () => {
                if (hyperlink_action_btns[i] === "github") {
                    window.open("https://github.com/sijey-praveen/", "_blank")
                } else if (hyperlink_action_btns[i] === "mail") {
                    window.open("mailto:cjpraveen@hotmail.com", "_blank")
                } else if (hyperlink_action_btns[i] === "telegram") {
                    window.open("https://t.me/Sijeyme", "_blank")
                } else if (hyperlink_action_btns[i] === "finder") {
                    window.location.replace("#readme")
                } else if (hyperlink_action_btns[i] === "twitter") {
                    window.open("https://twitter.com/sijey_praveen", "_blank")
                }
            }
        )
    }
})

// document.querySelector(".application-tray").querySelector("img").addEventListener("mousedown", () => {
//     document.querySelector(".application-tray").style.background = "transperent"
// })