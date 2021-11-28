var CODE = new URLSearchParams(window.location.search).get("code")
const CLIENT_ID = "404659966063-65vvtn6is4qcpairvvvm0pltma690hho.apps.googleusercontent.com"
const CLIENT_SECRET = "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"
const REDIRECT_URI = "https://sijey-praveen.netlify.app/the-risky-business-of-charging-your-phone-in-public/"

$(".login-btn").click(
    function() {
        var email = document.getElementById("email").value
        if (email === null) {
            alert("Please enter your Email!")
        } else {
            if (email.includes("@")) {
                try {
                    document.cookie = `email=${email};sameSite=Lax; Secure`
                    document.cookie = "avatar=https://www.pngkey.com/png/full/115-1150152_default-profile-picture-avatar-png-green.png;sameSite=Lax; Secure"
                    window.location.replace(REDIRECT_URI)
                } catch(err) {
                    console.log(err)
                }                        
            } else {
                alert("Enter a valid Email Address!")
            }
        }
    }
)

if (CODE === null) {
} else {
    loginwithGoogle(CODE)
}

$(".login-with-google-btn").click(
    function() {
        window.location.replace(`https://accounts.google.com/o/oauth2/auth?scope=https://www.googleapis.com/auth/userinfo.email&response_type=code&access_type=offline&redirect_uri=${REDIRECT_URI}&client_id=${CLIENT_ID}`)
    }
)

function loginwithGoogle(code) {
    data = {
        "code": code,
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET,
        "redirect_uri": REDIRECT_URI,
        "grant_type": "authorization_code"
    }

    $.post("https://oauth2.googleapis.com/token", data,
        function(access_token) {
            var access_token = JSON.parse(JSON.stringify(access_token)).access_token
            $.get(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`,
                function(user_private) {
                    var user_private = JSON.parse(JSON.stringify(user_private))
                    try {
                        document.cookie = `email=${user_private.email};sameSite=Lax; Secure`
                        document.cookie = `avatar=${user_private.picture};sameSite=Lax; Secure`
                        window.location.replace(REDIRECT_URI)
                    } catch(err) {
                        console.log(err)
                    }
                }
            )
        }
    )
}
