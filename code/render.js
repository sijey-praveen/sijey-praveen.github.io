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

const data = JSON.parse(_Request("data.json"))

for (let i = 0; i < data.length; i++) {
    const content = document.createElement("div")
    content.className = "content"

    const name = document.createElement("div")
    name.id = "name"
    name.textContent = data[i].name
    content.append(name)

    const code = document.createElement("div")
    code.className = "code"
    code.textContent = data[i].code
    content.append(code)

    document.querySelector("body").appendChild(content)
}
