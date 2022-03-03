const port = 3003

const bodyParser = require("body-parser")
const express = require("express")
const server = express()
const alloCors = require("./cors")

server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(alloCors)

server.listen(port, function(){
    console.log(`backen is runnig on port${port}.`)
})

module.exports = server

