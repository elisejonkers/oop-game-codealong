class Player {
    constructor() {
        // Position: player starts at bottom left corner
        this.positionX = 50; // Exactly the middle --> 50 - (this.width / 2)
        this.positionY = 0;
        // Creating the size of the player
        this.height = 10;
        this.width = 20; /* We are going to store a number, because it's better to calculate with for the collision*/

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

const player = new Player()

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