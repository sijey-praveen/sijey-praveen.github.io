const config = [
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

async function __init__() {

    let isSupported = false
    let supportedKeySystems = []

    const keys = [
        "com.widevine.alpha",
        "com.microsoft.playready",
        "com.youtube.playready",
        "com.adobe.primetime",
        "com.adobe.access",
        "com.apple.fairplay",
        "com.apple.fps.1_0",
        "com.apple.fps",
        "com.apple.fps_2_0",
        "webkit-org.w3.clearkey",
        "org.w3.clearkey"
    ]
    
    let sss = await window.navigator.requestMediaKeySystemAccess(keys, config)
    let key = await sss.keySystem
    console.log(key)

    return supportedKeySystems

}

console.log(__init__())

if (window.navigator.requestMediaKeySystemAccess) {
    document.querySelector(".support").classList.add("yes")
    document.querySelector(".support").textContent = "This Device is Supported!"
}
else {
    document.querySelector(".support").classList.add("no")
    document.querySelector(".support").textContent = "This Device isn't Supported!"
}