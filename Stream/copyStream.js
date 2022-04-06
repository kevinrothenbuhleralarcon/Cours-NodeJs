const fs = require("fs")

let file = "demo.mp4"

fs.stat(file, (err, stats) => {
    if (err) throw err
    console.log("La taille du fichier est de: " + stats.size + " ko")
    let size = stats.size
    let progress = 0

    let read = fs.createReadStream(file)
    let write = fs.createWriteStream("copy.mp4")

    read.on("data", chunk => {
        progress += chunk.length
        console.log(`j'ai lu ${progress} / ${size} ko`)
    })
    
    read.pipe(write)

    write.on("finish", () => {
        console.log("Le fichier a été copié")
    })
})