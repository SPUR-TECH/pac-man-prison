import MovingDirection from "./MovingDirection.js";
export default class Pacman {
    constructor(x, y, tileSize, velocity, tileMap) {
        this.x = x;
        this.y = y;
        this.tileSize = tileSize;
        this.velocity = velocity;
        this.tileMap = tileMap;

        this.currentMovingDirection = null;
        this.requestedMovingDirection = null;

        this.#loadPacmanImages();
    }

    draw(ctx, column, row, size) {
        ctx.drawImage(
            this.pacmanImages[this.pacmanImageIndex], this.x, this.y, this.tileSize, this.tileSize
        );
    }

    #loadPacmanImages() {
        const pacmanImage1 = new Image();
        pacmanImage1.src = "images/pacman1.png";

        const pacmanImage2 = new Image();
        pacmanImage2.src = "images/pacman2.png";

        const pacmanImage3 = new Image();
        pacmanImage3.src = "images/pacman3.png";

        const pacmanImage4 = new Image();
        pacmanImage4.src = "images/pacman2.png";

        this.pacmanImages = [
            pacmanImage1,
            pacmanImage2,
            pacmanImage3,
            pacmanImage4
        ];

        this.pacmanImageIndex = 0;
    }
}