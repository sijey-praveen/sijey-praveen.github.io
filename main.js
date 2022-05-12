function _Request(url) {
    let response = ""
    let xhr = new XMLHttpRequest()
    xhr.open("GET", url, false)
    xhr.addEventListener("load", ()=>{
        response += xhr.responseText
    })
    xhr.send()
    return response
}

document.querySelector(".__main__ img").src = _Request("/bin/profile.b64")