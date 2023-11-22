window.onload = function () {
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");

  const balloonColor = "red";
  const balloonRadius = 20;
  let score = 0;

  canvas.addEventListener("click", popBalloon);

  const balloons = [];

  function createBalloon() {
    const x = Math.random() * (canvas.width - 2 * balloonRadius) + balloonRadius;
    const y = canvas.height;
    return { x, y };
  }

  function popBalloon(event) {
    const mouseX = event.clientX - canvas.getBoundingClientRect().left;
    const mouseY = event.clientY - canvas.getBoundingClientRect().top;

    balloons.forEach((balloon, index) => {
      const dx = mouseX - balloon.x;
      const dy = mouseY - balloon.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < balloonRadius) {
        balloons.splice(index, 1);
        score++;
        updateScore();
      }
    });
  }

  function updateScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = score;
  }

  function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    balloons.forEach((balloon, index) => {
      balloon.y -= 2; // Kecepatan pergerakan balon
      ctx.beginPath();
      ctx.arc(balloon.x, balloon.y, balloonRadius, 0, Math.PI * 2);
      ctx.fillStyle = balloonColor;
      ctx.fill();
      
      // Hapus balon jika di luar layar
      if (balloon.y + balloonRadius < 0) {
        balloons.splice(index, 1);
      }
    });

    if (Math.random() < 0.02) {
      balloons.push(createBalloon());
    }

    requestAnimationFrame(gameLoop);
  }

  updateScore();
  gameLoop();
};
