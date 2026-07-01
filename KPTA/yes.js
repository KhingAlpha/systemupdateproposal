function placeholderHTML() {
    return `<div class="image-placeholder">
      <div class="placeholder-icon">🖼</div>
      <div class="placeholder-text">YOUR DESIGN<br>GOES HERE<br><br>replace src="YOUR_IMAGE_PATH_HERE"<br>with your image filename</div>
    </div>`;
}
 
// ── Simple confetti ──
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
 
const colors = ['#ff3ea5','#ff79c6','#39d98a','#bd93f9','#ffb86c','#f1fa8c'];
const pieces = Array.from({ length: 90 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * -canvas.height,
    r: Math.random() * 7 + 3,
    d: Math.random() * 80 + 20,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: Math.floor(Math.random() * 10) - 10,
    tiltAngle: 0,
    tiltSpeed: Math.random() * 0.07 + 0.02,
    speed: Math.random() * 2 + 1
}));
 
let angle = 0;
let frame = 0;
 
function drawConfetti() {
    if (frame > 400) { ctx.clearRect(0,0,canvas.width,canvas.height); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle += 0.01;
    frame++;
 
    pieces.forEach(p => {
      p.tiltAngle += p.tiltSpeed;
      p.y += p.speed;
      p.x += Math.sin(angle + p.d) * 0.8;
      p.tilt = Math.sin(p.tiltAngle) * 12;
 
      if (p.y > canvas.height) { p.y = -10; p.x = Math.random() * canvas.width; }
 
      ctx.beginPath();
      ctx.lineWidth = p.r;
      ctx.strokeStyle = p.color;
      ctx.moveTo(p.x + p.tilt + p.r / 4, p.y);
      ctx.lineTo(p.x + p.tilt, p.y + p.tilt + p.r / 4);
      ctx.stroke();
    });
 
    requestAnimationFrame(drawConfetti);
}
 
drawConfetti();
 
window.addEventListener('resize', () => {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
});