const http = require("http")
const EventEmitter = require("events")

const App = {
    start: function(port) {
        const emitter = new EventEmitter()
        const server = http.createServer((request, response) => {
            response.writeHead(200, {
                "Content-type": "text/html; charset=utf-8"
            })

            if (request.url === "/") {
                emitter.emit("root", response)
            }
            response.end
        }).listen(port)

        return emitter
    }
}

module.exports = App