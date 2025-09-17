let points = 0;
let timeLeft = 10;
let timerId;
let autoMode = false;

const pointsEl = document.getElementById("points");
const timeEl = document.getElementById("countdown");
const infoEl = document.getElementById("info");

const addBtn = document.getElementById("addBtn");
const subBtn = document.getElementById("subBtn");
const shopBtn = document.getElementById("shopBtn");

function refresh() {
  pointsEl.textContent = "Wynik: " + points;

  if (points === 10) {
    infoEl.textContent = "Masz już 10 punktów, świetnie idzie! 🎉";
  }
  if (points === 30) {
    infoEl.textContent = "30 punktów! Coraz lepiej 💪";
  }
  if (points === 50) {
    infoEl.textContent = "50 punktów! Jesteś pro klikerem 🏆";
  }
}

function addPoints(value) {
  points += value;
  
  addBtn.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  subBtn.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  refresh();
}

addBtn.addEventListener("click", () => addPoints(1));
subBtn.addEventListener("click", () => addPoints(-1));

shopBtn.addEventListener("click", () => {
  if (points >= 20 && !autoMode) {
    points -= 20;
    autoMode = true;
    refresh();
    setInterval(() => {
      points++;
      refresh();
    }, 1000);
  }
});

timerId = setInterval(() => {
  timeLeft--;
  timeEl.textContent = "Pozostały czas: " + timeLeft;
  if (timeLeft <= 0) {
    clearInterval(timerId);
    addBtn.disabled = true;
    subBtn.disabled = true;
    shopBtn.disabled = true;
    infoEl.textContent = "Koniec gry! Twój wynik to: " + points;
  }
}, 1000);