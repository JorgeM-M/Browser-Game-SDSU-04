window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case " ": //space key
            if (player.velocity.y === 0) player.velocity.y = -20
            break
        case "w":
            break
        case "a":
            //move left
            keys.a.pressed = true
            break
        case "s":
            break
        case "d":
            //move right
            keys.d.pressed = true
            break
    }
})

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "w":
            break
        case "a":
            //move left
            keys.a.pressed = false
            break
        case "s":
            break
        case "d":
            //move right
            keys.d.pressed = false
            break
    }
})