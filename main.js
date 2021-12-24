const titlebar_btns = [".close-btn", ".minimize-btn", ".maximize-btn"]
const hyperlink = ["mail", "github", "telegram", "finder", "twitter", "spotify", "ytmusic", "settings", "applemusic", "assistant"]

const about_session_html = `
<div class="about">
    <img src="img/default-user-avatar.png" alt="">
    <div class="heading">About Me</div>
    <div class="content">Male, Student, Programmer, Coder and Web Developer.</div>
</div>
<div class="education">
    <div class="heading">Education</div>
    <div class="content"><b>2006 - 2021</b> Graduated from School<br><b>2021 - 2023</b> Doing Diploma in Computer Science Engineering</div>    
</div>
<div class="skills">
    <div class="heading">Skills</div>
    <div>
        <img src="img/python.png" alt="">
        <img src="img/js.png" alt="">
        <img src="img/node-js.png" alt="">
        <img src="img/html-5.png" alt="">
        <img src="img/css-3.png" alt="">
        <img src="img/reactjs.png" alt="">
        <img src="img/electronjs.png" alt="">
        <img src="img/PyQt.png" alt="">
        <img src="img/flask.png" alt="">
    </div>
</div>
<div class="hire-me-container">
    <div class="heading">What i Can Offer?</div>
    <div class="content">Web Sites. (React / HTML, CSS, JS)</div>
    <div class="content">Web Applications. (React / HTML, CSS, JS)</div>
    <div class="content">Web Extensions. (JavaScript / Python)</div>
    <div class="content">Web Scraping. (Python)</div>
    <div class="content">Cross Platform Applications. (Electron / PyQt)</div>
    <a href="mailto:cjpraveen@hotmail.com" class="btn">Hire Me</a>                
</div>
<div class="communicative-language">
    <div class="heading">Communicative Language</div>
    <div class="content">Tamil <br> English</div>    
</div>
<div class="social">
    <div class="heading">Social</div>
    <div>
        <a href="https://github.com/sijey-praveen"><img src="img/github-social.png" alt="GitHub"></a>
        <a href="https://twitter.com/sijey_praveen"><img src="img/twitter-social.png" alt="Twitter"></a>
        <a href="https://pypi.org/user/Sijey/"><img src="img/pypi-social.png" alt="PyPi"></a>
    </div>
</div>`
const spotify_window_html = `<iframe class="spotify" src="https://open.spotify.com/embed/album/3nzuGtN3nXARvvecier4K0" frameBorder="0"></iframe>`
const ytmusic_window_html = `<iframe class="youtube" src="https://www.youtube.com/embed/videoseries?list=PLhk4aa9eb0ZdNDUeWHnJX-lVI7ZJ9ydKT" frameBorder="0"></iframe>`
const settings_window_html = `
<div class="settings">
    <div class="heading">Wallpapers</div>
    <div style="padding:10px;display: flex;flex-flow: row wrap;justify-content: center;">
        <img src="img/desktop-wallpaper.jpg" onclick="changebg('img/desktop-wallpaper.jpg')">
        <img src="img/mojave-night.jpg" onclick="changebg('img/mojave-night.jpg')">
        <img src="img/mojave-evening.jpg" onclick="changebg('img/mojave-evening.jpg')">
        <img src="img/catalina-morning.jpg" onclick="changebg('img/catalina-morning.jpg')">
        <img src="img/catalina-night.jpg" onclick="changebg('img/catalina-night.jpg')">
        <img src="img/wallpaper1.jpg" onclick="changebg('img/wallpaper1.jpg')">
    </div>
<div>`
const applemusic_window_html = `<iframe class="applemusic" src="https://embed.music.apple.com/us/album/shockwave/1569128457" frameBorder="0"></iframe>`

function changebg(url) {
    document.querySelector("body").style.backgroundImage = `url("${url}")`
}

document.addEventListener("DOMContentLoaded", () => {

    document.querySelector(".main").innerHTML = about_session_html
    window.location.replace("#window")

    for (let i = 0;i < titlebar_btns.length;i++) {
        document.querySelector(titlebar_btns[i]).addEventListener("click", () => {
                window.location.replace("#")
            }
        )
    }

    // $.get("https//api.sijey.repl.co/weather?location=san%20bruno", (data) => { document.querySelector(".weather").innerHTML = `${data.data}` })

    for (let i = 0;i < hyperlink.length;i++) {
        document.getElementById(hyperlink[i]).addEventListener("click", () => {
                if (hyperlink[i] === "github") {
                    window.open("https://github.com/sijey-praveen/", "_blank")
                }
                else if (hyperlink[i] === "mail") {
                    window.open("mailto:cjpraveen@hotmail.com", "_blank")
                }
                else if (hyperlink[i] === "telegram") {
                    window.open("https://t.me/Sijeyme", "_blank")
                }
                else if (hyperlink[i] === "finder") {
                    document.querySelector(".main").innerHTML = about_session_html
                    window.location.replace("#window")
                }
                else if (hyperlink[i] === "twitter") {
                    window.open("https://twitter.com/sijey_praveen", "_blank")
                }
                else if (hyperlink[i] === "spotify") {
                    document.querySelector(".main").innerHTML = spotify_window_html
                    window.location.replace("#window")
                }
                else if (hyperlink[i] === "ytmusic") {
                    document.querySelector(".main").innerHTML = ytmusic_window_html
                    window.location.replace("#window")
                }
                else if (hyperlink[i] === "settings") {
                    document.querySelector(".main").innerHTML = settings_window_html
                    window.location.replace("#window")
                }
                else if (hyperlink[i] === "applemusic") {
                    document.querySelector(".main").innerHTML = applemusic_window_html
                    window.location.replace("#window")
                }
                else if (hyperlink[i] === "assistant") {
                    window.open("https://assistantweb.netlify.app", "_blank")
                }
            }
        )
    }

})
