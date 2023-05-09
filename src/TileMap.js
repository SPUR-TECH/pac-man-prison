export default class TileMap {
    constructor(tileSize) {
        this.tileSize = tileSize;

        this.leaf = new Image();
        this.leaf.src = "../images/canabis-leaf.png";

        this.wall = new Image();
        this.wall.src = "../images/wall.png";

        this.bars = new Image();
        this.bars.src = "../images/bars.png";

        this.shank = new Image();
        this.shank.src = "../images/prison-shank1.png";

        this.pac1 = new Image();
        this.pac1.src = "../images/pacman1.png";

        this.guard1 = new Image();
        this.guard1.src = "../images/guard1.png";
    }

    map = [
        [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 0, 1, 2, 1, 1, 2, 0, 1, 2, 1, 0, 1],
        [1, 0, 1, 3, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 2, 0, 2, 1, 0, 2, 0, 2, 1, 0, 1],
        [2, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 2],
        [1, 0, 2, 0, 0, 0, 1, 2, 0, 1, 2, 0, 1],
        [1, 0, 1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 2, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 0, 2, 0, 5, 1, 0, 1, 0, 1],
        [2, 0, 0, 0, 0, 1, 0, 3, 2, 0, 0, 0, 2],
        [1, 0, 1, 2, 0, 2, 1, 2, 1, 0, 1, 0, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 1],
        [1, 0, 0, 1, 0, 1, 2, 1, 0, 1, 1, 0, 1],
        [2, 0, 1, 2, 0, 0, 0, 2, 1, 2, 0, 0, 2],
        [1, 0, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 2, 1, 1, 2, 1, 0, 1, 2, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1],
        [1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1]
    ];

    draw(ctx) {
        for (let row = 0; row < this.map.length; row++) {
            for (let column = 0; column < this.map[row].length; column++) {
                let tile = this.map[row][column];
                if (tile === 1) {
                    this.#drawWall(ctx, column, row, this.tileSize);
                } else if (tile === 0) {
                    this.#drawLeaf(ctx, column, row, this.tileSize);
                } else if (tile === 2) {
                    this.#drawBars(ctx, column, row, this.tileSize);
                } else if (tile === 3) {
                    this.#drawShank(ctx, column, row, this.tileSize);
                } else if (tile === 4) {
                    this.#drawPac(ctx, column, row, this.tileSize);
                } else if (tile === 5) {
                    this.#drawGuard(ctx, column, row, this.tileSize);
                }
            }
        }
    }

    #drawGuard(ctx, column, row, size) {
        ctx.drawImage(
            this.guard1,
            column * this.tileSize,
            row * this.tileSize,
            size,
            size
        );
    }

    #drawPac(ctx, column, row, size) {
        ctx.drawImage(
            this.pac1,
            column * this.tileSize,
            row * this.tileSize,
            size,
            size
        );
    }

    #drawShank(ctx, column, row, size) {
        ctx.drawImage(
            this.shank,
            column * this.tileSize,
            row * this.tileSize,
            size,
            size
        );
    }

    #drawBars(ctx, column, row, size) {
        ctx.drawImage(
            this.bars,
            column * this.tileSize,
            row * this.tileSize,
            size,
            size
        );
    }

    #drawLeaf(ctx, column, row, size) {
        ctx.drawImage(
            this.leaf,
            column * this.tileSize,
            row * this.tileSize,
            size,
            size
        );
    }

    #drawWall(ctx, column, row, size) {
        ctx.drawImage(
            this.wall,
            column * this.tileSize,
            row * this.tileSize,
            size,
            size
        );
    }

    setCanvasSize(canvas) {
        canvas.width = this.map[0].length * this.tileSize;
        canvas.height = this.map.length * this.tileSize;
    };
}