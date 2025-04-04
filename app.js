// ServiceWorker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
    .then(() => console.log("Service Worker Registered"));
}

const btnStartElement = document.querySelector('[data-action="start"]');
const btnStopElement = document.querySelector('[data-action="stop"]');
const btnResetElement = document.querySelector('[data-action="reset"]');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let timerTime = 1500; // 25 minutes in seconds
let interval;
let isRunning = false;

const start = () => {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(decrementTimer, 1000);
  }
}

const stop = () => {
  isRunning = false;
  clearInterval(interval);
}

const reset = () => {
  stop(); // also stops the timer
  timerTime = 1500;
  updateDisplay();
}

const pad = (number) => {
  return (number < 10) ? '0' + number : number;
}

const updateDisplay = () => {
  const numberMinutes = Math.floor(timerTime / 60);
  const numberSeconds = timerTime % 60;
  minutes.innerText = pad(numberMinutes);
  seconds.innerText = pad(numberSeconds);
}

const decrementTimer = () => {
  if (timerTime > 0) {
    timerTime--;
    updateDisplay();
  } else {
    stop(); // stop when the timer hits 0
  }
}

// Initial display update
updateDisplay();

btnStartElement.addEventListener('click', start);
btnStopElement.addEventListener('click', stop);
btnResetElement.addEventListener('click', reset);
