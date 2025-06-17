let startTime, interval;
let running = false;

const display = document.getElementById("display");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

startBtn.addEventListener("click", () => {
  if (running) return;
  running = true;
  startTime = Date.now();

  interval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    display.textContent = formatTime(elapsed);
  }, 10);
});

stopBtn.addEventListener("click", () => {
  running = false;
  clearInterval(interval);
});

resetBtn.addEventListener("click", () => {
  running = false;
  clearInterval(interval);
  display.textContent = "00:00:00.000";
});

function formatTime(ms) {
  let milliseconds = ms % 1000;
  let seconds = Math.floor(ms / 1000) % 60;
  let minutes = Math.floor(ms / (1000 * 60)) % 60;
  let hours = Math.floor(ms / (1000 * 60 * 60));

  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${padMS(milliseconds)}`;
}

function pad(n) {
  return n.toString().padStart(2, '0');
}

function padMS(n) {
  return n.toString().padStart(3, '0');
}
