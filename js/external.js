const $ = {
    get : (url, body = null, response) => {
        var xhr = new XMLHttpRequest()
        xhr.open("GET", url)
        xhr.onload = () => {
            response(xhr.responseText)
        }
        xhr.send(body)
    },
    randint : (range, callback) => {
        callback(Math.floor(Math.random() * range))
    },
    choice : (array, callback) => {
        callback(array[Math.floor(Math.random() * array.length)])
    },
    SpeechRecognition : (callback) => {
        var data = ""
        var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
        var recognition = new SpeechRecognition()
        recognition.continuous = true
        recognition.onresult = function(event) {
            var current = event.resultIndex
            var transcript = event.results[current][0].transcript
            var mobileRepeatBug = (current == 1 && transcript == event.results[0][0].transcript)
            if(!mobileRepeatBug) {
                data += transcript
                callback(data)
            }
        }
        recognition.start()
    }
}
