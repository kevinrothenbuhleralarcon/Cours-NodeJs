let connection = require("../config/db")
let dayJs = require("../config/dayjs")

class Message {

    constructor (row) {
        this.row = row
    }

    get id() {
        return this.row.id
    }

    get content() {
        return this.row.content
    }

    get createdDate() {
        return dayJs(this.row.created_at)
    }

    static create (content, cb) {
        connection.query("INSERT INTO message SET content = ?, created_at = ?", [content, new Date()], (err, result) => {
            if (err) throw err
            cb(result)
        })
    }

    static all(cb) {
        connection.query("SELECT * FROM message", (err, posts) => {
            if (err) throw err
            cb(posts.map(post => {return new Message(post)}))
        })
    }

    static getById(id, cb) {
        connection.query("SELECT * FROM message WHERE id = ? LIMIT 1", [id], (err, post) => {
            if (err) throw err
            cb(new Message(post[0]))
        })
    }
}

module.exports = Message