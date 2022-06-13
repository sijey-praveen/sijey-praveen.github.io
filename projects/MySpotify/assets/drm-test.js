var config = [
    {
        "initDataTypes": ["cenc"],
        "audioCapabilities": [
            {
                "contentType": "audio/mp4;codecs=\"mp4a.40.2\""
            }
        ],
        "videoCapabilities": [
            {
                "contentType": "video/mp4;codecs=\"avc1.42E01E\""
            }
        ]
    }
]

navigator.requestMediaKeySystemAccess("com.widevine.alpha", config).then((mediaKeySystemAccess) => {console.log("widevine support ok")})
navigator.requestMediaKeySystemAccess("com.microsoft.playready", config).then((mediaKeySystemAccess) => {console.log("playready support ok")})
navigator.requestMediaKeySystemAccess("org.w3.clearkey", config).then((mediaKeySystemAccess) => {console.log("clearkey  support ok")})
navigator.requestMediaKeySystemAccess("com.apple.fps.1_0", config).then((mediaKeySystemAccess) => {console.log("fairplay support ok")})