const hello = function() {
    print("Hello how are you?")
}

exports.bye = function(msg) {
    print(msg)
}


function print(msg) {
    console.log(msg)
}

exports.hello = hello