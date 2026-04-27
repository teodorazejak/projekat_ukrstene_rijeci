const menuScreen = document.getElementById("menuScreen");
const playerModeScreen = document.getElementById("playerModeScreen");
const gameScreen = document.getElementById("gameScreen");
const easyLevelsScreen = document.getElementById("easyLevelsScreen");
const crosswordLevel1Screen = document.getElementById("crosswordLevel1Screen");
const crosswordLevel2Screen = document.getElementById("crosswordLevel2Screen");
const crosswordLevel3Screen = document.getElementById("crosswordLevel3Screen");
const howToPlayScreen = document.getElementById("howToPlayScreen");

const startBtn = document.getElementById("startBtn");
const howToBtn = document.getElementById("howToBtn");
const settingsGearBtn = document.getElementById("settingsGearBtn");
const onePlayerBtn = document.getElementById("onePlayerBtn");
const twoPlayersBtn = document.getElementById("twoPlayersBtn");

const backFromPlayerMode = document.getElementById("backFromPlayerMode");
const backFromGame = document.getElementById("backFromGame");
const backFromEasyLevels = document.getElementById("backFromEasyLevels");
const backFromCrossword1 = document.getElementById("backFromCrossword1");
const backFromCrossword2 = document.getElementById("backFromCrossword2");
const backFromCrossword3 = document.getElementById("backFromCrossword3");
const backFromHowToPlay = document.getElementById("backFromHowToPlay");

const confirmLevel1Btn = document.getElementById("confirmLevel1Btn");
const confirmLevel2Btn = document.getElementById("confirmLevel2Btn");
const confirmLevel3Btn = document.getElementById("confirmLevel3Btn");

const easyBtn = document.querySelector(".diff1");
const level1Btn = document.querySelector(".level-box-1");
const level2Btn = document.querySelector(".level-box-2");
const level3Btn = document.querySelector(".level-box-3");

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
const level3Timer = document.getElementById("level3Timer");

const starsLevel1 = document.getElementById("starsLevel1");
const starsLevel2 = document.getElementById("starsLevel2");
const starsLevel3 = document.getElementById("starsLevel3");

const crosswordBoard = document.getElementById("crosswordBoard");
const crosswordBoardLevel2 = document.getElementById("crosswordBoardLevel2");
const crosswordBoardLevel3 = document.getElementById("crosswordBoardLevel3");
const columnLabels = document.getElementById("columnLabels");
const rowLabels = document.getElementById("rowLabels");

const columnLabelsLevel2 = document.getElementById("columnLabelsLevel2");
const rowLabelsLevel2 = document.getElementById("rowLabelsLevel2");
const columnLabelsLevel3 = document.getElementById("columnLabelsLevel3");
const rowLabelsLevel3 = document.getElementById("rowLabelsLevel3");

const hintBtn = document.getElementById("hintBtn");
const explainBtn = document.getElementById("explainBtn");
const hintBtnLevel2 = document.getElementById("hintBtnLevel2");
const explainBtnLevel2 = document.getElementById("explainBtnLevel2");
const hintBtnLevel3 = document.getElementById("hintBtnLevel3");
const explainBtnLevel3 = document.getElementById("explainBtnLevel3");

const hintModal = document.getElementById("hintModal");
const hintOverlay = document.getElementById("hintOverlay");
const closeHintBtn = document.getElementById("closeHintBtn");
const useHintBtn = document.getElementById("useHintBtn");
const hintCountValue = document.getElementById("hintCountValue");

const explainModal = document.getElementById("explainModal");
const explainOverlay = document.getElementById("explainOverlay");
const closeExplainBtn = document.getElementById("closeExplainBtn");

const completeModal = document.getElementById("completeModal");
const completeOverlay = document.getElementById("completeOverlay");
const closeCompleteBtn = document.getElementById("closeCompleteBtn");
const completeStars = document.getElementById("completeStars");
const completeTime = document.getElementById("completeTime");

const attemptModal = document.getElementById("attemptModal");
const attemptOverlay = document.getElementById("attemptOverlay");
const closeAttemptBtn = document.getElementById("closeAttemptBtn");
const attemptMessage = document.getElementById("attemptMessage");

const screens = [
  menuScreen,
  playerModeScreen,
  gameScreen,
  easyLevelsScreen,
  crosswordLevel1Screen,
  crosswordLevel2Screen,
  crosswordLevel3Screen,
  howToPlayScreen
];

let timerInterval = null;
let currentLevel = 0;
let level1Seconds = 0;
let level2Seconds = 0;
let level3Seconds = 0;
let remainingHints = 3;
let clearWrongTimeout = null;

const maxWrongAttempts = 3;
const wrongPreviewDuration = 1500;
const wrongAttemptsByLevel = {
  1: 0,
  2: 0,
  3: 0
};
const limitedStarsByLevel = {
  1: false,
  2: false,
  3: false
};

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

const level3Layout = [
  ["J", "A", "J", "E", null],
  ["A", null, "A", null, null],
  ["S", "U", "P", "A", null],
  ["T", null, "A", null, "U"],
  ["U", null, "N", "O", "S"],
  ["K", null, null, null, "T"],
  [null, "L", "U", "P", "A"]
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

function openCompleteModal(starCount, totalSeconds) {
  if (completeStars) {
    completeStars.innerHTML = "";

    for (let i = 0; i < 3; i++) {
      const star = document.createElement("span");
      star.className = "complete-star";
      star.textContent = "★";

      if (i < starCount) {
        star.classList.add("filled");
      }

      completeStars.appendChild(star);
    }
  }

  if (completeTime) {
    completeTime.textContent = `Vrijeme: ${formatTime(totalSeconds)}`;
  }

  if (completeModal) {
    completeModal.classList.add("active");
  }
}

function closeCompleteModal() {
  if (completeModal) {
    completeModal.classList.remove("active");
  }
}

function openAttemptModal(message) {
  if (attemptMessage) {
    attemptMessage.textContent = message;
  }

  if (attemptModal) {
    attemptModal.classList.add("active");
  }
}

function closeAttemptModal() {
  if (attemptModal) {
    attemptModal.classList.remove("active");
  }
}

function clearWrongPreview(cells) {
  cells.forEach((cell) => {
    cell.value = "";
    cell.classList.remove("wrong");
  });
}

function scheduleWrongPreviewClear(cells) {
  if (clearWrongTimeout) {
    clearTimeout(clearWrongTimeout);
  }

  clearWrongTimeout = setTimeout(() => {
    clearWrongPreview(cells);
    clearWrongTimeout = null;
  }, wrongPreviewDuration);
}

function clearCurrentWrongPreview() {
  if (clearWrongTimeout) {
    clearTimeout(clearWrongTimeout);
    clearWrongTimeout = null;
  }
}

function resetLevelAttemptState(level) {
  wrongAttemptsByLevel[level] = 0;
  limitedStarsByLevel[level] = false;
  clearCurrentWrongPreview();
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

  if (level === 3 && level3Timer) {
    level3Timer.textContent = formatTime(level3Seconds);
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

  if (level === 3) {
    level3Seconds = 0;
    updateTimerDisplay(3);
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

    if (currentLevel === 3) {
      level3Seconds += 1;
      updateTimerDisplay(3);
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

  return 1;
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
  level3Seconds = 0;
  wrongAttemptsByLevel[1] = 0;
  wrongAttemptsByLevel[2] = 0;
  wrongAttemptsByLevel[3] = 0;
  limitedStarsByLevel[1] = false;
  limitedStarsByLevel[2] = false;
  limitedStarsByLevel[3] = false;

  updateTimerDisplay(1);
  updateTimerDisplay(2);
  updateTimerDisplay(3);
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
  } else if (level === 3) {
    seconds = level3Seconds;
    levelKey = "level3Stars";
    starsContainer = starsLevel3;
  }

  const earnedStars = limitedStarsByLevel[level]
    ? Math.min(getStarsFromTime(seconds), 1)
    : getStarsFromTime(seconds);
  saveLevelStars(levelKey, earnedStars);
  setStars(starsContainer, earnedStars);

  showScreen(easyLevelsScreen);
  openCompleteModal(earnedStars, seconds);
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

  if (level === 3) {
    return crosswordBoardLevel3;
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

function confirmBoard(level) {
  const boardElement = getBoardElement(level);

  if (!boardElement) {
    return;
  }

  clearCurrentWrongPreview();

  if (!isBoardFull(boardElement)) {
    openAttemptModal("Popuni sva polja prije potvrde.");
    return;
  }

  const playableCells = getPlayableCells(boardElement);
  let allCorrect = true;
  const wrongCells = [];

  playableCells.forEach((cell) => {
    const userValue = cell.value.toUpperCase();
    const solutionValue = cell.dataset.solution;

    cell.classList.remove("correct", "wrong");

    if (userValue === solutionValue) {
      cell.classList.add("correct");
    } else {
      cell.classList.add("wrong");
      wrongCells.push(cell);
      allCorrect = false;
    }
  });

  if (allCorrect) {
    finishLevel(level);
    return;
  }

  wrongAttemptsByLevel[level] += 1;

  if (wrongAttemptsByLevel[level] >= maxWrongAttempts) {
    limitedStarsByLevel[level] = true;
    openAttemptModal(
      "Treći pogrešan pokušaj. Pogrešna slova će se obrisati, a za ovaj level možeš dobiti najviše 1 zvjezdicu."
    );
  } else {
    const remainingAttempts = maxWrongAttempts - wrongAttemptsByLevel[level];
    openAttemptModal(
      `Nije tačno. Pogrešna slova će se obrisati. Preostali pokušaji za pune zvjezdice: ${remainingAttempts}.`
    );
  }

  scheduleWrongPreviewClear(wrongCells);
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
  resetLevelAttemptState(1);
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

function createLabelsLevel3() {
  if (columnLabelsLevel3) {
    columnLabelsLevel3.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const label = document.createElement("div");
      label.className = "column-label";
      label.textContent = i;
      columnLabelsLevel3.appendChild(label);
    }
  }

  if (rowLabelsLevel3) {
    rowLabelsLevel3.innerHTML = "";
    for (let i = 1; i <= 7; i++) {
      const label = document.createElement("div");
      label.className = "row-label";
      label.textContent = i;
      rowLabelsLevel3.appendChild(label);
    }
  }
}

function openLevel2() {
  currentLevel = 2;
  remainingHints = 3;
  resetLevelAttemptState(2);
  updateHintDisplay();

  createLabelsLevel2(); // <-- OVO

  createBoard(crosswordBoardLevel2, level2Layout, 2);
  showScreen(crosswordLevel2Screen);
  startLevelTimer(2);
}

function openLevel3() {
  currentLevel = 3;
  remainingHints = 3;
  resetLevelAttemptState(3);
  updateHintDisplay();

  createLabelsLevel3();
  createBoard(crosswordBoardLevel3, level3Layout, 3);
  showScreen(crosswordLevel3Screen);
  startLevelTimer(3);
}

function leaveCrossword() {
  stopLevelTimer();
  clearCurrentWrongPreview();
  closeHintModal();
  closeExplainModal();
  closeCompleteModal();
  closeAttemptModal();
  showScreen(easyLevelsScreen);
}

startBtn?.addEventListener("click", () => {
  showScreen(playerModeScreen);
});

onePlayerBtn?.addEventListener("click", () => {
  showScreen(gameScreen);
});

twoPlayersBtn?.addEventListener("click", () => {
  openAttemptModal("Igra za dva igrača biće dostupna uskoro.");
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

level3Btn?.addEventListener("click", () => {
  openLevel3();
});

confirmLevel1Btn?.addEventListener("click", () => {
  confirmBoard(1);
});

confirmLevel2Btn?.addEventListener("click", () => {
  confirmBoard(2);
});

confirmLevel3Btn?.addEventListener("click", () => {
  confirmBoard(3);
});

backFromGame?.addEventListener("click", () => {
  showScreen(playerModeScreen);
});

backFromPlayerMode?.addEventListener("click", () => {
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

backFromCrossword3?.addEventListener("click", () => {
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

hintBtnLevel3?.addEventListener("click", () => {
  currentLevel = 3;
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

explainBtnLevel3?.addEventListener("click", () => {
  openExplainModal();
});

closeExplainBtn?.addEventListener("click", () => {
  closeExplainModal();
});

explainOverlay?.addEventListener("click", () => {
  closeExplainModal();
});

closeCompleteBtn?.addEventListener("click", () => {
  closeCompleteModal();
});

completeOverlay?.addEventListener("click", () => {
  closeCompleteModal();
});

closeAttemptBtn?.addEventListener("click", () => {
  closeAttemptModal();
});

attemptOverlay?.addEventListener("click", () => {
  closeAttemptModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSettings();
    closeHintModal();
    closeExplainModal();
    closeCompleteModal();
    closeAttemptModal();
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
updateTimerDisplay(3);
loadLevelStars();
updateHintDisplay();
