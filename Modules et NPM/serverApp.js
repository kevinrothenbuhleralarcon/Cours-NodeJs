const map = require("lodash/map") //permet de n'inclure qu'une seule fonctionnalit√©

console.log(map([1, 2, 3], n => { return n * 3 }))

const app = require("./app").start(8080)
app.on("root", response => {
    response.write("Je suis √† la racine")
})