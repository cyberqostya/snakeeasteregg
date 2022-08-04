(() => {
  let counter = 0;
  document.body.addEventListener("click", () => {
    counter++;
    if (counter === 25) startGame();
  });

  function startGame() {
    const popupStyles = `position:fixed;top:0;left:0;background-color:rgba(27, 156, 59, 0.5);display:flex;align-items:center;justify-content:center;opacity:0;transition:all 1s;width:100vw;height:100vh;z-index:10000;flex-direction:column;`;
    const canvasStyles = `display:block;border-radius:5px;`;
    const headerStyles = `padding-top:1vmin;padding-bottom:1vmin;display:flex;justify-content:space-between;`;
    const scoreStyles = `padding:10px 15px;min-width:160px;height:50px;background:#98EE0C;border-radius:5px;display:flex;justify-content:center;align-items:center;`;
    const scoreCountStyles = `font-size:30px;color:#0c6d45;font-weight:bold;`;
    const canvasWrapperStyles = `background-color:#15a877;border-radius:5px;border:10px solid #0c6d45;`;
    const mobileControlsStyles = `display:grid;grid-template-columns:repeat(3,1fr);margin-top:15px;`;
    const mobileControlStylesCommon = `padding:20px 27px;border:2px solid #0c6d45; border-radius:5px;background:#fff center no-repeat;`;
    const mobileControlStylesUp = `background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxNiAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0wLjkyODYzNSA2LjY1Njg1TDcuMjkyNiAwLjI5Mjg5MkM3LjY4MzEyIC0wLjA5NzYzMTUgOC4zMTYyOSAtMC4wOTc2MzE1IDguNzA2ODEgMC4yOTI4OTJMMTUuMDcwOCA2LjY1Njg1QzE1LjQ2MTMgNy4wNDczOCAxNS40NjEzIDcuNjgwNTQgMTUuMDcwOCA4LjA3MTA3QzE0LjY4MDIgOC40NjE1OSAxNC4wNDcxIDguNDYxNTkgMTMuNjU2NiA4LjA3MTA3TDguOTk5NyAzLjQxNDIxTDguOTk5NyAyMUg2Ljk5OTdMNi45OTk3IDMuNDE0MjFMMi4zNDI4NSA4LjA3MTA3QzEuOTUyMzIgOC40NjE1OSAxLjMxOTE2IDguNDYxNTkgMC45Mjg2MzUgOC4wNzEwN0MwLjUzODExMSA3LjY4MDU0IDAuNTM4MTExIDcuMDQ3MzggMC45Mjg2MzUgNi42NTY4NVoiIGZpbGw9IiMwQzZENDUiLz4KPC9zdmc+Cg==)`;
    const mobileControlStylesLeft = `background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMiAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03LjE1Njg1IDE0LjU3MDlMMC43OTI4OTIgOC4yMDY5MkMwLjQwMjM2OSA3LjgxNjM5IDAuNDAyMzY5IDcuMTgzMjMgMC43OTI4OTIgNi43OTI3TDcuMTU2ODUgMC40Mjg3NDFDNy41NDczOCAwLjAzODIxNjEgOC4xODA1NCAwLjAzODIxNjEgOC41NzEwNyAwLjQyODc0MUM4Ljk2MTU5IDAuODE5MjY1IDguOTYxNTkgMS40NTI0MyA4LjU3MTA3IDEuODQyOTVMMy45MTQyMSA2LjQ5OTgxTDIxLjUgNi40OTk4MVY4LjQ5OTgxTDMuOTE0MjEgOC40OTk4MUw4LjU3MTA3IDEzLjE1NjdDOC45NjE1OSAxMy41NDcyIDguOTYxNTkgMTQuMTgwNCA4LjU3MTA3IDE0LjU3MDlDOC4xODA1NCAxNC45NjE0IDcuNTQ3MzggMTQuOTYxNCA3LjE1Njg1IDE0LjU3MDlaIiBmaWxsPSIjMEM2RDQ1Ii8+Cjwvc3ZnPgo=)`;
    const mobileControlStylesRight = `background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMTUiIHZpZXdCb3g9IjAgMCAyMiAxNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNC44NDMxIDAuNDI5MTI0TDIxLjIwNzEgNi43OTMwOEMyMS41OTc2IDcuMTgzNjEgMjEuNTk3NiA3LjgxNjc3IDIxLjIwNzEgOC4yMDczTDE0Ljg0MzEgMTQuNTcxM0MxNC40NTI2IDE0Ljk2MTggMTMuODE5NSAxNC45NjE4IDEzLjQyODkgMTQuNTcxM0MxMy4wMzg0IDE0LjE4MDcgMTMuMDM4NCAxMy41NDc2IDEzLjQyODkgMTMuMTU3TDE4LjA4NTggOC41MDAxOUgwLjVWNi41MDAxOUgxOC4wODU4TDEzLjQyODkgMS44NDMzNEMxMy4wMzg0IDEuNDUyODEgMTMuMDM4NCAwLjgxOTY0OCAxMy40Mjg5IDAuNDI5MTI0QzEzLjgxOTUgMC4wMzg1OTk0IDE0LjQ1MjYgMC4wMzg1OTk0IDE0Ljg0MzEgMC40MjkxMjRaIiBmaWxsPSIjMEM2RDQ1Ii8+Cjwvc3ZnPgo=);`;
    const mobileControlStylesDown = `background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMjEiIHZpZXdCb3g9IjAgMCAxNiAyMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS4wNzE0IDE0LjM0MzFMOC43MDc0IDIwLjcwNzFDOC4zMTY4OCAyMS4wOTc2IDcuNjgzNzEgMjEuMDk3NiA3LjI5MzE5IDIwLjcwNzFMMC45MjkyMjkgMTQuMzQzMUMwLjUzODcwNCAxMy45NTI2IDAuNTM4NzA0IDEzLjMxOTUgMC45MjkyMjkgMTIuOTI4OUMxLjMxOTc1IDEyLjUzODQgMS45NTI5MiAxMi41Mzg0IDIuMzQzNDQgMTIuOTI4OUw3LjAwMDMgMTcuNTg1OEw3LjAwMDMgMEw5LjAwMDMgMFYxNy41ODU4TDEzLjY1NzIgMTIuOTI4OUMxNC4wNDc3IDEyLjUzODQgMTQuNjgwOCAxMi41Mzg0IDE1LjA3MTQgMTIuOTI4OUMxNS40NjE5IDEzLjMxOTUgMTUuNDYxOSAxMy45NTI2IDE1LjA3MTQgMTQuMzQzMVoiIGZpbGw9IiMwQzZENDUiLz4KPC9zdmc+Cg==)`;
    const popup = `
      <div class="snakegame" style="${popupStyles}">
        <div class="game-header" style="${headerStyles}">
          <div class="game-score" style="${scoreStyles}">
            <span class="score-count" style="${scoreCountStyles}"></span>
          </div>
        </div>
        <div class="canvas-wrapper" style="${canvasWrapperStyles}">
          <canvas id="game-canvas" style="${canvasStyles}" width="272" height="272"></canvas>
        </div>
        <div class="mobile-controls" style="${mobileControlsStyles}">
          <div></div>
          <div class="mobile-control_up" style="${mobileControlStylesCommon + mobileControlStylesUp}"></div>
          <div></div>
          <div class="mobile-control_left" style="${mobileControlStylesCommon + mobileControlStylesLeft}"></div>
          <div></div>
          <div class="mobile-control_right" style="${mobileControlStylesCommon + mobileControlStylesRight}"></div>
          <div></div>
          <div class="mobile-control_down" style="${mobileControlStylesCommon + mobileControlStylesDown}"></div>
          <div></div>
        </div>
      </div>
    `;
    const biteSound = new Audio("data:audio/mp3;base64," + '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');

    document.body.insertAdjacentHTML("beforeend", popup);
    setTimeout(() => {
      document.querySelector(".snakegame").style.opacity = 1;
    }, 300);

    let scoreBlock;
    let score = 0;

    const config = {
      step: 0,
      maxStep: 6,
      sizeCell: 16,
      sizeBerry: 16 / 4,
    };

    const snake = {
      x: 0,
      y: 0,
      dx: config.sizeCell,
      dy: 0,
      tails: [],
      maxTails: 3,
    };

    let berry = {
      x: 0,
      y: 0,
    };

    let canvas = document.querySelector("#game-canvas");
    let context = canvas.getContext("2d");
    scoreBlock = document.querySelector(".game-score .score-count");
    drawScore();

    function gameLoop() {
      requestAnimationFrame(gameLoop);
      if (++config.step < config.maxStep) {
        return;
      }
      config.step = 0;

      context.clearRect(0, 0, canvas.width, canvas.height);

      drawBerry();
      drawSnake();
    }
    requestAnimationFrame(gameLoop);

    function drawSnake() {
      snake.x += snake.dx;
      snake.y += snake.dy;

      collisionBorder();

      snake.tails.unshift({ x: snake.x, y: snake.y });

      if (snake.tails.length > snake.maxTails) {
        snake.tails.pop();
      }

      snake.tails.forEach((i, index) => {
        if (index === 0) {
          context.fillStyle = "#fa0556";
        } else {
          context.fillStyle = "#a00034";
        }
        context.fillRect(i.x, i.y, config.sizeCell, config.sizeCell);

        if (i.x === berry.x && i.y === berry.y) {
          snake.maxTails++;
          biteSound.play();
          incScore();
          randomPositionBerry();
        }

        for (let j = index + 1; j < snake.tails.length; j++) {
          if (i.x === snake.tails[j].x && i.y === snake.tails[j].y) {
            refreshGame();
          }
        }
      });
    }

    function collisionBorder() {
      if (snake.x < 0) {
        snake.x = canvas.width - config.sizeCell;
      } else if (snake.x >= canvas.width) {
        snake.x = 0;
      }

      if (snake.y < 0) {
        snake.y = canvas.height - config.sizeCell;
      } else if (snake.y >= canvas.height) {
        snake.y = 0;
      }
    }

    function refreshGame() {
      score = 0;
      drawScore();

      snake.x = 0;
      snake.y = 0;
      snake.tails = [];
      snake.maxTails = 3;
      snake.dx = config.sizeCell;
      snake.dy = 0;

      randomPositionBerry();
    }

    function drawBerry() {
      context.beginPath();
      context.fillStyle = "#a00014";
      context.arc(
        berry.x + config.sizeCell / 2,
        berry.y + config.sizeCell / 2,
        config.sizeBerry,
        0,
        2 * Math.PI
      );
      context.fill();
    }

    function randomPositionBerry() {
      berry.x =
        getRandomInt(0, canvas.width / config.sizeCell) * config.sizeCell;
      berry.y =
        getRandomInt(0, canvas.height / config.sizeCell) * config.sizeCell;
    }

    function incScore() {
      score++;
      drawScore();
    }

    function drawScore() {
      scoreBlock.textContent = score;
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    document.addEventListener("keydown", (e) => {
      if (e.code === "ArrowLeft" && snake.dx !== config.sizeCell) {
        snake.dx = -config.sizeCell;
        snake.dy = 0;
      } else if (e.code === "ArrowRight" && snake.dx !== -config.sizeCell) {
        snake.dx = config.sizeCell;
        snake.dy = 0;
      } else if (e.code === "ArrowUp" && snake.dy !== config.sizeCell) {
        snake.dx = 0;
        snake.dy = -config.sizeCell;
      } else if (e.code === "ArrowDown" && snake.dy !== -config.sizeCell) {
        snake.dx = 0;
        snake.dy = config.sizeCell;
      }
    });

    document.querySelector('.mobile-controls').addEventListener("click", (e) => {
      if (e.target.closest('.mobile-control_left') && snake.dx !== config.sizeCell) {
        snake.dx = -config.sizeCell;
        snake.dy = 0;
      } else if (e.target.closest('.mobile-control_right') && snake.dx !== -config.sizeCell) {
        snake.dx = config.sizeCell;
        snake.dy = 0;
      } else if (e.target.closest('.mobile-control_up') && snake.dy !== config.sizeCell) {
        snake.dx = 0;
        snake.dy = -config.sizeCell;
      } else if (e.target.closest('.mobile-control_down') && snake.dy !== -config.sizeCell) {
        snake.dx = 0;
        snake.dy = config.sizeCell;
      }
    });
  }
})();
