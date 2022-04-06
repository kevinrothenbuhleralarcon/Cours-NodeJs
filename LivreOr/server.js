let express = require("express")
let app = express()
let session = require("express-session")
let site = require("./routes/site")
let api = require("./routes/api")


// Template motor
// set que l'on veut afficher des pages ejs
app.set("view engine", "ejs")

// Middleware
// Permet de définir dans quel dossier sert à distribuer les dossiers statics
// On peut ajouter une path avant pour définir que tous les dossier statics sont dans le chemin assets
app.use("/assets", express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: "mySecret", //Sert à chiffer le cookie
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } //False car on ne traite pas avec de l'https
}))

//Crée notre propre middleware
app.use(require("./middlewares/flash"))

// Routes

// Site
// Get
app.get("/", site.index)
app.get("/comment/:id", site.comment)
app.get("/test", site.test)

// Post
app.post("/", site.submitPost)

// API
// Get
app.get("/api/randomrabbit", api.randomRabbit)
app.get("/api", api.allRabbit)
app.get("/api/rabbit/:id", api.getRabbitById)


app.listen(8080)