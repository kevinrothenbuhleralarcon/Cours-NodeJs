const http = require("http")
const fs = require("fs")

const server = http.createServer()

server.on("request", (request, response) => {

    //Ici on va faire le même type de requête mais on va retourner une page html avec le nom de la personne
    response.writeHead(200, {
        "Content-type": "text/html; charset=utf-8"
    })

    // récupère les paramétres de l'url
    let query = new URL(request.url, `http://${request.headers.host}`).searchParams

    let name = query.get("name") === null ? "anonyme" : query.get("name")
    
    fs.readFile("index.html", "utf-8", (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("Ce fichier n'existe pas")
        } else {
            response.writeHead(200, {
                "Content-type": "text/html; charset=utf-8"
            })
            data = data.replace("{{name}}", name)
    
            response.end(data)
        }        
    }) 


    /*
    // Ici on va faire une requête du genre: localhost:8080/?name=kevin et on va afficher "Bonjour kevin"
    // on traite également le cas ou l'utilisateur ne tape que localhost:8080 et dans ce cas on affiche "Bonjour anonyme ""
    response.writeHead(200, {
        "Content-type": "text/html; charset=utf-8"
    })

    let query = new URL(request.url, `http://${request.headers.host}`).searchParams
    console.log(query)

    if (query.get("name") != null) {
        response.write(`Bonjour ${query.get("name")}`)
    } else {
        response.write("Bonjour anonyme")
    }

    response.end
    */
    
    /*
    // Ici on va lire le fichier index.html et le retourner
    fs.readFile("index.html", (err, data) => {
        if (err) {
            response.writeHead(404)
            response.end("Ce fichier n'existe pas")
        } else {
            response.writeHead(200, {
                "Content-type": "text/html; charset=utf-8"
            })
    
            response.end(data)
        }        
    }) 
    */
})

server.listen("8080")
