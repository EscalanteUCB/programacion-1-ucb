class Game {
  startCellCleared = false;

  constructor(canvasId, mapMatrix, images) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext("2d");

    this.rows = mapMatrix.rows || 10;
    this.cols = mapMatrix.cols || 10;
    this.cellSize = this.canvas.width / this.cols;

    this.mapMatrix = mapMatrix;
    this.images = images;

    this.player = this.initPlayer();
    this.initControls();

  }
startTimer() {
  if (timerActive) return;

  timerActive = true;

  timerInterval = setInterval(() => {
    timeLeft--;

    if (timeLeft <= 0) {
      timeLeft = 0;
      clearInterval(timerInterval);
      showGameOver();
    }

    this.draw(); // Redibuja con HUD actualizado
  }, 1000);
}



  initPlayer() {
    const selectedCharacter = parseInt(localStorage.getItem("selectedCharacter") || 9);

    const validPlayers = [8, 9, 10];

    for (let r = 0; r < this.rows; r++) {
     for (let c = 0; c < this.cols; c++) {
        if (validPlayers.includes(this.mapMatrix.getValue(r, c))) {
        return new Player(r, c, this.mapMatrix.getValue(r, c));
      }
    }
  }

  return new Player(0, 0, selectedCharacter);
}




  initControls() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.handleMove(-1, 0);//Mover UP
          new Audio("assets/sounds/move.mp3").play();

         


          break;
        case "ArrowDown":
          this.handleMove(1, 0);
          new Audio("assets/sounds/move.mp3").play();
          break;
        case "ArrowLeft":
          this.handleMove(0, -1);
          new Audio("assets/sounds/move.mp3").play();


          break;
        case "ArrowRight":
          this.handleMove(0, 1);
          new Audio("assets/sounds/move.mp3").play();
          break;
      case "1":

      
          break;
      }
    });
  }

handleMove(dr, dc) {
  this.startTimer(); // ← empezar tiempo cuando se mueve

  const beforeRow = this.player.row;
  const beforeCol = this.player.col;

  this.player.move(dr, dc, this.rows, this.cols, this.mapMatrix);

  const moved = this.player.row !== beforeRow || this.player.col !== beforeCol;

  if (moved) {
    score -= 10; // ← sumar puntos

    if (!this.startCellCleared) {
      this.mapMatrix.setValue(beforeRow, beforeCol, 1);
      this.startCellCleared = true;
    }
  }

  this.draw();
  if (this.checkWin()) {
    clearInterval(timerInterval);

    const playerName = localStorage.getItem("playerName") || "Jugador";
    saveScore(playerName, score);

    // SUBIR DE NIVEL
    let currentLevel = parseInt(localStorage.getItem("currentLevel") || "1");
    currentLevel++;    // ← SUBIR EL NIVEL AQUÍ
    localStorage.setItem("currentLevel", currentLevel);

    window.location.href = "win.html";
}


}



  draw() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        const value = this.mapMatrix.getValue(r, c);
        const img = this.images[value];

        if (img) {
          this.ctx.drawImage(
            img,
            c * this.cellSize,
            r * this.cellSize,
            this.cellSize,
            this.cellSize
          );
        }

        if (r === this.player.row && c === this.player.col) {
          const playerImg = this.images[this.player.value];
          if (playerImg) {
            this.ctx.drawImage(
              playerImg,
              c * this.cellSize,
              r * this.cellSize,
              this.cellSize,
              this.cellSize
            );
          }
        }
      }
    }

    drawHUD(this.ctx, this.canvas);
  }
  checkWin() {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (this.mapMatrix.getValue(r, c) === 3) {
          return false; // aún quedan objetivos
        }
      }
    }
    return true; 
    
  }
}
function drawHUD(ctx, canvas) {
  ctx.fillStyle = "rgba(0,0,0,0.6)";
  ctx.fillRect(0, 0, canvas.width, 40);

  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Tiempo: " + timeLeft, 20, 25);

  ctx.fillText("Score: " + score, 200, 25);
}
function saveScore(name, score) {
  let scores = JSON.parse(localStorage.getItem("scores") || "[]");

  scores.push({ name, score });

  // Ordenar de mayor a menor
  scores.sort((a, b) => b.score - a.score);

  // Guardar solo los mejores 10
  scores = scores.slice(0, 10);

  localStorage.setItem("scores", JSON.stringify(scores));
  localStorage.setItem("lastScore", score);

}
 
