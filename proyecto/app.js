const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 1000;
canvas.height = 1000;

const rows = 10;
const cols = 10;
const cellSize = canvas.width / cols;

// Crear instancia de Matrix y cargar el mapa
const mapMatrix = new Matrix(rows, cols);
// Obtener nivel y personaje elegidos
const selectedLevel = parseInt(localStorage.getItem("currentLevel") || 1);
const selectedCharacter = parseInt(localStorage.getItem("selectedCharacter") || 9);

// Clonar el nivel para no modificar el original
const levelData = JSON.parse(JSON.stringify(LEVELS[selectedLevel]));

// Reemplazar el número del jugador (9) por el personaje elegido
for (let r = 0; r < levelData.length; r++) {
  for (let c = 0; c < levelData[r].length; c++) {
    if (levelData[r][c] === 9) {
      levelData[r][c] = selectedCharacter;
    }
  }
}

// Cargar el mapa modificado
mapMatrix.fillFromArray(levelData);



const images = {};
let loadedCount = 0;
const totalImages = 11;

// Cargar imágenes
for (let i = 0; i < totalImages; i++) {
  const img = new Image();
  img.src = `assets/${i}.png`;
  img.onload = () => {
    loadedCount++;
    if (loadedCount === totalImages) {
      // Crear el juego cuando todas las imágenes carguen
      const game = new Game("gameCanvas", mapMatrix, images);
      game.draw();
    }
  };
  images[i] = img;
}
let timeLeft = 100;     // Tiempo inicial
let score = 1000;           // Puntos
let timerActive = false; // Empieza solo cuando el jugador se mueve
let timerInterval = null;


window.addEventListener("load", () => {
  const audio = document.getElementById("bgm");

  function initAudio() {
    console.log("sound")
    audio.play();
    document.removeEventListener("click", initAudio);
  }

  document.addEventListener("click", initAudio);
});
function showGameOver() {
  const screen = document.getElementById("gameOverScreen");
  screen.style.display = "flex";
  const gameOverSound = new Audio("assets/sounds/gameover.mp3");
  gameOverSound.volume = 0.7;

  // --- Reproducir música de Game Over ---
  gameOverSound.currentTime = 0;
  gameOverSound.play();
}

function goToMenu() {
  window.location.href = "sokoban.html"; 
}

function restartLevel() {
  location.reload();
}
