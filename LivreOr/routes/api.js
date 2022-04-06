let Rabbit = require("../models/rabbit")

let rabbits = [
    new Rabbit(1, "Kevin", "Aime nager", "localhost:8080/assets/res/rabbit1.jpg"),
    new Rabbit(2, "Vanessa", "Aime kevin", "localhost:8080/assets/res/rabbit2.jpg"),
    new Rabbit(3, "Didier", "Est le papa de kevin", "localhost:8080/assets/res/rabbit3.jpg"),
]


exports.randomRabbit = function(request, response) {
    response.json(rabbits[Math.floor(Math.random() * rabbits.length)])
}

exports.allRabbit = function(request, response) {
    response.json(rabbits)
}

exports.getRabbitById = function(request, response) {
    response.json(rabbits.find(rabbit => rabbit.id == request.params.id))
}