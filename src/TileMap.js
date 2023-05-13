import Pacman from "./Pacman.js";
import Enemy from "./Enemy.js";
import MovingDirection from "./MovingDirection.js";
export default class TileMap {
    constructor(tileSize) {
        this.tileSize = tileSize;

        this.leaf = new Image();
        this.leaf.src = "images/canabis-leaf.png";

        this.wall = new Image();
        this.wall.src = "images/wall.png";

        this.bars = new Image();
        this.bars.src = "images/bars.png";

        this.shank = new Image();
        this.shank.src = "images/prison-shank1.png";

        this.shank2 = new Image();
        this.shank2.src = "images/prison-shank2.png";

        this.guard1 = new Image();
        this.guard1.src = "images/guard1.png";

        this.pill = new Image();
        this.pill.src = "images/pill.png";

        this.fags = new Image();
        this.fags.src = "images/fags.png";

        this.phone = new Image();
        this.phone.src = "images/phone.png";

        this.prisonShank = this.shank2;
        this.prisonShankAnmationTimerDefault = 30;
        this.prisonShankAnmationTimer = this.prisonShankAnmationTimerDefault;
    }

    // 0 = Canabis leaf
    // 1 = Walls
    // 2 = Bars 
    // 3 = Shank
    // 4 = Pacman
    // 5 = guard
    // 6 = pill
    // fags = 7
    // phone = 8
    // cash = 9
    // blank = 11

    map = [
        [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1],
        [1, 4, 0, 0, 8, 0, 7, 0, 6, 0, 3, 1],
        [1, 0, 1, 2, 1, 2, 0, 1, 2, 1, 0, 1],
        [1, 0, 1, 3, 6, 0, 0, 0, 1, 8, 0, 1],
        [1, 7, 2, 0, 1, 0, 2, 0, 2, 1, 6, 1],
        [2, 0, 1, 8, 0, 0, 1, 7, 0, 1, 0, 2],
        [1, 0, 2, 7, 0, 1, 2, 0, 1, 2, 0, 1],
        [1, 7, 1, 2, 6, 0, 0, 6, 0, 0, 6, 1],
        [1, 6, 0, 8, 0, 0, 2, 1, 0, 1, 0, 1],
        [1, 0, 1, 1, 2, 5, 5, 1, 0, 1, 0, 1],
        [2, 0, 8, 0, 1, 5, 5, 2, 7, 0, 8, 2],
        [1, 7, 1, 2, 2, 1, 2, 1, 0, 1, 7, 1],
        [1, 8, 0, 6, 0, 7, 0, 0, 6, 2, 0, 1],
        [1, 0, 2, 1, 1, 2, 1, 8, 1, 1, 0, 1],
        [1, 6, 0, 0, 1, 0, 6, 0, 0, 0, 6, 1],
        [1, 0, 2, 1, 2, 1, 0, 1, 2, 1, 0, 1],
        [1, 0, 6, 0, 7, 0, 0, 8, 0, 6, 3, 1],
        [1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1]
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
                    this.#drawShank2(ctx, column, row, this.tileSize);
                } else if (tile === 6) {
                    this.#drawPill(ctx, column, row, this.tileSize);
                } else if (tile === 7) {
                    this.#drawFags(ctx, column, row, this.tileSize);
                } else if (tile === 8) {
                    this.#drawPhone(ctx, column, row, this.tileSize);
                } else if (tile === 11) {
                    this.#drawBlank(ctx, column, row, this.tileSize);
                } // else if (tile === 9) {
                //  this.#drawCash(ctx, column, row, this.tileSize);
                // } 
            }
        }
    }

    #drawShank2(ctx, column, row, size) {
        this.prisonShankAnmationTimer--;
        if (this.prisonShankAnmationTimer === 0) {
            this.prisonShankAnmationTimer = this.prisonShankAnmationTimerDefault;
            if (this.prisonShank == this.shank2) {
                this.prisonShank = this.shank;
            } else {
                this.prisonShank = this.shank2;
            }
        }
        ctx.drawImage(this.prisonShank, column * size, row * size, size, size);
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

    #drawPill(ctx, column, row, size) {
        ctx.drawImage(
            this.pill,
            column * this.tileSize,
            row * this.tileSize,
            size,
            size
        );
    }

    #drawFags(ctx, column, row, size) {
        ctx.drawImage(
            this.fags,
            column * this.tileSize,
            row * this.tileSize,
            size,
            size
        );
    }

    #drawPhone(ctx, column, row, size) {
        ctx.drawImage(
            this.phone,
            column * this.tileSize,
            row * this.tileSize,
            size,
            size
        );
    }

    #drawBlank(ctx, column, row, size) {
        ctx.fillStyle = "black";
        ctx.fillRect(column * this.tileSize, row * this.tileSize, size, size);
    }

    // #drawCash(ctx, column, row, size) {
    //     ctx.drawImage(
    //         this.cash,
    //         column * this.tileSize,
    //         row * this.tileSize,
    //         size,
    //         size
    //     );
    // }

    getPacman(velocity) {
        for (let row = 0; row < this.map.length; row++) {
            for (let column = 0; column < this.map[row].length; column++) {
                let tile = this.map[row][column];
                if (tile === 4) {
                    this.map[row][column] = 0;
                    return new Pacman(
                        column * this.tileSize,
                        row * this.tileSize,
                        this.tileSize,
                        velocity,
                        this
                    );
                }
            }
        }
    }

    getEnemies(velocity) {
        const enemies = [];

        for (let row = 0; row < this.map.length; row++) {
            for (let column = 0; column < this.map[row].length; column++) {
                const tile = this.map[row][column];
                if (tile == 5) {
                    this.map[row][column] = 7;
                    enemies.push(
                        new Enemy(
                            column * this.tileSize,
                            row * this.tileSize,
                            this.tileSize,
                            velocity,
                            this
                        )
                    );
                }
            }
        }
        return enemies;
    }

    setCanvasSize(canvas) {
        canvas.width = this.map[0].length * this.tileSize;
        canvas.height = this.map.length * this.tileSize;
    };

    didCollideWithEnvironment(x, y, direction) {
        if (direction == null) {
            return;
        }
        if (
            Number.isInteger(x / this.tileSize) &&
            Number.isInteger(y / this.tileSize)
        ) {
            let column = 0;
            let row = 0;
            let nextColumn = 0;
            let nextRow = 0;

            switch (direction) {
                case MovingDirection.right:
                    nextColumn = x + this.tileSize;
                    column = nextColumn / this.tileSize;
                    row = y / this.tileSize;
                    break;
                case MovingDirection.left:
                    nextColumn = x - this.tileSize;
                    column = nextColumn / this.tileSize;
                    row = y / this.tileSize;
                    break;
                case MovingDirection.up:
                    nextRow = y - this.tileSize;
                    row = nextRow / this.tileSize;
                    column = x / this.tileSize;
                    break;
                case MovingDirection.down:
                    nextRow = y + this.tileSize;
                    row = nextRow / this.tileSize;
                    column = x / this.tileSize;
                    break;
            }
            const tile = this.map[row][column];
            if (tile === 1) {
                return true;
            }
            if (tile === 2) {
                return true;
            }
        }
        return false;
    }

    eatDot(x, y) {
        const row = y / this.tileSize;
        const column = x / this.tileSize;
        if (Number.isInteger(row) && Number.isInteger(column)) {
            if (this.map[row][column] === 0) {
                this.map[row][column] = 11;
                return true;
            }
            if (this.map[row][column] === 6) {
                this.map[row][column] = 11;
                return true;
            }
            if (this.map[row][column] === 7) {
                this.map[row][column] = 11;
                return true;
            }
            if (this.map[row][column] === 8) {
                this.map[row][column] = 11;
                return true;
            }
        }
        return false;
    }
    eatPowerDot(x, y) {
        const row = y / this.tileSize;
        const column = x / this.tileSize;
        if (Number.isInteger(row) && Number.isInteger(column)) {
            const tile = this.map[row][column];
            if (tile === 3) {
                this.map[row][column] = 11;
                return true;
            }
        }
        return false;
    }
}