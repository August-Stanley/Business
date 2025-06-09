// Typewriter
const title = "Cyber Guardian";
const typewriter = document.getElementById("typewriter");
let i = 0;
function type() {
  if (i <= title.length) {
    typewriter.textContent = title.slice(0, i);
    i++;
    setTimeout(type, 120);
  }
}
type();

// Background hex/particles
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let hexes = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

for (let i = 0; i < 40; i++) {
  hexes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 0.6,
    dy: (Math.random() - 0.5) * 0.6
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hexes.forEach(hex => {
    ctx.beginPath();
    ctx.arc(hex.x, hex.y, hex.r, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(47,129,247,0.3)';
    ctx.fill();
    hex.x += hex.dx;
    hex.y += hex.dy;

    if (hex.x < 0 || hex.x > canvas.width) hex.dx *= -1;
    if (hex.y < 0 || hex.y > canvas.height) hex.dy *= -1;
  });
  requestAnimationFrame(animate);
}
animate();
