class Obstacle {
    constructor() {
        this.height = 10
        this.width = 30
        this.positionX = Math.floor(Math.random() * (100 - this.width) + 1)
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