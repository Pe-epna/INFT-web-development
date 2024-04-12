//begine canvas and context
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

//set the canvas width and height
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//a function to generate a random number within a range
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//a function to generate a random RGB color
function randomRGB() {
  return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}

class Shape {
  constructor(x, y, velX, velY) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
  }
}

//the ball class inherits from Shape
class Ball extends Shape {
  constructor(x, y, velX, velY, size, color) {
    super(x, y, velX, velY);
    this.size = size;
    this.color = color;
    this.exists = true;
  }

  draw() {
    if (this.exists) {
      ctx.beginPath();
      ctx.fillStyle = this.color;
      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.fill();
    }
  }

  update() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }

    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }

    this.x += this.velX;
    this.y += this.velY;
  }

  collisionDetect() {
    for (const ball of balls) {
      if (this !== ball && ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.color = this.color = randomRGB();
        }
      }
    }
  }
}

//the evilCircle class inherits from Shape
class EvilCircle extends Shape {
  constructor(x, y) {
    super(x, y, 20, 20);
    this.color = 'white';
    this.size = 10;
  }

  draw() {
    ctx.lineWidth = 3;
    ctx.strokeStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.stroke();
  }

  checkBounds() {
    if ((this.x + this.size) >= width || (this.x - this.size) <= 0) {
      this.x -= this.velX;
    }

    if ((this.y + this.size) >= height || (this.y - this.size) <= 0) {
      this.y -= this.velY;
    }
  }

  collisionDetect() {
    for (const ball of balls) {
      if (ball.exists) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < this.size + ball.size) {
          ball.exists = false;
          ball.color = 'rgba(0, 0, 0, 0)';
        }
      }
    }
  }
}

//creates the instance of evilCircle
const evilCircle = new EvilCircle(random(0, width), random(0, height));

//the array to store ball instances
const balls = [];

//score counter
const scoreCounter = document.createElement('p');
scoreCounter.textContent = "Ball count: ";
document.body.appendChild(scoreCounter);

//the function to update ball count
function updateBallCount() {
  let count = 0;
  for (const ball of balls) {
    if (ball.exists) {
      count++;
    }
  }
  scoreCounter.textContent = "Ball count: " + count;
}

//move the evil circle with the keys
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      evilCircle.x -= evilCircle.velX;
      break;
    case "ArrowRight":
      evilCircle.x += evilCircle.velX;
      break;
    case "ArrowUp":
      evilCircle.y -= evilCircle.velY;
      break;
    case "ArrowDown":
      evilCircle.y += evilCircle.velY;
      break;
  }
});

//moves the evil circle with the mouse
function moveEvilCircleWithMouse() {
  window.addEventListener("mousemove", (e) => {
    evilCircle.x = e.clientX;
    evilCircle.y = e.clientY;
  });
}

moveEvilCircleWithMouse();

//main animation loop
function loop() {
  //clears canvas
  ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
  ctx.fillRect(0, 0, width, height);

  //draws and updates each ball
  for (const ball of balls) {
    ball.draw();
    ball.update();
    ball.collisionDetect();
  }

  //draws and updates the evil circle
  evilCircle.draw();
  evilCircle.checkBounds();
  evilCircle.collisionDetect();

  //updates the ball count
  updateBallCount();

  requestAnimationFrame(loop);
}

//generates balls
while (balls.length < 25) {
  const size = random(10, 20);
  const ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    size,
    randomRGB()
  );
  balls.push(ball);
}

//starts the loop
loop();
