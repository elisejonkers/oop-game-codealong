const player = new Player()
const obstaclesArr = [] // will store instances of the class Obstacle


// create obstacles every 2 seconds
setInterval(() => {
    const newObstacle = new Obstacle()
    obstaclesArr.push(newObstacle)
}, 2000);

// movies obstacles (every 3030 MS move all obstacles in the array)
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance) => {
        // move
        obstacleInstance.moveDown()

        // //remove obstacle if outside
        if (obstacleInstance.positionY < 0 - obstacleInstance.height) {
            //remove DOM element
            obstacleInstance.obstacleElm.remove()
            //remove from array
            obstaclesArr.shift()
        }

        //detect collision (we want to check this every 30MS, because then the obstacles are moving)
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            //console.log('game over')
            //location.href = "./gameover.html"
        }
    })
}, 30);

// [ ] display player really in the middle
// [ ] avoid player moving to japan/alaska
// [ ] create obstacles in random horizontal positions
// [ ] remove when they go outside
// [ ] count / display points

// let count = 0
// const scoreDiv = document.getElementById("score")
// scoreDiv.innerHTML = `Score: ${count}`

// obstaclesArr.forEach(function (element, i) {
//     if (element[i].positionY <= 0) {
//         count++
//         console.log(count)
//         scoreDiv.innerHTML = `Score: ${count}`
//     }
// })

document.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "ArrowLeft":
            player.moveLeft(); //Whenever the key is pressed, the function is invoked, but we still need to connect it to the green box moving
            break;
        case "ArrowRight":
            player.moveRight();
            break;
    }
});

/* Information about player and obstacles will be stored in JS, 
because we want to know when they're colliding */