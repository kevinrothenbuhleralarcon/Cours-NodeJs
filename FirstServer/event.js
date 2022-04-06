const EventEmitter = require("events")

let myLIstener = new EventEmitter()

myLIstener.on("saute", () => {
    console.log("j'ai sauté")
})

myLIstener.emit("saute")