// Napisz skrypt, który po kliknięciu przycisku «Start», raz na sekundę zmienia kolor tła <body> na wartość losową używając do tego stylu inline. Po kliknięciu przycisku «Stop», kolor tła powinien przestać się zmieniać i “zatrzymać” się na aktualnym kolorze.

// UWAGA
// Zwróć uwagę na to, że przycisk «Start» można klikać w nieskończoność. Zrób tak, żeby przycisk «Start» był nieaktywny, tak długo jak zmiana kolorów jest uruchomiona (użytj atrybutu disabled).

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

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
