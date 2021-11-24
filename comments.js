function load_comments() {
    $.get("https://shared-comments.sijey.repl.co/",
        function(data) {
            var comments = JSON.parse(data)
            let display = ""
            for (let i = 0; i < comments.content.length;i++) {
                display += `<div class="comments-content"><img src="${comments.content[i].avatar}"><div style="padding:3px;">${comments.content[i].username}</div><div class="text">${comments.content[i].text}</div></div>`
            }
            document.querySelector(".comments").innerHTML = display        
        }
    )
}

function update_comments(comment) {
    $.post("https://shared-comments.sijey.repl.co/", comment,
        function(data) {
            load_comments()
        }
    )
}

document.addEventListener("DOMContentLoaded", 
    function() {
        load_comments()
    }
)

document.getElementById("post-comment").addEventListener("click", 
    function() {
        try {
            var avatar = document.cookie.split(";")[1].split("=")[1]
            var username = document.cookie.split(";")[0].split("=")[1].split("@")[0]
        } catch(err) {
            window.location.replace("https://sijey-praveen.netlify.app/login")
        }
        var comment = {"username" : username, "text" : document.querySelector(".comment-text-feild").value, "avatar" : avatar}
        update_comments(comment)
    }
)
