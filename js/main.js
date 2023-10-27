class Player {
    constructor() {
        // Position: player starts at bottom left corner
        this.height = 10;
        this.width = 20; /* We are going to store a number, because it's better to calculate with for the collision*/
        
        this.positionX = 50 - (this.width / 2)
        this.positionY = 0;
        // Creating the size of the player
        

        this.playerElm = document.getElementById("player")

        this.playerElm.style.width = this.width + "vw" // viewport: responsive to the size of the screen
        this.playerElm.style.height = this.height + "vh"

        this.playerElm.style.bottom = this.positionY + "vh"
        this.playerElm.style.left = this.positionX + "vw"
    }
    moveLeft() {
        this.positionX--;
        this.playerElm.style.left = this.positionX + 'vw'
    }
    moveRight() {
        this.positionX++;
        this.playerElm.style.left = this.positionX + 'vw' // left is kept here because of the positioning of the box
    }
}

class Obstacle {
    constructor() {
        this.height = 10
        this.width = 30
        
        this.positionX = 35 // middle --> 50 - (this.width /2)
        this.positionY = 100
        
        this.obstacleElm = null //Already put it here, so we can keep track of information that relates to the class

        this.createDomElement() // Every time there's a new Obstacle, it's going to invoke the createDomElement method (which creates a new obstacle)
    }
    createDomElement() {
        //Everytime a new Obstacle is invoked, it needs to add a new div (element --> dynamic)
        // step1: create the element
        this.obstacleElm = document.createElement("div");

        // step2: add content or modify (ex. innerHTML...)
        this.obstacleElm.classList.add("obstacle")
        this.obstacleElm.style.width = this.width + "vw"
        this.obstacleElm.style.height = this.height + "vh"
        this.obstacleElm.style.left = this.positionX + "vw"
        this.obstacleElm.style.bottom = this.positionY + "vh"
        // step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board");
        parentElm.appendChild(this.obstacleElm);
    }
    moveDown() {
        this.positionY--
        this.obstacleElm.style.bottom = this.positionY + "vh"
    }
}

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

        //detect collision (we want to check this every 30MS, because then the obstacles are moving)
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            console.log('game over')
            location.href = "./gameover.html"
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