import TileMap from "./TileMap.js";

let tileSize = 32;
let velocity = 2;

let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let tileMap = new TileMap(tileSize);
let pacman = tileMap.getPacman(velocity);
let enemies = tileMap.getEnemies(velocity);

let button = document.getElementById("start");

let gameOver = false;
let gameWin = false;
let gameOverSound = new Audio("sounds/gameOver.wav");
let gameWinSound = new Audio("sounds/gameWin.wav");
let startSound = new Audio("sounds/start.wav");

let started = false;
let gameLoopInterval;

function init() {
	tileSize = 32;
	velocity = 2;
	canvas = document.getElementById("gameCanvas");
	ctx = canvas.getContext("2d");
	tileMap = new TileMap(tileSize);
	pacman = tileMap.getPacman(velocity);
	enemies = tileMap.getEnemies(velocity);
	button = document.getElementById("start");
	gameOver = false;
	gameWin = false;
	gameOverSound = new Audio("sounds/gameOver.wav");
	gameWinSound = new Audio("sounds/gameWin.wav");
	startSound = new Audio("sounds/start.wav");
}

function gameLoop() {
	if (started) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		tileMap.draw(ctx);
		pacman.draw(ctx, pause(), enemies);
		enemies.forEach((enemy) => enemy.draw(ctx, pause(), pacman));
		drawGameEnd();
		checkGameOver();
		checkGameWin();
	}
}

document.querySelector("#start-button").addEventListener("click", () => {
	startSound.play();
	document.querySelector("#start-screen").style.display = "none";
	document.querySelector("#gameCanvas").style.display = "flex";
	init();
	started = true;
	clearInterval(gameLoopInterval);
});

document.querySelector("#win-restart-button").addEventListener("click", () => {
	document.querySelector("#win-screen").style.display = "none";
	document.querySelector("#start-screen").style.display = "flex";
	init();
});

document
	.querySelector("#gameover-restart-button")
	.addEventListener("click", () => {
		document.querySelector("#gameover-screen").style.display = "none";
		document.querySelector("#win-screen").style.display = "none";
		document.querySelector("#start-screen").style.display = "flex";
		init();
	});

function checkGameWin() {
	if (!gameWin) {
		gameWin = tileMap.didWin();
		if (gameWin) {
			document.querySelector("#gameCanvas").style.display = "none";
			document.querySelector("#win-screen").style.display = "flex";
			gameWinSound.play();
		}
	}
}

function checkGameOver() {
	if (!gameOver) {
		gameOver = isGameOver();
		if (gameOver) {
			document.querySelector("#gameover-screen").style.display = "flex";
			document.querySelector("#gameCanvas").style.display = "none";
			gameOverSound.play();
		}
	}
}

function isGameOver() {
	return enemies.some(
		(enemy) => !pacman.powerDotActive && enemy.collideWith(pacman),
	);
}

function pause() {
	return !pacman.madeFirstMove || !started || gameOver || gameWin;
}

function drawGameEnd() {
	if (gameOver || gameWin) {
		let text = '    " You Win ! "';
		if (gameOver) {
			text = ' " Game Over ! "';
		}

		ctx.fillStyle = "black";
		ctx.fillRect(0, canvas.height / 2.5, canvas.width, 80);

		ctx.font = "50px comic sans MS";
		let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
		gradient.addColorStop("0.1", "yellow");
		gradient.addColorStop("0.4", "rgb(2, 0, 143)");
		gradient.addColorStop("0.8", "rgb(0, 255, 255)");
		gradient.addColorStop("1.0", "rgb(0, 255, 255)");

		ctx.fillStyle = gradient;
		ctx.fillText(text, 10, canvas.height / 2);
	}
}

tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75);
