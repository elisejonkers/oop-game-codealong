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