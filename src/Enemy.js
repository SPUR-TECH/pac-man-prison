import MovingDirection from "./MovingDirection.js";

export default class Enemy {
    constructor(x, y, tileSize, velocity, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;

        this.#loadImages();

        // this.movingDirection = Math.floor(
        //     Math.random() * Object.keys(MovingDirection).length
        // );

        // this.directionTimerDefault = this.#random(10, 25);
        // this.directionTimer = this.directionTimerDefault;

        // this.scaredAboutToExpireTimerDefault = 10;
        // this.scaredAboutToExpireTimer = this.scaredAboutToExpireTimerDefault;
    }

    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.tileSize, this.tileSize)
    }

    #loadImages() {
        this.normalGuard = new Image();
        this.normalGuard.src = "images/guard1.png";

        this.scaredGuard = new Image();
        this.scaredGuard.src = "images/guard2.png";

        this.scaredGuard2 = new Image();
        this.scaredGuard2.src = "images/guard3.png";

        this.image = this.normalGuard;
    }
}