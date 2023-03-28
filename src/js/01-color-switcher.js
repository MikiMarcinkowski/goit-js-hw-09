
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

//for better view I changed body height
const body = document.querySelector('body');
body.style.height = "400px";


// color changing function
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.disable = true;

let timerId = null;

const startColorChange = () => {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startBtn.disable = true;
  stopBtn.disable = false;
};

startBtn.addEventListener('click', startColorChange);

const stopColorChange = () => {
  clearInterval(timerId);
  startBtn.disable = false;
  stopBtn.disable = true;
};

stopBtn.addEventListener('click', stopColorChange);
