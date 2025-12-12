
window.addEventListener("DOMContentLoaded", () => {
    const nextBtn = document.getElementById("nextLevelBtn");

    // Reproducir sonido de victoria
    const winSound = new Audio("assets/sounds/win.mp3");
    winSound.volume = 0.6;
    winSound.play();

    nextBtn.addEventListener("click", () => {
        let currentLevel = parseInt(localStorage.getItem("currentLevel") || "1");

        // Ir al siguiente nivel (ya fue incrementado en game.js)
        window.location.href = "index.html";
    });
});
