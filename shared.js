const { createServer } = require("http")
const { readFile, writeFile } = require("fs")

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS, POST, GET"
}

createServer(
    function(req, res) {
        res.writeHead(200, headers)   
        if (req.method === "POST") {
            req.on("data", 
                function(data) {
                    var data = new URLSearchParams(data.toString())
                    readFile("shared.json", "utf-8", 
                        function(err, filecontent) {
                            if (err) {
                                res.end(err)
                            } else {
                                var form = {"username" : data.get("username"), "avatar" : data.get("avatar"), "text" : data.get("text")}
                                var content = JSON.parse(filecontent)
                                content.content.push(form)
                                writeFile("shared.json", JSON.stringify(content),
                                    function(err) {
                                        if (err) {
                                            res.end(err)
                                        } else {
                                            res.end(JSON.stringify(content))
                                        }
                                    }
                                )
                            }
                        }
                    )
                }
            )
        } else if (req.method === "GET") {
            readFile("shared.json", "utf-8",
                function(err, data) {
                    if (err) {
                        res.end(err)
                    } else {
                        res.end(data)
                    }
                }
            )    
        }
    }
).listen(7777)
