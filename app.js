
const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")

canvas.width = 64 * 16 //1024
canvas.height = 64 * 9 //576



const backgroundLevel1 = new Sprite({
    position: {
        x: 0,
        y: 0,
    },
    imageSrc: "./img/backgroundLevel1.png",
})

const player = new Player()

const keys = {
    /*w:{
        pressed:false
    }*/
    a:{
        pressed:false
    },
    /*s:{
        pressed:false
    }*/
    d:{
        pressed:false
    }
}

//let bottom = y + 100
function animate() {
    window.requestAnimationFrame(animate)
    /*c.fillStyle = "grey"
    c.fillRect(0, 0, canvas.width, canvas.height)*/

    backgroundLevel1.draw()
    collisionBlocks.forEach(collisionBlock => {
        collisionBlock.draw
    })

    player.velocity.x = 0
    if (keys.d.pressed) player.velocity.x = 4
    else if(keys.a.pressed) player.velocity.x = -4

    player.draw()
    player.update()
}

animate()

