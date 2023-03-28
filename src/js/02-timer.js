// Elementy interfejsu
// W HTML znajduje się znacznik licznika, pola wyboru końcowej daty i przycisku, po którego kliknięciu licznik powinien się uruchomić.
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
// Popraw wizualnie elementy interfejsu.
const inputDate = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[date-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //tutaj wpiszę
    //
    //
    //
    //
    //
    console.log(selectedDates[0]);
  },
};

flatpickr(inputDate, options);

// Wybór daty
// Metoda onClose() z obiektu parametrów pojawia się za każdym razem przy zamknięciu elementu interfejsu, który tworzy flatpickr. To właśnie w niej należy opracować datę wybraną przez użytkownika. Parametr selectedDates to tablica wybranych dat, dlatego bierzemy z niej pierwszy element.

// Jeśli użytkownik wybrał datę z przeszłości, pokaż window.alert() o treści "Please choose a date in the future".
// Jeśli użytkownik wybrał odpowiednią datę (z przyszłości), przycisk «Start» staje się aktywny.
// Przycisk «Start» powinien być nieaktywny tak długo, dopóki użytkownik nie wybierze daty w przyszłości.
// Po kliknięciu przycisku «Start» zaczyna się odliczanie czasu do wybranej daty od momentu kliknięcia.
// Odliczanie czasu
// Po kliknięciu na przycisk «Start» skrypt powinien wyliczać raz na sekundę, ile czasu pozostało do wskazanej daty i aktualizować interfejs licznika, pokazując cztery liczby: dni, godziny, minuty i sekundy, w formacie xx:xx:xx:xx (DD:HH:MM:SS).

// Liczba dni może składać się z więcej niż dwóch cyfr (jeśli wybierzemy odpowiednio odległą datę).
// Licznik powinien się zatrzymać, gdy osiągniemy datę końcowej a wartość licznika wyniesie 00:00:00:00.
// NIE BĘDZIEMY KOMPLIKOWAĆ
// Jeśli licznik jest uruchomiony, należy odświeżyć stronę, aby go zrestartować i wybrać nową datę.

// Formatowanie czasu
// Funkcja convertMs() zwraca obiekt z obliczonym pozostałym czasem do daty końcowej. Zwróć uwagę, że nie formatuje wyniku. To znaczy, że jeśli pozostały 4 minuty czy sekundy, to funkcja zwróci 4, a nie 04. W interfejsie licznika konieczne jest dodanie 0 jeśli liczba zawiera mniej niż dwa symbole. Napisz funkcję addLeadingZero(value), która używa metody padStart() i przed renderowaniem interfejsu sformatuj wartość.

// Biblioteka powiadomień
// UWAGA
// Następna funkcjonalność nie jest obowiązkowa przy oddawaniu zadania, ale będzie dobrym ćwiczeniem.

// Aby wyświetlić użytkownikowi powiadomienie, zamiast window.alert() użyj biblioteki notiflix.
