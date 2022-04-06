const path = require("path")

exports.index = function(request, response) {
    let Message = require("../models/message")
    Message.all(posts => {
        response.render("pages/index", {posts: posts})
    })
}

exports.comment = function(request, response) {
    let Message = require("../models/message")
    let id = request.params.id
    Message.getById(id, post => {
        response.render("pages/message", {post: post})
    })
}

exports.test = function(request, response) {
    response.sendFile(path.join(__dirname, "../public/test.html"));
}

exports.submitPost = function(request, response) {
    if (request.body.message === undefined || request.body.message === '') {
        request.flash("error", "Vous n'avez pas entré de message :(")
        response.redirect("/")
    } else {
        let Message = require("../models/message")
        Message.create(request.body.message, () => {
            request.flash("success", "Merci !")
            response.redirect("/")
        })
    }
    
}
