const menuScreen = document.getElementById("menuScreen");
const gameScreen = document.getElementById("gameScreen");
const easyLevelsScreen = document.getElementById("easyLevelsScreen");
const crosswordLevel1Screen = document.getElementById("crosswordLevel1Screen");
const crosswordLevel2Screen = document.getElementById("crosswordLevel2Screen");
const howToPlayScreen = document.getElementById("howToPlayScreen");

const startBtn = document.getElementById("startBtn");
const howToBtn = document.getElementById("howToBtn");
const settingsGearBtn = document.getElementById("settingsGearBtn");

const backFromGame = document.getElementById("backFromGame");
const backFromEasyLevels = document.getElementById("backFromEasyLevels");
const backFromCrossword1 = document.getElementById("backFromCrossword1");
const backFromCrossword2 = document.getElementById("backFromCrossword2");
const backFromHowToPlay = document.getElementById("backFromHowToPlay");

const easyBtn = document.querySelector(".diff1");
const level1Btn = document.querySelector(".level-box-1");
const level2Btn = document.querySelector(".level-box-2");

const settingsModal = document.getElementById("settingsModal");
const settingsOverlay = document.getElementById("settingsOverlay");
const closeSettingsBtn = document.getElementById("closeSettingsBtn");
const resetProgressBtn = document.getElementById("resetProgressBtn");

const musicVolume = document.getElementById("musicVolume");
const buttonSoundVolume = document.getElementById("buttonSoundVolume");
const musicVolumeValue = document.getElementById("musicVolumeValue");
const buttonSoundVolumeValue = document.getElementById("buttonSoundVolumeValue");

const level1Timer = document.getElementById("level1Timer");
const level2Timer = document.getElementById("level2Timer");

const starsLevel1 = document.getElementById("starsLevel1");
const starsLevel2 = document.getElementById("starsLevel2");
const starsLevel3 = document.getElementById("starsLevel3");

const crosswordBoard = document.getElementById("crosswordBoard");
const crosswordBoardLevel2 = document.getElementById("crosswordBoardLevel2");
const columnLabels = document.getElementById("columnLabels");
const rowLabels = document.getElementById("rowLabels");

const columnLabelsLevel2 = document.getElementById("columnLabelsLevel2");
const rowLabelsLevel2 = document.getElementById("rowLabelsLevel2");

const hintBtn = document.getElementById("hintBtn");
const explainBtn = document.getElementById("explainBtn");
const hintBtnLevel2 = document.getElementById("hintBtnLevel2");
const explainBtnLevel2 = document.getElementById("explainBtnLevel2");

const hintModal = document.getElementById("hintModal");
const hintOverlay = document.getElementById("hintOverlay");
const closeHintBtn = document.getElementById("closeHintBtn");
const useHintBtn = document.getElementById("useHintBtn");
const hintCountValue = document.getElementById("hintCountValue");

const explainModal = document.getElementById("explainModal");
const explainOverlay = document.getElementById("explainOverlay");
const closeExplainBtn = document.getElementById("closeExplainBtn");

const screens = [
  menuScreen,
  gameScreen,
  easyLevelsScreen,
  crosswordLevel1Screen,
  crosswordLevel2Screen,
  howToPlayScreen
];

let timerInterval = null;
let currentLevel = 0;
let level1Seconds = 0;
let level2Seconds = 0;
let remainingHints = 3;

const level1Layout = [
  ["O", "L", "O", "V", "K", "A"],
  ["R", "A", "T", null, "A", "S"],
  ["A", "V", "I", "O", "N", null],
  ["H", null, "S", null, "T", null],
  [null, "M", "A", "M", "A", null],
  [null, null, "K", null, null, null]
];

const level2Layout = [
  [null, "K", null, "S", "E", null],
  ["O", "R", "A", "O", null, "A"],
  [null, "A", null, null, null, "L"],
  [null, "V", "A", "T", "R", "A"],
  [null, "A", null, "E", null, "T"],
  [null, "T", null, "S", null, null],
  ["L", "A", "S", "T", "A", null]
];

function showScreen(screen) {
  screens.forEach((s) => {
    if (s) {
      s.classList.remove("active");
    }
  });

  if (screen) {
    screen.classList.add("active");
  }
}

function openSettings() {
  if (settingsModal) {
    settingsModal.classList.add("active");
  }
}

function closeSettings() {
  if (settingsModal) {
    settingsModal.classList.remove("active");
  }
}

function openHintModal() {
  if (hintModal) {
    hintModal.classList.add("active");
  }
  updateHintDisplay();
}

function closeHintModal() {
  if (hintModal) {
    hintModal.classList.remove("active");
  }
}

function openExplainModal() {
  if (explainModal) {
    explainModal.classList.add("active");
  }
}

function closeExplainModal() {
  if (explainModal) {
    explainModal.classList.remove("active");
  }
}

function updateHintDisplay() {
  if (hintCountValue) {
    hintCountValue.textContent = remainingHints;
  }
}

function formatTime(totalSeconds) {
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

function updateTimerDisplay(level) {
  if (level === 1 && level1Timer) {
    level1Timer.textContent = formatTime(level1Seconds);
  }

  if (level === 2 && level2Timer) {
    level2Timer.textContent = formatTime(level2Seconds);
  }
}

function startLevelTimer(level) {
  stopLevelTimer();
  currentLevel = level;

  if (level === 1) {
    level1Seconds = 0;
    updateTimerDisplay(1);
  }

  if (level === 2) {
    level2Seconds = 0;
    updateTimerDisplay(2);
  }

  timerInterval = setInterval(() => {
    if (currentLevel === 1) {
      level1Seconds += 1;
      updateTimerDisplay(1);
    }

    if (currentLevel === 2) {
      level2Seconds += 1;
      updateTimerDisplay(2);
    }
  }, 1000);
}

function stopLevelTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

function setStars(container, count) {
  if (!container) return;

  const stars = container.querySelectorAll(".star");

  stars.forEach((star, index) => {
    if (index < count) {
      star.classList.add("filled");
    } else {
      star.classList.remove("filled");
    }
  });
}

function getStarsFromTime(totalSeconds) {
  if (totalSeconds < 2 * 60) {
    return 3;
  }

  if (totalSeconds < 5 * 60) {
    return 2;
  }

  if (totalSeconds < 10 * 60) {
    return 1;
  }

  return 0;
}

function saveLevelStars(levelKey, starCount) {
  localStorage.setItem(levelKey, String(starCount));
}

function loadLevelStars() {
  const savedLevel1Stars = Number(localStorage.getItem("level1Stars")) || 0;
  const savedLevel2Stars = Number(localStorage.getItem("level2Stars")) || 0;
  const savedLevel3Stars = Number(localStorage.getItem("level3Stars")) || 0;

  setStars(starsLevel1, savedLevel1Stars);
  setStars(starsLevel2, savedLevel2Stars);
  setStars(starsLevel3, savedLevel3Stars);
}

function resetProgress() {
  localStorage.removeItem("level1Stars");
  localStorage.removeItem("level2Stars");
  localStorage.removeItem("level3Stars");

  setStars(starsLevel1, 0);
  setStars(starsLevel2, 0);
  setStars(starsLevel3, 0);

  remainingHints = 3;
  level1Seconds = 0;
  level2Seconds = 0;

  updateTimerDisplay(1);
  updateTimerDisplay(2);
  updateHintDisplay();

  alert("Progress je obrisan.");
}

function finishLevel(level) {
  stopLevelTimer();

  let seconds = 0;
  let levelKey = "";
  let starsContainer = null;

  if (level === 1) {
    seconds = level1Seconds;
    levelKey = "level1Stars";
    starsContainer = starsLevel1;
  } else if (level === 2) {
    seconds = level2Seconds;
    levelKey = "level2Stars";
    starsContainer = starsLevel2;
  }

  const earnedStars = getStarsFromTime(seconds);
  saveLevelStars(levelKey, earnedStars);
  setStars(starsContainer, earnedStars);

  showScreen(easyLevelsScreen);

  setTimeout(() => {
    alert("Bravo! Tačno si popunio/la ukrštenicu.");
  }, 100);
}

function createLabels() {
  if (columnLabels) {
    columnLabels.innerHTML = "";
    for (let i = 1; i <= 6; i++) {
      const label = document.createElement("div");
      label.className = "column-label";
      label.textContent = i;
      columnLabels.appendChild(label);
    }
  }

  if (rowLabels) {
    rowLabels.innerHTML = "";
    for (let i = 1; i <= 6; i++) {
      const label = document.createElement("div");
      label.className = "row-label";
      label.textContent = i;
      rowLabels.appendChild(label);
    }
  }
}

function getBoardElement(level) {
  if (level === 1) {
    return crosswordBoard;
  }

  if (level === 2) {
    return crosswordBoardLevel2;
  }

  return null;
}

function getPlayableCells(boardElement) {
  if (!boardElement) {
    return [];
  }

  return [...boardElement.querySelectorAll(".crossword-cell:not(.blocked)")];
}

function isBoardFull(boardElement) {
  const playableCells = getPlayableCells(boardElement);

  if (playableCells.length === 0) {
    return false;
  }

  return playableCells.every((cell) => cell.value.trim() !== "");
}

function checkBoardCompletion(level) {
  const boardElement = getBoardElement(level);

  if (!boardElement || !isBoardFull(boardElement)) {
    return;
  }

  const playableCells = getPlayableCells(boardElement);
  let allCorrect = true;

  playableCells.forEach((cell) => {
    const userValue = cell.value.toUpperCase();
    const solutionValue = cell.dataset.solution;

    cell.classList.remove("correct", "wrong");

    if (userValue === solutionValue) {
      cell.classList.add("correct");
    } else {
      cell.classList.add("wrong");
      allCorrect = false;
    }
  });

  if (allCorrect) {
    finishLevel(level);
  }
}

function fillRandomEmptyCell() {
  const boardElement = getBoardElement(currentLevel);

  if (!boardElement) {
    return;
  }

  if (remainingHints <= 0) {
    closeHintModal();
    alert("Nemaš više hintova.");
    return;
  }

  const emptyCells = getPlayableCells(boardElement).filter((cell) => {
    return cell.value.trim() === "";
  });

  if (emptyCells.length === 0) {
    closeHintModal();
    return;
  }

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const chosenCell = emptyCells[randomIndex];

  chosenCell.value = chosenCell.dataset.solution;
  chosenCell.classList.remove("wrong");
  chosenCell.classList.add("correct");

  remainingHints -= 1;
  updateHintDisplay();
  closeHintModal();

  checkBoardCompletion(currentLevel);
}

function createBoard(boardElement, layout, level) {
  if (!boardElement) {
    return;
  }

  boardElement.innerHTML = "";

  for (let row = 0; row < layout.length; row++) {
    for (let col = 0; col < layout[row].length; col++) {
      const value = layout[row][col];

      const input = document.createElement("input");
      input.type = "text";
      input.maxLength = 1;
      input.classList.add("crossword-cell");

      if (value === null) {
        input.classList.add("blocked");
        input.disabled = true;
        input.tabIndex = -1;
      } else {
        input.value = "";
        input.dataset.solution = value;
        input.dataset.row = row + 1;
        input.dataset.col = col + 1;

        input.addEventListener("input", () => {
          input.value = input.value.toUpperCase().replace(/[^A-ZČĆŽŠĐ]/g, "");
          input.classList.remove("correct", "wrong");

          if (input.value) {
            let next = input.nextElementSibling;

            while (next && next.classList.contains("blocked")) {
              next = next.nextElementSibling;
            }

            if (next) {
              next.focus();
            }
          }

          checkBoardCompletion(level);
        });

        input.addEventListener("keydown", (e) => {
          if (e.key === "Backspace" && !input.value) {
            let prev = input.previousElementSibling;

            while (prev && prev.classList.contains("blocked")) {
              prev = prev.previousElementSibling;
            }

            if (prev) {
              prev.focus();
            }
          }
        });
      }

      boardElement.appendChild(input);
    }
  }
}

function openLevel1() {
  currentLevel = 1;
  remainingHints = 3;
  updateHintDisplay();

  createLabels();
  createBoard(crosswordBoard, level1Layout, 1);
  showScreen(crosswordLevel1Screen);
  startLevelTimer(1);
}

function createLabelsLevel2() {
  if (columnLabelsLevel2) {
    columnLabelsLevel2.innerHTML = "";
    for (let i = 1; i <= 6; i++) {
      const label = document.createElement("div");
      label.className = "column-label";
      label.textContent = i;
      columnLabelsLevel2.appendChild(label);
    }
  }

  if (rowLabelsLevel2) {
    rowLabelsLevel2.innerHTML = "";
    for (let i = 1; i <= 7; i++) {
      const label = document.createElement("div");
      label.className = "row-label";
      label.textContent = i;
      rowLabelsLevel2.appendChild(label);
    }
  }
}

function openLevel2() {
  currentLevel = 2;
  remainingHints = 3;
  updateHintDisplay();

  createLabelsLevel2(); // <-- OVO

  createBoard(crosswordBoardLevel2, level2Layout, 2);
  showScreen(crosswordLevel2Screen);
  startLevelTimer(2);
}

function leaveCrossword() {
  stopLevelTimer();
  closeHintModal();
  closeExplainModal();
  showScreen(easyLevelsScreen);
}

startBtn?.addEventListener("click", () => {
  showScreen(gameScreen);
});

howToBtn?.addEventListener("click", () => {
  showScreen(howToPlayScreen);
});

easyBtn?.addEventListener("click", () => {
  showScreen(easyLevelsScreen);
});

level1Btn?.addEventListener("click", () => {
  openLevel1();
});

level2Btn?.addEventListener("click", () => {
  openLevel2();
});

backFromGame?.addEventListener("click", () => {
  showScreen(menuScreen);
});

backFromEasyLevels?.addEventListener("click", () => {
  showScreen(gameScreen);
});

backFromCrossword1?.addEventListener("click", () => {
  leaveCrossword();
});

backFromCrossword2?.addEventListener("click", () => {
  leaveCrossword();
});

backFromHowToPlay?.addEventListener("click", () => {
  showScreen(menuScreen);
});

settingsGearBtn?.addEventListener("click", () => {
  openSettings();
});

closeSettingsBtn?.addEventListener("click", () => {
  closeSettings();
});

settingsOverlay?.addEventListener("click", () => {
  closeSettings();
});

resetProgressBtn?.addEventListener("click", () => {
  resetProgress();
});

hintBtn?.addEventListener("click", () => {
  currentLevel = 1;
  openHintModal();
});

hintBtnLevel2?.addEventListener("click", () => {
  currentLevel = 2;
  openHintModal();
});

closeHintBtn?.addEventListener("click", () => {
  closeHintModal();
});

hintOverlay?.addEventListener("click", () => {
  closeHintModal();
});

useHintBtn?.addEventListener("click", () => {
  fillRandomEmptyCell();
});

explainBtn?.addEventListener("click", () => {
  openExplainModal();
});

explainBtnLevel2?.addEventListener("click", () => {
  openExplainModal();
});

closeExplainBtn?.addEventListener("click", () => {
  closeExplainModal();
});

explainOverlay?.addEventListener("click", () => {
  closeExplainModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSettings();
    closeHintModal();
    closeExplainModal();
  }
});

musicVolume?.addEventListener("input", (e) => {
  const value = e.target.value;
  musicVolumeValue.textContent = `${value}%`;
});

buttonSoundVolume?.addEventListener("input", (e) => {
  const value = e.target.value;
  buttonSoundVolumeValue.textContent = `${value}%`;
});

updateTimerDisplay(1);
updateTimerDisplay(2);
loadLevelStars();
updateHintDisplay();