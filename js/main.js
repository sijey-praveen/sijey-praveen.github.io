const hyplks = document.querySelectorAll(".hyplks")
const autofullscreen = document.getElementById("autofullscreen")

function changebg(url) {
    document.querySelector("body").style.backgroundImage = `url("${url}")`
}

document.addEventListener("DOMContentLoaded", () => {

    autofullscreen.click()

    document.querySelector(".main").innerHTML = Main()
    window.location.replace("#window")

    for (let i = 0;i < hyplks.length;i++) {
        hyplks[i].addEventListener("click", () => {
            if (hyplks[i].id === "finder") {
                document.querySelector(".main").innerHTML = Main()
                window.location.replace("#window")
            }
            else if (hyplks[i].id === "settings") {
                document.querySelector(".main").innerHTML = Settings()
                window.location.replace("#window")
            }
            else if (hyplks[i].id === "spotify") {
                document.querySelector(".main").innerHTML = Spotify()
                window.location.replace("#window")
            }
            else {
                window.open(hyplks[i].getAttribute("url"), "_blank")
            }
        })
    }

    for (let i = 0;i < document.querySelectorAll(".title-bar div").length;i++) {
        document.querySelectorAll(".title-bar div")[i].addEventListener("click", () => {
                window.location.replace("#")
            }
        )
    }

})
