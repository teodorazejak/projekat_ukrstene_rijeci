const menuScreen = document.getElementById("menuScreen");
const playerModeScreen = document.getElementById("playerModeScreen");
const multiplayerModeScreen = document.getElementById("multiplayerModeScreen");
const battleScreen = document.getElementById("battleScreen");
const gameScreen = document.getElementById("gameScreen");
const easyLevelsScreen = document.getElementById("easyLevelsScreen");
const mediumLevelsScreen = document.getElementById("mediumLevelsScreen");
const hardLevelsScreen = document.getElementById("hardLevelsScreen");
const discoverLevelsScreen = document.getElementById("discoverLevelsScreen");
const crosswordLevel1Screen = document.getElementById("crosswordLevel1Screen");
const crosswordLevel2Screen = document.getElementById("crosswordLevel2Screen");
const crosswordLevel3Screen = document.getElementById("crosswordLevel3Screen");
const crosswordMediumLevel1Screen = document.getElementById("crosswordMediumLevel1Screen");
const crosswordMediumLevel2Screen = document.getElementById("crosswordMediumLevel2Screen");
const crosswordMediumLevel3Screen = document.getElementById("crosswordMediumLevel3Screen");
const crosswordHardLevel1Screen = document.getElementById("crosswordHardLevel1Screen");
const crosswordHardLevel2Screen = document.getElementById("crosswordHardLevel2Screen");
const crosswordHardLevel3Screen = document.getElementById("crosswordHardLevel3Screen");
const crosswordDiscoverScreen = document.getElementById("crosswordDiscoverScreen");
const howToPlayScreen = document.getElementById("howToPlayScreen");

const startBtn = document.getElementById("startBtn");
const howToBtn = document.getElementById("howToBtn");
const settingsGearBtn = document.getElementById("settingsGearBtn");
const onePlayerBtn = document.getElementById("onePlayerBtn");
const twoPlayersBtn = document.getElementById("twoPlayersBtn");
const localDuelBtn = document.getElementById("localDuelBtn");
const computerDuelBtn = document.getElementById("computerDuelBtn");
const backFromMultiplayerMode = document.getElementById("backFromMultiplayerMode");
const backFromBattle = document.getElementById("backFromBattle");

const backFromPlayerMode = document.getElementById("backFromPlayerMode");
const backFromGame = document.getElementById("backFromGame");
const backFromEasyLevels = document.getElementById("backFromEasyLevels");
const backFromMediumLevels = document.getElementById("backFromMediumLevels");
const backFromHardLevels = document.getElementById("backFromHardLevels");
const backFromDiscoverLevels = document.getElementById("backFromDiscoverLevels");
const backFromCrossword1 = document.getElementById("backFromCrossword1");
const backFromCrossword2 = document.getElementById("backFromCrossword2");
const backFromCrossword3 = document.getElementById("backFromCrossword3");
const backFromMediumCrossword1 = document.getElementById("backFromMediumCrossword1");
const backFromMediumCrossword2 = document.getElementById("backFromMediumCrossword2");
const backFromMediumCrossword3 = document.getElementById("backFromMediumCrossword3");
const backFromHardCrossword1 = document.getElementById("backFromHardCrossword1");
const backFromHardCrossword2 = document.getElementById("backFromHardCrossword2");
const backFromHardCrossword3 = document.getElementById("backFromHardCrossword3");
const backFromDiscoverCrossword = document.getElementById("backFromDiscoverCrossword");
const backFromHowToPlay = document.getElementById("backFromHowToPlay");

const confirmLevel1Btn = document.getElementById("confirmLevel1Btn");
const confirmLevel2Btn = document.getElementById("confirmLevel2Btn");
const confirmLevel3Btn = document.getElementById("confirmLevel3Btn");
const confirmMediumLevel1Btn = document.getElementById("confirmMediumLevel1Btn");
const confirmMediumLevel2Btn = document.getElementById("confirmMediumLevel2Btn");
const confirmMediumLevel3Btn = document.getElementById("confirmMediumLevel3Btn");
const confirmHardLevel1Btn = document.getElementById("confirmHardLevel1Btn");
const confirmHardLevel2Btn = document.getElementById("confirmHardLevel2Btn");
const confirmHardLevel3Btn = document.getElementById("confirmHardLevel3Btn");
const confirmDiscoverBtn = document.getElementById("confirmDiscoverBtn");

const easyBtn = document.querySelector(".diff1");
const mediumBtn = document.querySelector(".diff2");
const hardBtn = document.querySelector(".diff3");
const discoverBtn = document.querySelector(".diff4");
const level1Btn = document.querySelector(".level-box-1");
const level2Btn = document.querySelector(".level-box-2");
const level3Btn = document.querySelector(".level-box-3");
const mediumLevel1Btn = document.querySelector(".medium-level-box-1");
const mediumLevel2Btn = document.querySelector(".medium-level-box-2");
const mediumLevel3Btn = document.querySelector(".medium-level-box-3");
const hardLevel1Btn = document.querySelector(".hard-level-box-1");
const hardLevel2Btn = document.querySelector(".hard-level-box-2");
const hardLevel3Btn = document.querySelector(".hard-level-box-3");
const discoverLevelBtns = document.querySelectorAll(".discover-level-box");
const futureLevelBtns = document.querySelectorAll(".future-level-box");

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
const mediumLevel1Timer = document.getElementById("mediumLevel1Timer");
const mediumLevel2Timer = document.getElementById("mediumLevel2Timer");
const mediumLevel3Timer = document.getElementById("mediumLevel3Timer");
const hardLevel1Timer = document.getElementById("hardLevel1Timer");
const hardLevel2Timer = document.getElementById("hardLevel2Timer");
const hardLevel3Timer = document.getElementById("hardLevel3Timer");
const battlePlayerOne = document.getElementById("battlePlayerOne");
const battlePlayerTwo = document.getElementById("battlePlayerTwo");
const battlePlayerOneName = document.getElementById("battlePlayerOneName");
const battlePlayerTwoName = document.getElementById("battlePlayerTwoName");
const battlePlayerOneScore = document.getElementById("battlePlayerOneScore");
const battlePlayerTwoScore = document.getElementById("battlePlayerTwoScore");
const battlePlayerOneTime = document.getElementById("battlePlayerOneTime");
const battlePlayerTwoTime = document.getElementById("battlePlayerTwoTime");
const battleTurnText = document.getElementById("battleTurnText");
const battleRoundText = document.getElementById("battleRoundText");
const battleIntroCountdown = document.getElementById("battleIntroCountdown");
const battleIntroValue = document.getElementById("battleIntroValue");
const battleIntroClues = document.getElementById("battleIntroClues");
const battleIntroExitBtn = document.getElementById("battleIntroExitBtn");
const battleWrongMark = document.getElementById("battleWrongMark");
const battleSecretReveal = document.getElementById("battleSecretReveal");
const battleSecretRevealWord = document.getElementById("battleSecretRevealWord");
const battleClues = document.getElementById("battleClues");
const battleBoard = document.getElementById("battleBoard");
const battleSelectedClue = document.getElementById("battleSelectedClue");
const battleAnswerInput = document.getElementById("battleAnswerInput");
const battleSubmitBtn = document.getElementById("battleSubmitBtn");
const battleSkipBtn = document.getElementById("battleSkipBtn");
const battleSecretInput = document.getElementById("battleSecretInput");
const battleSecretSubmitBtn = document.getElementById("battleSecretSubmitBtn");

const starsLevel1 = document.getElementById("starsLevel1");
const starsLevel2 = document.getElementById("starsLevel2");
const starsLevel3 = document.getElementById("starsLevel3");
const starsMediumLevel1 = document.getElementById("starsMediumLevel1");
const starsMediumLevel2 = document.getElementById("starsMediumLevel2");
const starsMediumLevel3 = document.getElementById("starsMediumLevel3");
const starsHardLevel1 = document.getElementById("starsHardLevel1");
const starsHardLevel2 = document.getElementById("starsHardLevel2");
const starsHardLevel3 = document.getElementById("starsHardLevel3");

const crosswordBoard = document.getElementById("crosswordBoard");
const crosswordBoardLevel2 = document.getElementById("crosswordBoardLevel2");
const crosswordBoardLevel3 = document.getElementById("crosswordBoardLevel3");
const crosswordBoardMediumLevel1 = document.getElementById("crosswordBoardMediumLevel1");
const crosswordBoardMediumLevel2 = document.getElementById("crosswordBoardMediumLevel2");
const crosswordBoardMediumLevel3 = document.getElementById("crosswordBoardMediumLevel3");
const crosswordBoardHardLevel1 = document.getElementById("crosswordBoardHardLevel1");
const crosswordBoardHardLevel2 = document.getElementById("crosswordBoardHardLevel2");
const crosswordBoardHardLevel3 = document.getElementById("crosswordBoardHardLevel3");
const crosswordBoardDiscover = document.getElementById("crosswordBoardDiscover");
const columnLabels = document.getElementById("columnLabels");
const rowLabels = document.getElementById("rowLabels");

const columnLabelsLevel2 = document.getElementById("columnLabelsLevel2");
const rowLabelsLevel2 = document.getElementById("rowLabelsLevel2");
const columnLabelsLevel3 = document.getElementById("columnLabelsLevel3");
const rowLabelsLevel3 = document.getElementById("rowLabelsLevel3");
const columnLabelsMediumLevel1 = document.getElementById("columnLabelsMediumLevel1");
const rowLabelsMediumLevel1 = document.getElementById("rowLabelsMediumLevel1");
const columnLabelsMediumLevel2 = document.getElementById("columnLabelsMediumLevel2");
const rowLabelsMediumLevel2 = document.getElementById("rowLabelsMediumLevel2");
const columnLabelsMediumLevel3 = document.getElementById("columnLabelsMediumLevel3");
const rowLabelsMediumLevel3 = document.getElementById("rowLabelsMediumLevel3");
const columnLabelsHardLevel1 = document.getElementById("columnLabelsHardLevel1");
const rowLabelsHardLevel1 = document.getElementById("rowLabelsHardLevel1");
const columnLabelsHardLevel2 = document.getElementById("columnLabelsHardLevel2");
const rowLabelsHardLevel2 = document.getElementById("rowLabelsHardLevel2");
const columnLabelsHardLevel3 = document.getElementById("columnLabelsHardLevel3");
const rowLabelsHardLevel3 = document.getElementById("rowLabelsHardLevel3");
const columnLabelsDiscover = document.getElementById("columnLabelsDiscover");
const rowLabelsDiscover = document.getElementById("rowLabelsDiscover");
const discoverBoardWrap = document.getElementById("discoverBoardWrap");
const discoverClues = document.getElementById("discoverClues");

const hintBtn = document.getElementById("hintBtn");
const explainBtn = document.getElementById("explainBtn");
const hintBtnLevel2 = document.getElementById("hintBtnLevel2");
const explainBtnLevel2 = document.getElementById("explainBtnLevel2");
const hintBtnLevel3 = document.getElementById("hintBtnLevel3");
const explainBtnLevel3 = document.getElementById("explainBtnLevel3");
const hintBtnMediumLevel1 = document.getElementById("hintBtnMediumLevel1");
const explainBtnMediumLevel1 = document.getElementById("explainBtnMediumLevel1");
const hintBtnMediumLevel2 = document.getElementById("hintBtnMediumLevel2");
const explainBtnMediumLevel2 = document.getElementById("explainBtnMediumLevel2");
const hintBtnMediumLevel3 = document.getElementById("hintBtnMediumLevel3");
const explainBtnMediumLevel3 = document.getElementById("explainBtnMediumLevel3");
const hintBtnHardLevel1 = document.getElementById("hintBtnHardLevel1");
const explainBtnHardLevel1 = document.getElementById("explainBtnHardLevel1");
const hintBtnHardLevel2 = document.getElementById("hintBtnHardLevel2");
const explainBtnHardLevel2 = document.getElementById("explainBtnHardLevel2");
const hintBtnHardLevel3 = document.getElementById("hintBtnHardLevel3");
const explainBtnHardLevel3 = document.getElementById("explainBtnHardLevel3");
const hintBtnDiscover = document.getElementById("hintBtnDiscover");
const explainBtnDiscover = document.getElementById("explainBtnDiscover");

const coinDisplay = document.getElementById("coinDisplay");
const coinValue = document.getElementById("coinValue");

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
const noticeModal = document.getElementById("noticeModal");
const noticeOverlay = document.getElementById("noticeOverlay");
const noticeTitle = document.getElementById("noticeTitle");
const noticeMessage = document.getElementById("noticeMessage");
const closeNoticeBtn = document.getElementById("closeNoticeBtn");

const discoverCompleteModal = document.getElementById("discoverCompleteModal");
const discoverCompleteOverlay = document.getElementById("discoverCompleteOverlay");
const closeDiscoverCompleteBtn = document.getElementById("closeDiscoverCompleteBtn");
const continueDiscoverBtn = document.getElementById("continueDiscoverBtn");
const discoverCompleteTitle = document.getElementById("discoverCompleteTitle");
const discoverCompleteImage = document.getElementById("discoverCompleteImage");
const discoverCompleteFact = document.getElementById("discoverCompleteFact");
const discoverCompleteReward = document.getElementById("discoverCompleteReward");
const battleResultModal = document.getElementById("battleResultModal");
const battleResultOverlay = document.getElementById("battleResultOverlay");
const battleResultTitle = document.getElementById("battleResultTitle");
const battleResultScore = document.getElementById("battleResultScore");
const battlePlayAgainBtn = document.getElementById("battlePlayAgainBtn");
const battleResultBackBtn = document.getElementById("battleResultBackBtn");

const screens = [
  menuScreen,
  playerModeScreen,
  multiplayerModeScreen,
  battleScreen,
  gameScreen,
  easyLevelsScreen,
  mediumLevelsScreen,
  hardLevelsScreen,
  discoverLevelsScreen,
  crosswordLevel1Screen,
  crosswordLevel2Screen,
  crosswordLevel3Screen,
  crosswordMediumLevel1Screen,
  crosswordMediumLevel2Screen,
  crosswordMediumLevel3Screen,
  crosswordHardLevel1Screen,
  crosswordHardLevel2Screen,
  crosswordHardLevel3Screen,
  crosswordDiscoverScreen,
  howToPlayScreen
];

let timerInterval = null;
let currentLevel = 0;
let level1Seconds = 0;
let level2Seconds = 0;
let level3Seconds = 0;
let mediumLevel1Seconds = 0;
let mediumLevel2Seconds = 0;
let mediumLevel3Seconds = 0;
let hardLevel1Seconds = 0;
let hardLevel2Seconds = 0;
let hardLevel3Seconds = 0;
let discoverSeconds = 0;
let currentDiscoverLevel = 0;
let battleMode = "local";
let battlePuzzle = null;
let battleCurrentPlayer = 0;
let battleStartingPlayer = 0;
let battleTurnNumber = 0;
let battleSelectedEntry = -1;
let battleScores = [0, 0];
let battleTimeLeft = 20;
let battleIntroTimeLeft = 15;
let battleIsPreparing = false;
let battleTimer = null;
let battleComputerTimeout = null;
let battleForcedWinner = null;
let battleIsEnding = false;


let lastBattlePuzzleIndex = -1;
const savedCoins = localStorage.getItem("coins");
let coins = savedCoins === null ? 100 : Number(savedCoins);
if (!Number.isFinite(coins)) coins = 100;
let remainingHints = 3;
let clearWrongTimeout = null;
let audioContext = null;
let musicMaster = null;
let buttonMaster = null;
let ambientNodes = [];
let ambientStep = 0;
let ambientLoopTimeout = null;
const paidHintCost = 50;
const hintsForThirdStarPenalty = 5;

const maxWrongAttempts = 3;
const wrongPreviewDuration = 1500;
const wrongAttemptsByLevel = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0
};
const limitedStarsByLevel = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false,
  10: false
};
const hintsUsedByLevel = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0,
  8: 0,
  9: 0,
  10: 0
};

function getAudioContext() {
  if (!audioContext) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) {
      return null;
    }

    audioContext = new AudioContextClass();
    musicMaster = audioContext.createGain();
    buttonMaster = audioContext.createGain();

    musicMaster.connect(audioContext.destination);
    buttonMaster.connect(audioContext.destination);
    updateAudioVolumes();
  }

  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  return audioContext;
}

function getSliderVolume(slider) {
  return slider ? Number(slider.value) / 100 : 0;
}

function updateAudioVolumes() {
  if (musicMaster) {
    musicMaster.gain.value = getSliderVolume(musicVolume) * 0.22;
  }

  if (buttonMaster) {
    buttonMaster.gain.value = getSliderVolume(buttonSoundVolume) * 0.28;
  }
}

function loadAudioSettings() {
  const savedMusicVolume = localStorage.getItem("musicVolume");
  const savedButtonVolume = localStorage.getItem("buttonSoundVolume");

  if (musicVolume && savedMusicVolume !== null) {
    musicVolume.value = savedMusicVolume;
  }

  if (buttonSoundVolume && savedButtonVolume !== null) {
    buttonSoundVolume.value = savedButtonVolume;
  }

  if (musicVolumeValue && musicVolume) {
    musicVolumeValue.textContent = `${musicVolume.value}%`;
  }

  if (buttonSoundVolumeValue && buttonSoundVolume) {
    buttonSoundVolumeValue.textContent = `${buttonSoundVolume.value}%`;
  }
}

function startAmbientMusic() {
  const context = getAudioContext();

  if (!context || ambientNodes.length > 0) {
    return;
  }

  scheduleAmbientChord();
}

function playAmbientVoice(frequency, startTime, duration, volume) {
  const context = getAudioContext();

  if (!context || !musicMaster) {
    return;
  }

  const oscillator = context.createOscillator();
  const softOscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  oscillator.type = "sine";
  softOscillator.type = "triangle";
  oscillator.frequency.value = frequency;
  softOscillator.frequency.value = frequency;
  softOscillator.detune.value = 7;
  filter.type = "lowpass";
  filter.frequency.value = 820;
  filter.Q.value = 0.45;

  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 1.5);
  gain.gain.setValueAtTime(volume, startTime + duration - 1.8);
  gain.gain.linearRampToValueAtTime(0, startTime + duration);

  oscillator.connect(filter);
  softOscillator.connect(filter);
  filter.connect(gain);
  gain.connect(musicMaster);

  oscillator.start(startTime);
  softOscillator.start(startTime);
  oscillator.stop(startTime + duration + 0.1);
  softOscillator.stop(startTime + duration + 0.1);
  ambientNodes.push(oscillator, softOscillator);
}

function playSoftPulse(frequency, startTime) {
  const context = getAudioContext();

  if (!context || !musicMaster) {
    return;
  }

  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();

  oscillator.type = "sine";
  oscillator.frequency.value = frequency;
  filter.type = "lowpass";
  filter.frequency.value = 420;

  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(0.026, startTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.85);

  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(musicMaster);

  oscillator.start(startTime);
  oscillator.stop(startTime + 0.9);
  ambientNodes.push(oscillator);
}

function playAmbientBell(frequency, startTime, volume = 0.03) {
  const context = getAudioContext();

  if (!context || !musicMaster) {
    return;
  }

  const fundamental = context.createOscillator();
  const shimmer = context.createOscillator();
  const gain = context.createGain();
  const shimmerGain = context.createGain();
  const filter = context.createBiquadFilter();

  fundamental.type = "sine";
  shimmer.type = "sine";
  fundamental.frequency.value = frequency;
  shimmer.frequency.value = frequency * 2.01;
  filter.type = "lowpass";
  filter.frequency.value = 1800;

  gain.gain.setValueAtTime(0.001, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.65);
  shimmerGain.gain.setValueAtTime(volume * 0.28, startTime);
  shimmerGain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.75);

  fundamental.connect(gain);
  shimmer.connect(shimmerGain);
  shimmerGain.connect(filter);
  gain.connect(filter);
  filter.connect(musicMaster);

  fundamental.start(startTime);
  shimmer.start(startTime);
  fundamental.stop(startTime + 1.7);
  shimmer.stop(startTime + 0.8);
  ambientNodes.push(fundamental, shimmer);
}

function scheduleAmbientChord() {
  const context = getAudioContext();

  if (!context || !musicMaster) {
    return;
  }

  const now = context.currentTime;
  const progression = [
    { bass: 73.42, chord: [146.83, 220, 293.66, 349.23], melody: [440, 392, 349.23, 293.66] },
    { bass: 58.27, chord: [116.54, 174.61, 233.08, 293.66], melody: [349.23, 293.66, 261.63, 293.66] },
    { bass: 87.31, chord: [174.61, 261.63, 349.23, 440], melody: [392, 440, 523.25, 440] },
    { bass: 65.41, chord: [130.81, 196, 261.63, 329.63], melody: [392, 329.63, 293.66, 261.63] }
  ];
  const phrase = progression[ambientStep % progression.length];
  const start = now + 0.04;
  const duration = 8;

  phrase.chord.forEach((frequency, index) => {
    playAmbientVoice(frequency, start + index * 0.08, duration, index === 0 ? 0.016 : 0.012);
  });

  playSoftPulse(phrase.bass, start + 0.15);
  playSoftPulse(phrase.bass, start + 4.15);

  phrase.melody.forEach((frequency, index) => {
    playAmbientBell(frequency, start + 1.1 + index * 1.55, index === 0 ? 0.028 : 0.024);
  });

  ambientStep += 1;
  ambientLoopTimeout = window.setTimeout(scheduleAmbientChord, 8000);
}

function playButtonClick() {
  const context = getAudioContext();

  if (!context || !buttonMaster) {
    return;
  }

  const now = context.currentTime;
  const lowTap = context.createOscillator();
  const highTap = context.createOscillator();
  const lowGain = context.createGain();
  const highGain = context.createGain();
  const woodFilter = context.createBiquadFilter();

  woodFilter.type = "lowpass";
  woodFilter.frequency.value = 1200;
  woodFilter.Q.value = 0.8;

  lowTap.type = "triangle";
  lowTap.frequency.value = 210;
  lowGain.gain.setValueAtTime(0.26, now);
  lowGain.gain.exponentialRampToValueAtTime(0.001, now + 0.055);

  highTap.type = "triangle";
  highTap.frequency.value = 520;
  highGain.gain.setValueAtTime(0.12, now);
  highGain.gain.exponentialRampToValueAtTime(0.001, now + 0.028);

  lowTap.connect(lowGain);
  highTap.connect(highGain);
  lowGain.connect(woodFilter);
  highGain.connect(woodFilter);
  woodFilter.connect(buttonMaster);

  lowTap.start(now);
  lowTap.stop(now + 0.06);
  highTap.start(now);
  highTap.stop(now + 0.035);
}

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

const mediumLevel1Layout = [
  ["P", "L", "A", "N", "E", "T", "A"],
  ["L", null, null, null, null, null, null],
  ["A", "V", "I", "O", "N", null, null],
  ["N", null, null, null, null, null, null],
  ["I", "S", "T", "O", "K", null, null],
  ["N", null, null, null, null, null, null],
  ["A", "D", "R", "E", "S", "A", null]
];

const mediumLevel2Layout = [
  ["K", "O", "M", "P", "A", "S", null],
  [null, null, null, "R", null, null, null],
  [null, "A", "V", "I", "O", "N", null],
  [null, null, null, "R", null, null, null],
  [null, "B", "R", "O", "D", null, null],
  [null, null, null, "D", null, null, null],
  ["O", "B", "L", "A", "K", null, null]
];

const mediumLevel3Layout = [
  ["B", "R", "E", "Z", "A", null, null, null],
  [null, null, null, "A", null, null, null, null],
  [null, "M", "A", "G", "L", "A", null, null],
  [null, null, null, "O", null, null, null, null],
  [null, null, null, "N", null, null, null, null],
  [null, "V", "J", "E", "T", "A", "R", null],
  [null, null, null, "T", null, null, null, null],
  ["S", "L", "I", "K", "A", null, null, null],
  [null, null, "T", "A", "L", "A", "S", null]
];

const hardLevel1Layout = [
  [null, null, "M", "I", "N", "E", "R", "A", "L"],
  [null, null, null, null, null, null, null, "S", null],
  ["V", "U", "L", "K", "A", "N", null, "T", null],
  [null, null, null, "O", null, null, null, "R", null],
  [null, null, null, "M", "E", "T", "E", "O", "R"],
  [null, "P", null, "E", null, null, null, "N", null],
  ["K", "R", "A", "T", "E", "R", null, "O", null],
  [null, "I", null, "A", null, null, null, "M", null],
  [null, "Z", null, null, null, null, null, null, null],
  [null, "M", null, null, null, null, null, null, null],
  ["G", "A", "L", "A", "K", "S", "I", "J", "A"]
];

const hardLevel2Layout = [
  [null, null, null, "F", "O", "R", "M", "U", "L", "A"],
  [null, null, null, null, null, null, null, null, null, "L"],
  [null, null, null, null, null, null, null, "R", null, "G"],
  [null, null, null, null, "S", null, null, "E", null, "O"],
  [null, null, null, null, "V", null, null, "A", null, "R"],
  ["C", "E", "L", "I", "J", "A", null, "K", null, "I"],
  [null, null, null, null, "E", null, null, "C", null, "T"],
  [null, "B", "A", "K", "T", "E", "R", "I", "J", "A"],
  [null, null, null, null, "L", null, null, "J", null, "M"],
  ["P", "R", "O", "T", "O", "N", null, "A", null, null],
  [null, null, null, null, "S", null, null, null, null, null],
  ["E", "L", "E", "K", "T", "R", "O", "N", null, null]
];

const hardLevel3Layout = [
  [null, "K", "U", "L", "T", "U", "R", "A", null, null, null],
  [null, "R", null, null, null, null, null, null, null, null, null],
  ["B", "I", "O", "L", "O", "G", "I", "J", "A", null, null],
  [null, "P", null, null, null, null, null, null, "R", null, null],
  [null, "T", null, null, null, null, null, null, "H", null, "N"],
  [null, "O", null, "M", "E", "M", "O", "R", "I", "J", "A"],
  [null, "G", null, null, null, null, null, null, "T", null, "U"],
  ["P", "R", "O", "G", "R", "A", "M", null, "E", null, "Č"],
  [null, "A", null, null, null, null, null, null, "K", null, "N"],
  [null, "F", null, null, null, null, null, null, "T", null, "I"],
  [null, null, "T", "E", "H", "N", "I", "K", "A", null, "K"]
];

const discoverLevels = [
  {
    word: "SARKOFAG",
    image: "assets/discover-sarkofag.png",
    fact: "Sarkofazi su često bili ukrašeni simbolima i zapisima koji su trebali štititi pokojnika na putovanju u zagrobni život.",
    entries: [
      ["MOST", "PRELAZ PREKO RIJEKE", 2],
      ["SAT", "POKAZUJE VRIJEME", 1],
      ["MORE", "VELIKA SLANA VODENA POVRŠINA", 2],
      ["OKO", "ORGAN VIDA", 1],
      ["VODA", "TEČNOST BEZ KOJE NEMA ŽIVOTA", 1],
      ["KAFA", "TOPLI NAPITAK OD PRŽENIH ZRNA", 2],
      ["LAV", "VELIKA MAČKA SA GRIVOM", 1],
      ["TIGAR", "PRUGASTA VELIKA MAČKA", 2]
    ]
  },
  {
    word: "SFINGA",
    image: "assets/discover-sfinga.png",
    fact: "Velika sfinga u Gizi ima tijelo lava i ljudsku glavu, a isklesana je iz jednog prirodnog krečnjačkog grebena.",
    entries: [
      ["PISMO", "PORUKA POSLANA NA PAPIRU", 2],
      ["KOFER", "U NJEMU NOSIMO STVARI NA PUT", 2],
      ["KIST", "NJIME SLIKAR NANOSI BOJU", 1],
      ["PANO", "PLOČA ZA IZLAGANJE OBAVJEŠTENJA", 2],
      ["TEG", "KORISTI SE ZA VJEŽBANJE SNAGE", 2],
      ["ČAJ", "TOPLI NAPITAK OD BILJAKA", 1]
    ]
  },
  {
    word: "TETRAEDAR",
    image: "assets/discover-tetraedar.png",
    fact: "Tetraedar je najjednostavnije geometrijsko tijelo: ima četiri trouglaste strane, četiri vrha i šest ivica.",
    entries: [
      ["PUT", "PRAVAC KOJIM SE STIŽE DO CILJA", 2],
      ["MED", "SLATKI PROIZVOD PČELA", 1],
      ["KUTIJA", "PREDMET ZA ČUVANJE STVARI", 2],
      ["KROV", "GORNJI DIO KUĆE", 1],
      ["DASKA", "RAVAN KOMAD DRVETA", 1],
      ["PERO", "PREKRIVA TIJELO PTICE", 1],
      ["VODIČ", "OSOBA KOJA POKAZUJE PUT", 2],
      ["ZMAJ", "LETJELICA OD PAPIRA NA KONCU", 2],
      ["TORBA", "U NJOJ NOSIMO PREDMETE", 2]
    ]
  },
  {
    word: "DIONIS",
    image: "assets/discover-dionis.png",
    fact: "Dionis je u grčkoj mitologiji bio bog vinove loze, pozorišta i svečanosti, a njegovi pratioci često nose vijence od bršljana.",
    entries: [
      ["BOD", "POEN U IGRI ILI TAKMIČENJU", 2],
      ["MIR", "STANJE BEZ SUKOBA", 1],
      ["DOM", "MJESTO U KOJEM ŽIVIMO", 1],
      ["PONOĆ", "SREDINA NOĆI", 2],
      ["SIR", "MLIJEČNI PROIZVOD", 1],
      ["KOSA", "RASTE NA GLAVI", 2]
    ]
  },
  {
    word: "PIRANA",
    image: "assets/discover-pirana.png",
    fact: "Pirane žive u rijekama Južne Amerike. Iako imaju oštre zube, mnoge vrste jedu i biljke, sjemenke ili plodove.",
    entries: [
      ["KAP", "MALA KOLIČINA TEČNOSTI", 2],
      ["ZIMA", "NAJHLADNIJE GODIŠNJE DOBA", 1],
      ["BROJ", "MATEMATIČKI ZNAK ZA KOLIČINU", 1],
      ["DAN", "VRIJEME OD JUTRA DO VEČERI", 1],
      ["KONJ", "DOMAĆA ŽIVOTINJA ZA JAHANJE", 2],
      ["GRAD", "VELIKO NASELJENO MJESTO", 2]
    ]
  }
];

const battlePuzzleBank = [
  {
    secret: "AVANTURA",
    entries: [
      ["MAPA", "PRIKAZ MJESTA I PUTEVA", 1],
      ["AVION", "PREVOZNO SREDSTVO KOJE LETI", 1],
      ["GRAD", "VELIKO NASELJENO MJESTO", 2],
      ["PLANINA", "VISOKO PRIRODNO UZVIŠENJE", 3],
      ["MOST", "SPAJA DVIJE OBALE", 3],
      ["SUNCE", "ZVIJEZDA KOJA GRIJE ZEMLJU", 1],
      ["MORE", "VELIKA POVRŠINA SLANE VODE", 2],
      ["ZMAJ", "BAJKOVITO BIĆE KOJE BLJUJE VATRU", 2]
    ]
  },
  {
    secret: "ISTORIJA",
    entries: [
      ["SIR", "MLIJEČNI PROIZVOD", 1],
      ["KOSA", "RASTE NA GLAVI", 2],
      ["PUT", "NJIME SE STIŽE DO ODREDIŠTA", 2],
      ["MORE", "VELIKA POVRŠINA SLANE VODE", 1],
      ["DRVO", "BILJKA SA STABLOM I KROŠNJOM", 1],
      ["KIST", "NJIME SLIKAR NANOSI BOJU", 1],
      ["ZMAJ", "BAJKOVITO BIĆE SA KRILIMA", 3],
      ["LAV", "VELIKA MAČKA SA GRIVOM", 1]
    ]
  },
  {
    secret: "UMJETNIK",
    entries: [
      ["SUNCE", "ZVIJEZDA U SREDIŠTU NAŠEG SISTEMA", 1],
      ["MORE", "SLANA VODA IZMEĐU KOPNA", 0],
      ["ZMAJ", "LETJELICA OD PAPIRA I KONCA", 3],
      ["PERO", "PTIČIJI POKRIVAČ", 1],
      ["PUT", "TRASA KOJOM SE KREĆEMO", 2],
      ["PLANINA", "VISOKO PRIRODNO UZVIŠENJE", 3],
      ["KIST", "ALAT ZA SLIKANJE", 1],
      ["OBLAK", "BIJELA ILI SIVA MASA NA NEBU", 4]
    ]
  },
  {
    secret: "SVEMIR",
    entries: [
      ["SUNCE", "ZVIJEZDA U SREDIŠTU NAŠEG SISTEMA", 0],
      ["VODA", "TEČNOST KOJU PIJEMO", 0],
      ["MORE", "VELIKA POVRŠINA SLANE VODE", 3],
      ["DOM", "MJESTO U KOJEM ŽIVIMO", 2],
      ["SIR", "MLIJEČNI PROIZVOD", 1],
      ["GRAD", "VELIKO NASELJENO MJESTO", 1]
    ]
  },
  {
    secret: "MUZIKA",
    entries: [
      ["DOM", "MJESTO U KOJEM ŽIVIMO", 2],
      ["SUNCE", "ZVIJEZDA KOJA GRIJE ZEMLJU", 1],
      ["ZMAJ", "BAJKOVITO BIĆE SA KRILIMA", 0],
      ["KIST", "ALAT ZA SLIKANJE", 1],
      ["KNJIGA", "U NJOJ ČITAMO PRIČE", 0],
      ["MAPA", "PRIKAZ MJESTA I PUTEVA", 1]
    ]
  },
  {
    secret: "PRIRODA",
    entries: [
      ["KAP", "MALA KOLIČINA TEČNOSTI", 2],
      ["DRVO", "BILJKA SA STABLOM I KROŠNJOM", 1],
      ["SIR", "MLIJEČNI PROIZVOD", 1],
      ["MORE", "VELIKA POVRŠINA SLANE VODE", 2],
      ["DOM", "MJESTO U KOJEM ŽIVIMO", 1],
      ["VODA", "TEČNOST BEZ KOJE NEMA ŽIVOTA", 2],
      ["MAPA", "PRIKAZ MJESTA I PUTEVA", 1]
    ]
  },
  {
    secret: "ZAGONETKA",
    entries: [
      ["ZMAJ", "BAJKOVITO BIĆE SA KRILIMA", 0],
      ["KAP", "MALA KOLIČINA TEČNOSTI", 1],
      ["GRAD", "VELIKO NASELJENO MJESTO", 0],
      ["DOM", "MJESTO U KOJEM ŽIVIMO", 1],
      ["PLANINA", "VISOKO PRIRODNO UZVIŠENJE", 3],
      ["PERO", "PTIČIJI POKRIVAČ", 1],
      ["PUT", "NJIME SE STIŽE DO ODREDIŠTA", 2],
      ["KIST", "ALAT ZA SLIKANJE", 0],
      ["MAPA", "PRIKAZ MJESTA I PUTEVA", 1]
    ]
  }
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

  const screensWithoutCoins = new Set([multiplayerModeScreen, battleScreen]);
  coinDisplay?.classList.toggle("hidden", screensWithoutCoins.has(screen));

  window.requestAnimationFrame(positionCoinDisplay);
}

function positionCoinDisplay() {
  if (!coinDisplay) {
    return;
  }

  const activeImage = document.querySelector(".screen.active .menu-image");

  if (!activeImage) {
    return;
  }

  const imageBounds = activeImage.getBoundingClientRect();
  const isParchmentScreen = activeImage.getAttribute("src")?.includes("pergament");
  const rightInset = isParchmentScreen ? 125 : 22;
  const bottomInset = isParchmentScreen ? 72 : 22;

  coinDisplay.style.right = `${window.innerWidth - imageBounds.right + rightInset}px`;
  coinDisplay.style.bottom = `${window.innerHeight - imageBounds.bottom + bottomInset}px`;
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
    completeModal.classList.remove("celebrate");
    void completeModal.offsetWidth;
    completeModal.classList.add("celebrate");
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

function openNoticeModal(title, message) {
  if (noticeTitle) noticeTitle.textContent = title;
  if (noticeMessage) noticeMessage.textContent = message;
  noticeModal?.classList.add("active");
}

function closeNoticeModal() {
  noticeModal?.classList.remove("active");
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
  hintsUsedByLevel[level] = 0;
  clearCurrentWrongPreview();
}

function updateHintDisplay() {
  if (hintCountValue) {
    hintCountValue.textContent = remainingHints > 0
      ? remainingHints
      : `0 — sljedeći hint košta ${paidHintCost} parica`;
  }

  if (useHintBtn) {
    useHintBtn.textContent = remainingHints > 0
      ? "POPUNI RANDOM POLJE"
      : `KUPI HINT ZA ${paidHintCost} PARICA`;
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

  if (level === 4 && mediumLevel1Timer) {
    mediumLevel1Timer.textContent = formatTime(mediumLevel1Seconds);
  }

  if (level === 5 && mediumLevel2Timer) {
    mediumLevel2Timer.textContent = formatTime(mediumLevel2Seconds);
  }

  if (level === 6 && mediumLevel3Timer) {
    mediumLevel3Timer.textContent = formatTime(mediumLevel3Seconds);
  }
  if (level === 7 && hardLevel1Timer) hardLevel1Timer.textContent = formatTime(hardLevel1Seconds);
  if (level === 8 && hardLevel2Timer) hardLevel2Timer.textContent = formatTime(hardLevel2Seconds);
  if (level === 9 && hardLevel3Timer) hardLevel3Timer.textContent = formatTime(hardLevel3Seconds);
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

  if (level === 4) {
    mediumLevel1Seconds = 0;
    updateTimerDisplay(4);
  }

  if (level === 5) {
    mediumLevel2Seconds = 0;
    updateTimerDisplay(5);
  }

  if (level === 6) {
    mediumLevel3Seconds = 0;
    updateTimerDisplay(6);
  }
  if (level === 7) { hardLevel1Seconds = 0; updateTimerDisplay(7); }
  if (level === 8) { hardLevel2Seconds = 0; updateTimerDisplay(8); }
  if (level === 9) { hardLevel3Seconds = 0; updateTimerDisplay(9); }

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

    if (currentLevel === 4) {
      mediumLevel1Seconds += 1;
      updateTimerDisplay(4);
    }

    if (currentLevel === 5) {
      mediumLevel2Seconds += 1;
      updateTimerDisplay(5);
    }

    if (currentLevel === 6) {
      mediumLevel3Seconds += 1;
      updateTimerDisplay(6);
    }
    if (currentLevel === 7) { hardLevel1Seconds += 1; updateTimerDisplay(7); }
    if (currentLevel === 8) { hardLevel2Seconds += 1; updateTimerDisplay(8); }
    if (currentLevel === 9) { hardLevel3Seconds += 1; updateTimerDisplay(9); }
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

function updateCoinDisplay() {
  if (coinValue) coinValue.textContent = coins;
  localStorage.setItem("coins", String(coins));
}

function addCoins(amount) {
  coins += amount;
  updateCoinDisplay();
}

function spendCoins(amount) {
  if (coins < amount) {
    openAttemptModal(`Nemaš dovoljno parica. Za ponovno igranje treba ti ${amount} parica.`);
    return false;
  }

  coins -= amount;
  updateCoinDisplay();
  return true;
}

function getLevelKey(level) {
  const keys = [
    "",
    "level1Stars", "level2Stars", "level3Stars",
    "mediumLevel1Stars", "mediumLevel2Stars", "mediumLevel3Stars",
    "hardLevel1Stars", "hardLevel2Stars", "hardLevel3Stars"
  ];
  return keys[level] || "";
}

function isStandardLevelUnlocked(level) {
  if (level === 1 || level === 4 || level === 7) {
    return true;
  }

  return Number(localStorage.getItem(getLevelKey(level - 1))) > 0;
}

function updateLevelLocks() {
  const levelButtons = [
    null,
    level1Btn, level2Btn, level3Btn,
    mediumLevel1Btn, mediumLevel2Btn, mediumLevel3Btn,
    hardLevel1Btn, hardLevel2Btn, hardLevel3Btn
  ];

  for (let level = 1; level <= 9; level++) {
    const button = levelButtons[level];
    const unlocked = isStandardLevelUnlocked(level);

    if (!button) continue;
    button.classList.toggle("locked", !unlocked);
    button.setAttribute("aria-disabled", String(!unlocked));
    button.title = unlocked ? `Otvori level ${((level - 1) % 3) + 1}` : "Prvo završi prethodni level";
  }
}

function openStandardLevel(level, openLevel) {
  if (!isStandardLevelUnlocked(level)) {
    openAttemptModal("Prvo završi prethodni level da bi otključao/la ovaj.");
    return;
  }

  const completed = Number(localStorage.getItem(getLevelKey(level))) > 0;
  const replayCost = level <= 3 ? 10 : level <= 6 ? 15 : 20;

  if (completed && !spendCoins(replayCost)) return;
  openLevel();
}

function loadLevelStars() {
  const savedLevel1Stars = Number(localStorage.getItem("level1Stars")) || 0;
  const savedLevel2Stars = Number(localStorage.getItem("level2Stars")) || 0;
  const savedLevel3Stars = Number(localStorage.getItem("level3Stars")) || 0;
  const savedMediumLevel1Stars = Number(localStorage.getItem("mediumLevel1Stars")) || 0;
  const savedMediumLevel2Stars = Number(localStorage.getItem("mediumLevel2Stars")) || 0;
  const savedMediumLevel3Stars = Number(localStorage.getItem("mediumLevel3Stars")) || 0;
  const savedHardLevel1Stars = Number(localStorage.getItem("hardLevel1Stars")) || 0;
  const savedHardLevel2Stars = Number(localStorage.getItem("hardLevel2Stars")) || 0;
  const savedHardLevel3Stars = Number(localStorage.getItem("hardLevel3Stars")) || 0;

  setStars(starsLevel1, savedLevel1Stars);
  setStars(starsLevel2, savedLevel2Stars);
  setStars(starsLevel3, savedLevel3Stars);
  setStars(starsMediumLevel1, savedMediumLevel1Stars);
  setStars(starsMediumLevel2, savedMediumLevel2Stars);
  setStars(starsMediumLevel3, savedMediumLevel3Stars);
  setStars(starsHardLevel1, savedHardLevel1Stars);
  setStars(starsHardLevel2, savedHardLevel2Stars);
  setStars(starsHardLevel3, savedHardLevel3Stars);
  updateLevelLocks();
}

function resetProgress() {
  localStorage.removeItem("level1Stars");
  localStorage.removeItem("level2Stars");
  localStorage.removeItem("level3Stars");
  localStorage.removeItem("mediumLevel1Stars");
  localStorage.removeItem("mediumLevel2Stars");
  localStorage.removeItem("mediumLevel3Stars");
  localStorage.removeItem("hardLevel1Stars");
  localStorage.removeItem("hardLevel2Stars");
  localStorage.removeItem("hardLevel3Stars");
  discoverLevels.forEach((_, index) => {
    localStorage.removeItem(`discoverLevel${index + 1}Complete`);
  });

  setStars(starsLevel1, 0);
  setStars(starsLevel2, 0);
  setStars(starsLevel3, 0);
  setStars(starsMediumLevel1, 0);
  setStars(starsMediumLevel2, 0);
  setStars(starsMediumLevel3, 0);
  setStars(starsHardLevel1, 0);
  setStars(starsHardLevel2, 0);
  setStars(starsHardLevel3, 0);

  remainingHints = 3;
  level1Seconds = 0;
  level2Seconds = 0;
  level3Seconds = 0;
  mediumLevel1Seconds = 0;
  mediumLevel2Seconds = 0;
  mediumLevel3Seconds = 0;
  hardLevel1Seconds = 0;
  hardLevel2Seconds = 0;
  hardLevel3Seconds = 0;
  discoverSeconds = 0;
  coins = 100;
  wrongAttemptsByLevel[1] = 0;
  wrongAttemptsByLevel[2] = 0;
  wrongAttemptsByLevel[3] = 0;
  wrongAttemptsByLevel[4] = 0;
  wrongAttemptsByLevel[5] = 0;
  wrongAttemptsByLevel[6] = 0;
  wrongAttemptsByLevel[7] = 0;
  wrongAttemptsByLevel[8] = 0;
  wrongAttemptsByLevel[9] = 0;
  wrongAttemptsByLevel[10] = 0;
  limitedStarsByLevel[1] = false;
  limitedStarsByLevel[2] = false;
  limitedStarsByLevel[3] = false;
  limitedStarsByLevel[4] = false;
  limitedStarsByLevel[5] = false;
  limitedStarsByLevel[6] = false;
  limitedStarsByLevel[7] = false;
  limitedStarsByLevel[8] = false;
  limitedStarsByLevel[9] = false;
  limitedStarsByLevel[10] = false;
  Object.keys(hintsUsedByLevel).forEach((level) => {
    hintsUsedByLevel[level] = 0;
  });

  updateTimerDisplay(1);
  updateTimerDisplay(2);
  updateTimerDisplay(3);
  updateTimerDisplay(4);
  updateTimerDisplay(5);
  updateTimerDisplay(6);
  updateTimerDisplay(7);
  updateTimerDisplay(8);
  updateTimerDisplay(9);
  updateTimerDisplay(10);
  updateHintDisplay();
  updateCoinDisplay();
  updateLevelLocks();

  closeSettings();
  openNoticeModal("PROGRESS OBRISAN", "Igra je uspješno vraćena na početno stanje.");
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
  } else if (level === 4) {
    seconds = mediumLevel1Seconds;
    levelKey = "mediumLevel1Stars";
    starsContainer = starsMediumLevel1;
  } else if (level === 5) {
    seconds = mediumLevel2Seconds;
    levelKey = "mediumLevel2Stars";
    starsContainer = starsMediumLevel2;
  } else if (level === 6) {
    seconds = mediumLevel3Seconds;
    levelKey = "mediumLevel3Stars";
    starsContainer = starsMediumLevel3;
  } else if (level === 7) {
    seconds = hardLevel1Seconds;
    levelKey = "hardLevel1Stars";
    starsContainer = starsHardLevel1;
  } else if (level === 8) {
    seconds = hardLevel2Seconds;
    levelKey = "hardLevel2Stars";
    starsContainer = starsHardLevel2;
  } else if (level === 9) {
    seconds = hardLevel3Seconds;
    levelKey = "hardLevel3Stars";
    starsContainer = starsHardLevel3;
  }

  const wasCompleted = Number(localStorage.getItem(levelKey)) > 0;
  let earnedStars = getStarsFromTime(seconds);

  if (hintsUsedByLevel[level] >= hintsForThirdStarPenalty) {
    earnedStars = Math.min(earnedStars, 2);
  }

  if (limitedStarsByLevel[level]) {
    earnedStars = Math.min(earnedStars, 1);
  }
  saveLevelStars(levelKey, earnedStars);
  setStars(starsContainer, earnedStars);
  updateLevelLocks();

  const firstReward = level <= 3 ? 15 : level <= 6 ? 25 : 35;
  addCoins(wasCompleted ? 5 : firstReward);

  showScreen(level >= 7 ? hardLevelsScreen : level >= 4 ? mediumLevelsScreen : easyLevelsScreen);
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

  if (level === 4) {
    return crosswordBoardMediumLevel1;
  }

  if (level === 5) {
    return crosswordBoardMediumLevel2;
  }

  if (level === 6) {
    return crosswordBoardMediumLevel3;
  }
  if (level === 7) return crosswordBoardHardLevel1;
  if (level === 8) return crosswordBoardHardLevel2;
  if (level === 9) return crosswordBoardHardLevel3;
  if (level === 10) return crosswordBoardDiscover;

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
    if (level === 10) {
      finishDiscoverLevel();
    } else {
      finishLevel(level);
    }
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

  const emptyCells = getPlayableCells(boardElement).filter((cell) => {
    return cell.value.trim() === "";
  });

  if (emptyCells.length === 0) {
    closeHintModal();
    return;
  }

  const usesPaidHint = remainingHints <= 0;
  if (usesPaidHint && !spendCoins(paidHintCost)) {
    closeHintModal();
    return;
  }

  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  const chosenCell = emptyCells[randomIndex];

  chosenCell.value = chosenCell.dataset.solution;
  chosenCell.classList.remove("wrong");
  chosenCell.classList.add("correct");
  hintsUsedByLevel[currentLevel] += 1;

  if (!usesPaidHint) {
    remainingHints -= 1;
  }
  updateHintDisplay();
  closeHintModal();

  if (hintsUsedByLevel[currentLevel] === hintsForThirdStarPenalty) {
    openNoticeModal(
      "TREĆA ZVJEZDICA IZGUBLJENA",
      "Iskoristio/la si 5 hintova na ovom levelu, pa sada možeš osvojiti najviše 2 zvjezdice."
    );
  }
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
      input.maxLength = 2;
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

        input.addEventListener("input", (event) => {
          if (event.isComposing) {
            return;
          }

          input.value = input.value
            .normalize("NFC")
            .toUpperCase()
            .replace(/[^A-Z\u010C\u0106\u017D\u0160\u0110]/g, "")
            .slice(0, 1);
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

function createMediumLabels(columnContainer, rowContainer, columns, rows) {
  if (columnContainer) {
    columnContainer.innerHTML = "";
    for (let i = 1; i <= columns; i++) {
      const label = document.createElement("div");
      label.className = "column-label";
      label.textContent = i;
      columnContainer.appendChild(label);
    }
  }

  if (rowContainer) {
    rowContainer.innerHTML = "";
    for (let i = 1; i <= rows; i++) {
      const label = document.createElement("div");
      label.className = "row-label";
      label.textContent = i;
      rowContainer.appendChild(label);
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

function openMediumLevel1() {
  currentLevel = 4;
  remainingHints = 3;
  resetLevelAttemptState(4);
  updateHintDisplay();
  createMediumLabels(columnLabelsMediumLevel1, rowLabelsMediumLevel1, 7, 7);
  createBoard(crosswordBoardMediumLevel1, mediumLevel1Layout, 4);
  showScreen(crosswordMediumLevel1Screen);
  startLevelTimer(4);
}

function openMediumLevel2() {
  currentLevel = 5;
  remainingHints = 3;
  resetLevelAttemptState(5);
  updateHintDisplay();
  createMediumLabels(columnLabelsMediumLevel2, rowLabelsMediumLevel2, 7, 7);
  createBoard(crosswordBoardMediumLevel2, mediumLevel2Layout, 5);
  showScreen(crosswordMediumLevel2Screen);
  startLevelTimer(5);
}

function openMediumLevel3() {
  currentLevel = 6;
  remainingHints = 3;
  resetLevelAttemptState(6);
  updateHintDisplay();
  createMediumLabels(columnLabelsMediumLevel3, rowLabelsMediumLevel3, 8, 9);
  createBoard(crosswordBoardMediumLevel3, mediumLevel3Layout, 6);
  showScreen(crosswordMediumLevel3Screen);
  startLevelTimer(6);
}

function openHardLevel(level, board, layout, screen, columns, rows, columnContainer, rowContainer) {
  currentLevel = level;
  remainingHints = 3;
  resetLevelAttemptState(level);
  updateHintDisplay();
  createMediumLabels(columnContainer, rowContainer, columns, rows);
  createBoard(board, layout, level);
  showScreen(screen);
  startLevelTimer(level);
}

function openHardLevel1() {
  openHardLevel(7, crosswordBoardHardLevel1, hardLevel1Layout, crosswordHardLevel1Screen, 9, 11, columnLabelsHardLevel1, rowLabelsHardLevel1);
}

function openHardLevel2() {
  openHardLevel(8, crosswordBoardHardLevel2, hardLevel2Layout, crosswordHardLevel2Screen, 10, 12, columnLabelsHardLevel2, rowLabelsHardLevel2);
}

function openHardLevel3() {
  openHardLevel(9, crosswordBoardHardLevel3, hardLevel3Layout, crosswordHardLevel3Screen, 11, 11, columnLabelsHardLevel3, rowLabelsHardLevel3);
}

function buildDiscoverLayout(levelData) {
  const left = Math.max(...levelData.entries.map((entry) => entry[2]));
  const right = Math.max(...levelData.entries.map((entry) => entry[0].length - entry[2] - 1));
  const columns = left + right + 1;
  const secretColumn = left;

  const layout = levelData.entries.map(([answer, , secretIndex]) => {
    const row = Array(columns).fill(null);
    const start = secretColumn - secretIndex;
    [...answer].forEach((letter, index) => {
      row[start + index] = letter;
    });
    return row;
  });

  return { layout, columns, rows: layout.length, secretColumn };
}

function openDiscoverLevel(index) {
  const levelData = discoverLevels[index];
  const completed = localStorage.getItem(`discoverLevel${index + 1}Complete`) === "true";

  if (completed && !spendCoins(20)) return;

  currentDiscoverLevel = index;
  currentLevel = 10;
  remainingHints = 3;
  resetLevelAttemptState(10);
  updateHintDisplay();

  const { layout, columns, rows, secretColumn } = buildDiscoverLayout(levelData);
  createMediumLabels(columnLabelsDiscover, rowLabelsDiscover, columns, rows);
  createBoard(crosswordBoardDiscover, layout, 10);

  crosswordBoardDiscover.style.gridTemplateColumns = `repeat(${columns}, 38px)`;
  crosswordBoardDiscover.style.gridTemplateRows = `repeat(${rows}, 38px)`;
  columnLabelsDiscover.style.gridTemplateColumns = `repeat(${columns}, 38px)`;
  rowLabelsDiscover.style.gridTemplateRows = `repeat(${rows}, 38px)`;

  [...crosswordBoardDiscover.querySelectorAll(".crossword-cell:not(.blocked)")].forEach((cell) => {
    if (Number(cell.dataset.col) === secretColumn + 1) {
      cell.classList.add("secret-cell");
    }
  });

  if (discoverClues) {
    discoverClues.innerHTML = "<h3>VODORAVNO:</h3>";
    levelData.entries.forEach(([answer, clue, secretIndex], rowIndex) => {
      const startColumn = secretColumn - secretIndex + 1;
      const paragraph = document.createElement("p");
      paragraph.textContent = `(${rowIndex + 1},${startColumn}) ${clue}`;
      discoverClues.appendChild(paragraph);
    });
  }

  showScreen(crosswordDiscoverScreen);
}

function closeDiscoverComplete() {
  discoverCompleteModal?.classList.remove("active");
}

function finishDiscoverLevel() {
  stopLevelTimer();
  const levelData = discoverLevels[currentDiscoverLevel];
  const storageKey = `discoverLevel${currentDiscoverLevel + 1}Complete`;
  const wasCompleted = localStorage.getItem(storageKey) === "true";
  const reward = wasCompleted ? 5 : 40;

  localStorage.setItem(storageKey, "true");
  addCoins(reward);

  if (discoverCompleteTitle) discoverCompleteTitle.textContent = levelData.word;
  if (discoverCompleteImage) {
    discoverCompleteImage.src = levelData.image;
    discoverCompleteImage.alt = levelData.word;
  }
  if (discoverCompleteFact) discoverCompleteFact.textContent = levelData.fact;
  if (discoverCompleteReward) {
    discoverCompleteReward.textContent = `Nagrada: +${reward} parica`;
  }

  showScreen(discoverLevelsScreen);
  discoverCompleteModal?.classList.add("active");
}

function normalizeBattleAnswer(value) {
  return value
    .normalize("NFC")
    .toUpperCase()
    .replace(/[^A-ZČĆŽŠĐ]/g, "");
}

function getBattlePuzzle() {
  let puzzleIndex = Math.floor(Math.random() * battlePuzzleBank.length);

  if (battlePuzzleBank.length > 1 && puzzleIndex === lastBattlePuzzleIndex) {
    puzzleIndex = (puzzleIndex + 1) % battlePuzzleBank.length;
  }

  lastBattlePuzzleIndex = puzzleIndex;
  const puzzle = battlePuzzleBank[puzzleIndex];
  const isValid = puzzle.secret.length === puzzle.entries.length
    && puzzle.entries.every(([answer, , secretIndex], row) => {
      return answer[secretIndex] === puzzle.secret[row];
    });

  if (!isValid) {
    throw new Error("Neispravna takmičarska ukrštenica.");
  }

  const left = Math.max(...puzzle.entries.map((entry) => entry[2]));
  const right = Math.max(...puzzle.entries.map((entry) => entry[0].length - entry[2] - 1));
  const columns = left + right + 1;
  const secretColumn = left;
  const rows = puzzle.entries.map(([answer, clue, secretIndex], index) => ({
    answer,
    clue,
    index,
    start: secretColumn - secretIndex,
    solved: false
  }));

  return { ...puzzle, columns, secretColumn, rows };
}

function renderBattlePuzzle() {
  if (!battlePuzzle || !battleBoard || !battleClues) return;

  battleBoard.innerHTML = "";
  battleClues.innerHTML = "<h3>IZABERI RIJEČ:</h3>";
  battleBoard.style.gridTemplateColumns = `repeat(${battlePuzzle.columns}, 40px)`;
  battleBoard.style.gridTemplateRows = `repeat(${battlePuzzle.rows.length}, 40px)`;

  battlePuzzle.rows.forEach((entry, rowIndex) => {
    for (let col = 0; col < battlePuzzle.columns; col++) {
      const cell = document.createElement("div");
      const answerIndex = col - entry.start;
      cell.className = "battle-cell";
      cell.dataset.entry = rowIndex;

      if (answerIndex < 0 || answerIndex >= entry.answer.length) {
        cell.classList.add("blocked");
      } else {
        cell.dataset.letter = entry.answer[answerIndex];
        if (col === battlePuzzle.secretColumn) {
          cell.classList.add("secret");
        }
      }

      battleBoard.appendChild(cell);
    }

    const clueButton = document.createElement("button");
    clueButton.type = "button";
    clueButton.className = "battle-clue-btn";
    clueButton.dataset.entry = rowIndex;
    clueButton.textContent = `${rowIndex + 1}. ${entry.clue} (${entry.answer.length})`;
    clueButton.addEventListener("click", () => selectBattleEntry(rowIndex));
    battleClues.appendChild(clueButton);
  });
}

function selectBattleEntry(index) {
  if (!battlePuzzle || battlePuzzle.rows[index]?.solved || isComputerTurn()) return;

  battleSelectedEntry = index;
  if (battleAnswerInput) {
    battleAnswerInput.value = "";
    battleAnswerInput.maxLength = battlePuzzle.rows[index].answer.length;
  }
  battleClues?.querySelectorAll(".battle-clue-btn").forEach((button) => {
    button.classList.toggle("selected", Number(button.dataset.entry) === index);
  });
  battleBoard?.querySelectorAll(".battle-cell").forEach((cell) => {
    cell.classList.toggle("selected", Number(cell.dataset.entry) === index && !cell.classList.contains("blocked"));
  });

  if (battleSelectedClue) {
    battleSelectedClue.textContent = `${battlePuzzle.rows[index].clue} — kucaj direktno u označeni red`;
  }
  renderBattleDraft("");
  battleAnswerInput?.focus();
}

function renderBattleDraft(value) {
  if (battleSelectedEntry < 0 || !battleBoard) return;

  const letters = [...normalizeBattleAnswer(value)];
  const cells = [...battleBoard.querySelectorAll(`.battle-cell[data-entry="${battleSelectedEntry}"]:not(.blocked)`)];

  cells.forEach((cell, index) => {
    if (!cell.classList.contains("solved")) {
      cell.textContent = letters[index] || "";
      cell.classList.toggle("draft", Boolean(letters[index]));
      cell.classList.toggle("typing-caret", index === letters.length && letters.length < cells.length);
    }
  });
}

function clearBattleDraft() {
  battleBoard?.querySelectorAll(".battle-cell:not(.solved):not(.blocked)").forEach((cell) => {
    cell.textContent = "";
    cell.classList.remove("draft", "typing-caret");
  });
}

function updateBattleHud() {
  const names = [
    battlePlayerOneName?.textContent || "IGRAČ 1",
    battlePlayerTwoName?.textContent || "IGRAČ 2"
  ];

  if (battlePlayerOneScore) battlePlayerOneScore.textContent = battleScores[0];
  if (battlePlayerTwoScore) battlePlayerTwoScore.textContent = battleScores[1];
  if (battlePlayerOneTime) {
    battlePlayerOneTime.textContent = battleIsPreparing ? 20 : battleCurrentPlayer === 0 ? battleTimeLeft : 20;
  }
  if (battlePlayerTwoTime) {
    battlePlayerTwoTime.textContent = battleIsPreparing ? 20 : battleCurrentPlayer === 1 ? battleTimeLeft : 20;
  }
  if (battleTurnText) {
    battleTurnText.textContent = battleIsPreparing
      ? `PRVI IGRA: ${names[battleCurrentPlayer]}`
      : `NA POTEZU: ${names[battleCurrentPlayer]}`;
  }
  if (battleRoundText && battlePuzzle) {
    const solvedCount = battlePuzzle.rows.filter((entry) => entry.solved).length;
    battleRoundText.textContent = `RIJEŠENO ${solvedCount} / ${battlePuzzle.rows.length}`;
  }

  battlePlayerOne?.classList.toggle("active", battleCurrentPlayer === 0);
  battlePlayerTwo?.classList.toggle("active", battleCurrentPlayer === 1);
  battleScreen?.classList.toggle("player-one-turn", !battleIsPreparing && battleCurrentPlayer === 0);
  battleScreen?.classList.toggle("player-two-turn", !battleIsPreparing && battleCurrentPlayer === 1);
}

function isComputerTurn() {
  return battleMode === "computer" && battleCurrentPlayer === 1;
}

function clearBattleTimers() {
  if (battleTimer) {
    clearInterval(battleTimer);
    battleTimer = null;
  }
  if (battleComputerTimeout) {
    clearTimeout(battleComputerTimeout);
    battleComputerTimeout = null;
  }
}

function beginBattleTurn() {
  clearBattleTimers();

  if (!battlePuzzle || battlePuzzle.rows.every((entry) => entry.solved)) {
    revealBattleSecretThenFinish();
    return;
  }

  battleSelectedEntry = -1;
  battleIsPreparing = false;
  battleTimeLeft = 20;
  clearBattleDraft();
  if (battleAnswerInput) {
    battleAnswerInput.value = "";
    battleAnswerInput.disabled = isComputerTurn();
  }
  if (battleSkipBtn) battleSkipBtn.disabled = isComputerTurn();
  if (battleSecretInput) {
    battleSecretInput.value = "";
    battleSecretInput.disabled = isComputerTurn();
  }
  if (battleSecretSubmitBtn) battleSecretSubmitBtn.disabled = isComputerTurn();
  if (battleSelectedClue) {
    battleSelectedClue.textContent = isComputerTurn()
      ? "Računar bira riječ..."
      : "Klikni na asocijaciju, pa odmah kucaj u označeni red.";
  }

  battleClues?.querySelectorAll(".battle-clue-btn").forEach((button) => {
    const entry = battlePuzzle.rows[Number(button.dataset.entry)];
    button.classList.remove("selected");
    button.disabled = entry.solved || isComputerTurn();
  });
  battleBoard?.querySelectorAll(".battle-cell").forEach((cell) => cell.classList.remove("selected", "wrong"));
  updateBattleHud();

  battleTimer = setInterval(() => {
    battleTimeLeft -= 1;
    updateBattleHud();
    if (battleTimeLeft <= 0) {
      completeBattleTurn(false, -1);
    }
  }, 1000);

  if (isComputerTurn()) {
    battleComputerTimeout = setTimeout(playComputerTurn, 1400);
  }
}

function beginBattlePreparation() {
  clearBattleTimers();
  battleIsPreparing = true;
  battleIntroTimeLeft = 15;
  battleSelectedEntry = -1;

  battleIntroCountdown?.classList.add("active");
  battleScreen?.classList.add("preparing");
  if (battleIntroValue) battleIntroValue.textContent = battleIntroTimeLeft;
  if (battleIntroClues && battlePuzzle) {
    battleIntroClues.innerHTML = "";
    battlePuzzle.rows.forEach((entry, index) => {
      const item = document.createElement("p");
      item.innerHTML = `<span>${index + 1}. ${entry.clue}</span><strong>${entry.answer.length} slova</strong>`;
      battleIntroClues.appendChild(item);
    });
  }
  if (battleSelectedClue) {
    battleSelectedClue.textContent = "Pročitaj ponuđene asocijacije prije početka partije.";
  }
  if (battleAnswerInput) {
    battleAnswerInput.value = "";
    battleAnswerInput.disabled = true;
  }
  if (battleSkipBtn) battleSkipBtn.disabled = true;
  if (battleSecretInput) {
    battleSecretInput.value = "";
    battleSecretInput.disabled = true;
  }
  if (battleSecretSubmitBtn) battleSecretSubmitBtn.disabled = true;
  battleClues?.querySelectorAll(".battle-clue-btn").forEach((button) => {
    button.disabled = true;
  });
  updateBattleHud();

  battleTimer = setInterval(() => {
    battleIntroTimeLeft -= 1;
    if (battleIntroValue) battleIntroValue.textContent = battleIntroTimeLeft;

    if (battleIntroTimeLeft <= 0) {
      clearBattleTimers();
      battleIntroCountdown?.classList.remove("active");
      battleScreen?.classList.remove("preparing");
      beginBattleTurn();
    }
  }, 1000);
}

function revealBattleEntry(index) {
  const entry = battlePuzzle.rows[index];
  battleBoard?.querySelectorAll(`.battle-cell[data-entry="${index}"]`).forEach((cell) => {
    if (!cell.classList.contains("blocked")) {
      cell.textContent = cell.dataset.letter;
      cell.classList.add("solved");
    }
  });

  const clueButton = battleClues?.querySelector(`.battle-clue-btn[data-entry="${index}"]`);
  clueButton?.classList.add("solved");
  if (clueButton) clueButton.disabled = true;
}

function completeBattleTurn(correct, entryIndex) {
  clearBattleTimers();

  if (correct && entryIndex >= 0) {
    battlePuzzle.rows[entryIndex].solved = true;
    battleScores[battleCurrentPlayer] += 1;
    revealBattleEntry(entryIndex);
  } else if (entryIndex >= 0) {
    battleBoard?.querySelectorAll(`.battle-cell[data-entry="${entryIndex}"]`).forEach((cell) => {
      if (!cell.classList.contains("blocked")) cell.classList.add("wrong");
    });
    battleWrongMark?.classList.add("active");
  }

  updateBattleHud();
  battleTurnNumber += 1;

  battleComputerTimeout = setTimeout(() => {
    battleComputerTimeout = null;
    battleWrongMark?.classList.remove("active");
    if (battlePuzzle.rows.every((entry) => entry.solved)) {
      revealBattleSecretThenFinish();
      return;
    }

    battleCurrentPlayer = battleCurrentPlayer === 0 ? 1 : 0;
    beginBattleTurn();
  }, correct ? 450 : 1000);
}

function submitBattleAnswer() {
  if (isComputerTurn()) return;
  if (battleSelectedEntry < 0) {
    openAttemptModal("Prvo izaberi asocijaciju za riječ koju želiš popuniti.");
    return;
  }

  const entry = battlePuzzle.rows[battleSelectedEntry];
  const answer = normalizeBattleAnswer(battleAnswerInput?.value || "");

  if (!answer) {
    openAttemptModal("Unesi riječ ili pritisni DALJE da prepustiš potez.");
    return;
  }

  completeBattleTurn(answer === entry.answer, battleSelectedEntry);
}

function submitBattleSecret() {
  if (isComputerTurn() || battleIsPreparing || battleIsEnding || !battlePuzzle) return;

  const answer = normalizeBattleAnswer(battleSecretInput?.value || "");
  if (!answer) {
    openAttemptModal("Unesi glavnu riječ koju želiš pokušati pogoditi.");
    return;
  }

  clearBattleTimers();
  if (answer === battlePuzzle.secret) {
    battleForcedWinner = battleCurrentPlayer;
    revealBattleSecretThenFinish(battleCurrentPlayer);
    return;
  }

  battleWrongMark?.classList.add("active");
  battleTurnNumber += 1;
  battleComputerTimeout = setTimeout(() => {
    battleComputerTimeout = null;
    battleWrongMark?.classList.remove("active");
    battleCurrentPlayer = battleCurrentPlayer === 0 ? 1 : 0;
    beginBattleTurn();
  }, 1000);
}

function revealBattleSecretThenFinish(forcedWinner = null) {
  if (!battlePuzzle || battleIsEnding) return;

  clearBattleTimers();
  battleIsEnding = true;
  if (forcedWinner !== null) battleForcedWinner = forcedWinner;
  if (battleAnswerInput) battleAnswerInput.disabled = true;
  if (battleSkipBtn) battleSkipBtn.disabled = true;
  if (battleSecretInput) battleSecretInput.disabled = true;
  if (battleSecretSubmitBtn) battleSecretSubmitBtn.disabled = true;
  battleClues?.querySelectorAll(".battle-clue-btn").forEach((button) => {
    button.disabled = true;
  });

  battleBoard?.querySelectorAll(".battle-cell.secret:not(.blocked)").forEach((cell, index) => {
    cell.textContent = battlePuzzle.secret[index] || cell.dataset.letter || "";
    cell.classList.add("secret-revealed");
  });
  if (battleSecretRevealWord) battleSecretRevealWord.textContent = battlePuzzle.secret;
  battleSecretReveal?.classList.add("active");

  battleComputerTimeout = setTimeout(() => {
    battleComputerTimeout = null;
    battleSecretReveal?.classList.remove("active");
    finishBattle();
  }, 3000);
}

function playComputerTurn() {
  if (!isComputerTurn() || !battlePuzzle) return;

  const available = battlePuzzle.rows.filter((entry) => !entry.solved);
  const chosen = available[Math.floor(Math.random() * available.length)];
  if (!chosen) {
    completeBattleTurn(false, -1);
    return;
  }

  battleSelectedEntry = chosen.index;
  battleClues?.querySelector(`.battle-clue-btn[data-entry="${chosen.index}"]`)?.classList.add("selected");
  if (battleSelectedClue) battleSelectedClue.textContent = chosen.clue;
  const computerIsCorrect = Math.random() < 0.72;
  completeBattleTurn(computerIsCorrect, chosen.index);
}

function startBattle(mode) {
  battleMode = mode;
  battlePuzzle = getBattlePuzzle();
  battleScores = [0, 0];
  battleTurnNumber = 0;
  battleStartingPlayer = Math.random() < 0.5 ? 0 : 1;
  battleCurrentPlayer = battleStartingPlayer;
  battleForcedWinner = null;
  battleIsEnding = false;
  battleSecretReveal?.classList.remove("active");

  if (battlePlayerOneName) battlePlayerOneName.textContent = "IGRAČ 1";
  if (battlePlayerTwoName) {
    battlePlayerTwoName.textContent = mode === "computer" ? "RAČUNAR" : "IGRAČ 2";
  }

  renderBattlePuzzle();
  showScreen(battleScreen);
  beginBattlePreparation();
}

function finishBattle() {
  clearBattleTimers();
  if (!battleResultModal) return;

  const secondName = battleMode === "computer" ? "Računar" : "Igrač 2";
  let title = "NERIJEŠENO!";

  if (battleForcedWinner === 0) {
    title = "POBJEDNIK JE IGRAČ 1!";
  } else if (battleForcedWinner === 1) {
    title = `POBJEDNIK JE ${secondName.toUpperCase()}!`;
  } else {
    if (battleScores[0] > battleScores[1]) title = "POBJEDNIK JE IGRAČ 1!";
    if (battleScores[1] > battleScores[0]) title = `POBJEDNIK JE ${secondName.toUpperCase()}!`;
  }

  if (battleResultTitle) battleResultTitle.textContent = title;
  if (battleResultScore) {
    const secretWinText = battleForcedWinner !== null ? " — pogođena glavna riječ" : "";
    battleResultScore.textContent = `Glavna riječ: ${battlePuzzle.secret}. Igrač 1: ${battleScores[0]}  —  ${secondName}: ${battleScores[1]}${secretWinText}`;
  }
  battleResultModal.classList.remove("victory");
  void battleResultModal.offsetWidth;
  battleResultModal.classList.add("victory");
  battleResultModal.classList.add("active");
}

function leaveBattle() {
  clearBattleTimers();
  battleIsPreparing = false;
  battleIntroCountdown?.classList.remove("active");
  battleScreen?.classList.remove("preparing");
  battleSecretReveal?.classList.remove("active");
  battleResultModal?.classList.remove("active");
  battleIsEnding = false;
  showScreen(multiplayerModeScreen);
}

function leaveCrossword(destinationScreen = easyLevelsScreen) {
  stopLevelTimer();
  clearCurrentWrongPreview();
  closeHintModal();
  closeExplainModal();
  closeCompleteModal();
  closeAttemptModal();
  showScreen(destinationScreen);
}

startBtn?.addEventListener("click", () => {
  showScreen(playerModeScreen);
});

onePlayerBtn?.addEventListener("click", () => {
  showScreen(gameScreen);
});

twoPlayersBtn?.addEventListener("click", () => {
  showScreen(multiplayerModeScreen);
});

localDuelBtn?.addEventListener("click", () => startBattle("local"));
computerDuelBtn?.addEventListener("click", () => startBattle("computer"));
backFromMultiplayerMode?.addEventListener("click", () => showScreen(playerModeScreen));
backFromBattle?.addEventListener("click", leaveBattle);
battleIntroExitBtn?.addEventListener("click", leaveBattle);
battleSubmitBtn?.addEventListener("click", submitBattleAnswer);
battleSkipBtn?.addEventListener("click", () => {
  if (!isComputerTurn()) completeBattleTurn(false, battleSelectedEntry);
});
battleAnswerInput?.addEventListener("input", () => {
  battleAnswerInput.value = normalizeBattleAnswer(battleAnswerInput.value);
  renderBattleDraft(battleAnswerInput.value);

  if (
    battleSelectedEntry >= 0
    && battleAnswerInput.value.length === battlePuzzle.rows[battleSelectedEntry].answer.length
  ) {
    submitBattleAnswer();
  }
});
battleAnswerInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && battleAnswerInput.value) submitBattleAnswer();
});
battleSecretInput?.addEventListener("input", () => {
  battleSecretInput.value = normalizeBattleAnswer(battleSecretInput.value);
});
battleSecretInput?.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && battleSecretInput.value) submitBattleSecret();
});
battleSecretSubmitBtn?.addEventListener("click", submitBattleSecret);
battlePlayAgainBtn?.addEventListener("click", () => {
  battleResultModal?.classList.remove("active");
  startBattle(battleMode);
});
battleResultBackBtn?.addEventListener("click", leaveBattle);
battleResultOverlay?.addEventListener("click", leaveBattle);

howToBtn?.addEventListener("click", () => {
  showScreen(howToPlayScreen);
});

easyBtn?.addEventListener("click", () => {
  showScreen(easyLevelsScreen);
});

mediumBtn?.addEventListener("click", () => {
  showScreen(mediumLevelsScreen);
});

hardBtn?.addEventListener("click", () => {
  showScreen(hardLevelsScreen);
});

discoverBtn?.addEventListener("click", () => {
  showScreen(discoverLevelsScreen);
});

level1Btn?.addEventListener("click", () => {
  openStandardLevel(1, openLevel1);
});

level2Btn?.addEventListener("click", () => {
  openStandardLevel(2, openLevel2);
});

level3Btn?.addEventListener("click", () => {
  openStandardLevel(3, openLevel3);
});

mediumLevel1Btn?.addEventListener("click", () => {
  openStandardLevel(4, openMediumLevel1);
});

mediumLevel2Btn?.addEventListener("click", () => {
  openStandardLevel(5, openMediumLevel2);
});

mediumLevel3Btn?.addEventListener("click", () => {
  openStandardLevel(6, openMediumLevel3);
});
hardLevel1Btn?.addEventListener("click", () => openStandardLevel(7, openHardLevel1));
hardLevel2Btn?.addEventListener("click", () => openStandardLevel(8, openHardLevel2));
hardLevel3Btn?.addEventListener("click", () => openStandardLevel(9, openHardLevel3));

discoverLevelBtns.forEach((button) => {
  button.addEventListener("click", () => {
    openDiscoverLevel(Number(button.dataset.discoverLevel));
  });
});

futureLevelBtns.forEach((button) => {
  button.addEventListener("click", () => {
    openAttemptModal("Ovaj level će biti dostupan uskoro.");
  });
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

confirmMediumLevel1Btn?.addEventListener("click", () => {
  confirmBoard(4);
});

confirmMediumLevel2Btn?.addEventListener("click", () => {
  confirmBoard(5);
});

confirmMediumLevel3Btn?.addEventListener("click", () => {
  confirmBoard(6);
});
confirmHardLevel1Btn?.addEventListener("click", () => confirmBoard(7));
confirmHardLevel2Btn?.addEventListener("click", () => confirmBoard(8));
confirmHardLevel3Btn?.addEventListener("click", () => confirmBoard(9));
confirmDiscoverBtn?.addEventListener("click", () => confirmBoard(10));

backFromGame?.addEventListener("click", () => {
  showScreen(playerModeScreen);
});

backFromPlayerMode?.addEventListener("click", () => {
  showScreen(menuScreen);
});

backFromEasyLevels?.addEventListener("click", () => {
  showScreen(gameScreen);
});

backFromMediumLevels?.addEventListener("click", () => {
  showScreen(gameScreen);
});

backFromHardLevels?.addEventListener("click", () => {
  showScreen(gameScreen);
});

backFromDiscoverLevels?.addEventListener("click", () => {
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

backFromMediumCrossword1?.addEventListener("click", () => {
  leaveCrossword(mediumLevelsScreen);
});

backFromMediumCrossword2?.addEventListener("click", () => {
  leaveCrossword(mediumLevelsScreen);
});

backFromMediumCrossword3?.addEventListener("click", () => {
  leaveCrossword(mediumLevelsScreen);
});
backFromHardCrossword1?.addEventListener("click", () => leaveCrossword(hardLevelsScreen));
backFromHardCrossword2?.addEventListener("click", () => leaveCrossword(hardLevelsScreen));
backFromHardCrossword3?.addEventListener("click", () => leaveCrossword(hardLevelsScreen));
backFromDiscoverCrossword?.addEventListener("click", () => leaveCrossword(discoverLevelsScreen));

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

hintBtnMediumLevel1?.addEventListener("click", () => {
  currentLevel = 4;
  openHintModal();
});

hintBtnMediumLevel2?.addEventListener("click", () => {
  currentLevel = 5;
  openHintModal();
});

hintBtnMediumLevel3?.addEventListener("click", () => {
  currentLevel = 6;
  openHintModal();
});
hintBtnHardLevel1?.addEventListener("click", () => { currentLevel = 7; openHintModal(); });
hintBtnHardLevel2?.addEventListener("click", () => { currentLevel = 8; openHintModal(); });
hintBtnHardLevel3?.addEventListener("click", () => { currentLevel = 9; openHintModal(); });
hintBtnDiscover?.addEventListener("click", () => { currentLevel = 10; openHintModal(); });

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

explainBtnMediumLevel1?.addEventListener("click", () => {
  openExplainModal();
});

explainBtnMediumLevel2?.addEventListener("click", () => {
  openExplainModal();
});

explainBtnMediumLevel3?.addEventListener("click", () => {
  openExplainModal();
});
explainBtnHardLevel1?.addEventListener("click", openExplainModal);
explainBtnHardLevel2?.addEventListener("click", openExplainModal);
explainBtnHardLevel3?.addEventListener("click", openExplainModal);
explainBtnDiscover?.addEventListener("click", openExplainModal);

closeDiscoverCompleteBtn?.addEventListener("click", closeDiscoverComplete);
continueDiscoverBtn?.addEventListener("click", closeDiscoverComplete);
discoverCompleteOverlay?.addEventListener("click", closeDiscoverComplete);

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

closeNoticeBtn?.addEventListener("click", closeNoticeModal);
noticeOverlay?.addEventListener("click", closeNoticeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeSettings();
    closeHintModal();
    closeExplainModal();
    closeCompleteModal();
    closeAttemptModal();
    closeNoticeModal();
    closeDiscoverComplete();
    battleResultModal?.classList.remove("active");
  }
});

document.addEventListener("click", (e) => {
  const clickedButton = e.target.closest("button");

  if (!clickedButton) {
    return;
  }

  startAmbientMusic();
  playButtonClick();
});

musicVolume?.addEventListener("input", (e) => {
  const value = e.target.value;
  musicVolumeValue.textContent = `${value}%`;
  localStorage.setItem("musicVolume", value);
  updateAudioVolumes();
});

buttonSoundVolume?.addEventListener("input", (e) => {
  const value = e.target.value;
  buttonSoundVolumeValue.textContent = `${value}%`;
  localStorage.setItem("buttonSoundVolume", value);
  updateAudioVolumes();
});

loadAudioSettings();
updateTimerDisplay(1);
updateTimerDisplay(2);
updateTimerDisplay(3);
updateTimerDisplay(4);
updateTimerDisplay(5);
updateTimerDisplay(6);
updateTimerDisplay(7);
updateTimerDisplay(8);
updateTimerDisplay(9);
loadLevelStars();
updateHintDisplay();
updateCoinDisplay();
window.addEventListener("load", positionCoinDisplay);
window.addEventListener("resize", positionCoinDisplay);
