function Main() {
    return (`
    <div class="about">
        <img src="img/default-user-avatar.png" alt="">
        <div class="heading">About Me</div>
        <div class="content">I'm Sijey\nMale, Student, Programmer, Coder and Web Developer.</div>
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
    <div class="offer-container">
        <div class="heading">What i Can Offer?</div>
        <div class="content">Web Sites. (Flask, React, HTML, CSS, JS)</div>
        <div class="content">Web Applications. (React, HTML, CSS, JS)</div>
        <div class="content">Web Extensions. (JavaScript, Python)</div>
        <div class="content">Web Scraping. (Python)</div>
        <div class="content">Cross Platform Applications. (Electron, PyQt)</div>
        <a href="mailto:cjpraveen@hotmail.com" class="btn">Contact</a>
    </div>
    <div class="communicative-language">
        <div class="heading">Communicative Language</div>
        <div class="content">Tamil\nEnglish</div>
    </div>
    <div class="social">
        <div class="heading">Socials</div>
        <div>
            <a href="https://github.com/sijey-praveen"><img src="img/github-social.png" alt="GitHub"></a>
            <a href="https://twitter.com/sijey_praveen"><img src="img/twitter-social.png" alt="Twitter"></a>
            <a href="https://pypi.org/user/Sijey/"><img src="img/pypi-social.png" alt="PyPi"></a>
        </div>
    </div>`)
}

function Spotify() {
    return (`<iframe class="spotify" src="https://open.spotify.com/embed/album/3nzuGtN3nXARvvecier4K0" frameBorder="0"></iframe>`)
}

function Settings() {
    return (`
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
    <div>`)
}
