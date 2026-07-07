/* ============================================================
   Hijeroglifi — intro (loading) + prelaz između ekrana
   Aditivni sloj. Ne dira script.js: "omotava" globalnu showScreen.
   Učitava se POSLIJE script.js.
   ============================================================ */
(function () {
  "use strict";

  /* --- SVG sprite: svi glifovi (bg-nezavisni) --- */
  var SPRITE =
    '<svg xmlns="http://www.w3.org/2000/svg" width="0" height="0" aria-hidden="true"><defs>' +
    '<symbol id="g-ankh" viewBox="0 0 100 100"><path fill-rule="evenodd" d="M50 8a20 22 0 1 0 .1 0zm0 14a8 10 0 1 1-.1 0z"/><rect x="24" y="44" width="52" height="11" rx="4"/><rect x="44" y="44" width="12" height="48" rx="4"/></symbol>' +
    '<symbol id="g-eye" viewBox="0 0 100 100" stroke-linecap="round" stroke-linejoin="round"><path d="M14 40Q46 24 82 36" fill="none" stroke="currentColor" stroke-width="8"/><path d="M10 54Q46 34 86 50Q52 66 10 54Z"/><circle class="accent" cx="46" cy="50" r="8.5"/><path d="M28 62 24 86" fill="none" stroke="currentColor" stroke-width="8"/><path d="M60 60Q80 64 74 86Q62 94 56 80" fill="none" stroke="currentColor" stroke-width="8"/></symbol>' +
    '<symbol id="g-scarab" viewBox="0 0 100 100" stroke-linecap="round"><path d="M38 40 16 30M36 54 12 54M38 68 18 82M62 40 84 30M64 54 88 54M62 68 82 82" fill="none" stroke="currentColor" stroke-width="5.5"/><path d="M37 26Q50 18 63 26L59 34Q50 30 41 34Z"/><ellipse cx="50" cy="44" rx="14" ry="9"/><path d="M36 50Q35 84 48 87Q49 68 49 50Q43 47 36 50Z"/><path d="M64 50Q65 84 52 87Q51 68 51 50Q57 47 64 50Z"/></symbol>' +
    '<symbol id="g-feather" viewBox="0 0 100 100"><path d="M60 10Q30 34 40 62Q46 52 50 90Q54 52 74 30Q66 26 60 10Z"/></symbol>' +
    '<symbol id="g-water" viewBox="0 0 100 100" stroke-linecap="round" stroke-linejoin="round"><path d="M8 50Q20 30 32 50T56 50T80 50T92 50" fill="none" stroke="currentColor" stroke-width="9"/></symbol>' +
    '<symbol id="g-sun" viewBox="0 0 100 100"><path fill-rule="evenodd" d="M50 20a30 30 0 1 0 .1 0zm0 22a8 8 0 1 1-.1 0z"/></symbol>' +
    '<symbol id="g-reed" viewBox="0 0 100 100"><rect x="45" y="30" width="10" height="60" rx="4"/><path d="M50 8Q34 20 44 34Q50 26 56 34Q66 20 50 8Z"/></symbol>' +
    '<symbol id="g-mouth" viewBox="0 0 100 100"><path d="M10 50Q50 32 90 50Q50 68 10 50Z"/></symbol>' +
    '<symbol id="g-cobra" viewBox="0 0 100 100" stroke-linecap="round" stroke-linejoin="round"><path d="M66 90Q42 90 42 64Q42 50 52 46" fill="none" stroke="currentColor" stroke-width="9"/><path d="M52 46Q39 40 43 26Q49 13 62 17Q73 21 70 34Q67 45 58 48Z"/><circle class="accent" cx="63" cy="29" r="3.4"/></symbol>' +
    '<symbol id="g-bread" viewBox="0 0 100 100"><path d="M16 64a34 28 0 0 1 68 0z"/></symbol>' +
    '<symbol id="g-cloth" viewBox="0 0 100 100"><path d="M40 10 54 10 49 46 62 90 48 90 40 50Z"/></symbol>' +
    '<symbol id="g-foot" viewBox="0 0 100 100"><path d="M38 10 52 10 52 62 84 62 84 76 38 76Z"/></symbol>' +
    '<symbol id="g-stool" viewBox="0 0 100 100"><rect x="30" y="16" width="12" height="70" rx="3"/><rect x="30" y="16" width="46" height="12" rx="3"/><rect x="30" y="74" width="46" height="12" rx="3"/></symbol>' +
    '<symbol id="g-djed" viewBox="0 0 100 100"><rect x="42" y="10" width="16" height="80" rx="4"/><rect x="26" y="40" width="48" height="7" rx="3"/><rect x="26" y="52" width="48" height="7" rx="3"/><rect x="26" y="64" width="48" height="7" rx="3"/></symbol>' +
    '<symbol id="g-was" viewBox="0 0 100 100" stroke-linecap="round" stroke-linejoin="round"><rect x="45" y="30" width="10" height="60" rx="3"/><path d="M38 30Q38 14 50 14Q62 14 62 26L54 34" fill="none" stroke="currentColor" stroke-width="9"/><path d="M40 88 60 88 50 76Z"/></symbol>' +
    '<symbol id="g-quail" viewBox="0 0 100 100" stroke-linejoin="round"><path d="M28 86Q24 54 44 50Q46 38 60 40Q56 46 58 54Q76 58 74 86Z"/><path d="M59 41 75 37 61 49Z"/><path d="M42 86 42 95M60 86 60 95" fill="none" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/><circle class="accent" cx="55" cy="48" r="2.6"/></symbol>' +
    '<symbol id="g-basket" viewBox="0 0 100 100" stroke-linecap="round"><path d="M16 40 84 40A34 26 0 0 1 16 40Z"/><path d="M74 40Q86 38 82 26" fill="none" stroke="currentColor" stroke-width="6"/></symbol>' +
    '<symbol id="g-pool" viewBox="0 0 100 100"><rect x="16" y="28" width="68" height="44" rx="6" fill="none" stroke="currentColor" stroke-width="6"/><path d="M24 44Q31 39 38 44T52 44T66 44T76 44M24 56Q31 51 38 56T52 56T66 56T76 56" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round"/></symbol>' +
    '<symbol id="g-2reed" viewBox="0 0 100 100" stroke-linecap="round" stroke-linejoin="round"><path d="M34 30 26 76M60 30 52 76" fill="none" stroke="currentColor" stroke-width="9"/></symbol>' +
    '<symbol id="g-coil" viewBox="0 0 100 100" stroke-linecap="round" stroke-linejoin="round"><path d="M50 22A24 24 0 1 1 26 46A14 14 0 1 1 50 46A4 4 0 1 1 46 46" fill="none" stroke="currentColor" stroke-width="8"/></symbol>' +
    '<symbol id="g-chisel" viewBox="0 0 100 100"><path d="M38 12 62 12 55 56 45 56Z"/><rect x="44" y="54" width="12" height="34" rx="3"/></symbol>' +
    '<symbol id="g-line-eye" viewBox="0 0 100 100"><path d="M12 50Q40 29 72 40Q88 46 88 50Q88 54 72 60Q40 71 12 50Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/><path d="M34 48Q47 56 60 48M72 40 76 24M22 45 18 30M30 60 22 78" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
    '<symbol id="g-line-reed" viewBox="0 0 100 100"><path d="M50 12Q32 31 39 61Q45 84 60 66Q70 42 50 12Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/><path d="M50 12 50 86M39 61 29 83M60 66 48 87" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></symbol>' +
    '<symbol id="g-line-seed" viewBox="0 0 100 100"><path d="M50 16Q31 38 42 70Q50 91 63 66Q70 38 50 16Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/></symbol>' +
    '<symbol id="g-line-foot" viewBox="0 0 100 100"><path d="M14 70Q44 61 75 64Q86 66 80 74Q48 82 17 77Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/><path d="M27 67Q37 48 56 44" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></symbol>' +
    '<symbol id="g-line-bird" viewBox="0 0 100 100"><path d="M25 74Q28 49 48 48Q52 37 65 39Q61 48 69 55Q82 59 78 75Q57 77 25 74Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/><path d="M66 40 82 36M50 75 43 90M65 75 66 90M70 56Q78 52 84 56" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></symbol>' +
    '<symbol id="g-line-wave" viewBox="0 0 100 100"><path d="M18 30Q30 20 42 30T66 30T86 30M14 50Q28 40 42 50T68 50T88 50M20 70Q32 60 44 70T68 70" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></symbol>' +
    '<symbol id="g-line-oval" viewBox="0 0 100 100"><ellipse cx="50" cy="50" rx="22" ry="34" fill="none" stroke="currentColor" stroke-width="5"/></symbol>' +
    '<symbol id="g-line-slash" viewBox="0 0 100 100"><path d="M30 78 72 22M43 84 85 38" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round"/></symbol>' +
    '<symbol id="g-line-mouth" viewBox="0 0 100 100"><path d="M14 53Q47 41 82 50Q64 62 18 59" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/></symbol>' +
    '<symbol id="g-line-hill" viewBox="0 0 100 100"><path d="M16 72Q31 54 50 58Q66 61 84 72Q54 77 16 72Z" fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round"/></symbol>' +
    "</defs></svg>";

  var host = document.createElement("div");
  host.setAttribute("aria-hidden", "true");
  host.style.cssText = "position:absolute;width:0;height:0;overflow:hidden";
  host.innerHTML = SPRITE;
  document.body.appendChild(host);

  var reduce =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var INTRO_MORPH_DELAY = 1400;
  var INTRO_TOTAL_TIME = 4800;
  var WIPE_SWAP_DELAY = 850;
  var WIPE_TOTAL_TIME = 2500;

  function useSvg(id, cls) {
    return '<svg class="' + cls + '" viewBox="0 0 100 100"><use href="#' + id + '"/></svg>';
  }

  /* Panel app-a = centrirana slika ekrana (.menu-image). Fallback: cijeli ekran. */
  function appRect() {
    var img = document.querySelector(".screen.active .menu-image") ||
              document.querySelector(".menu-image");
    if (img) {
      var r = img.getBoundingClientRect();
      if (r.width > 40 && r.height > 40) {
        return { left: r.left, top: r.top, width: r.width, height: r.height };
      }
    }
    return { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight };
  }
  function place(el) {
    var r = appRect();
    el.style.left = r.left + "px";
    el.style.top = r.top + "px";
    el.style.width = r.width + "px";
    el.style.height = r.height + "px";
  }

  /* ---------- INTRO (naslov UKRŠTENE RIJEČI) ---------- */
  var TITLE = [
    ["g-line-bird", "U"], ["g-line-hill", "K"], ["g-line-mouth", "R"], ["g-line-eye", "Š"],
    ["g-line-foot", "T"], ["g-line-reed", "E"], ["g-line-wave", "N"], ["g-line-reed", "E"],
    ["space", ""],
    ["g-line-mouth", "R"], ["g-line-seed", "I"], ["g-line-oval", "J"], ["g-line-reed", "E"],
    ["g-line-slash", "Č"], ["g-line-seed", "I"]
  ];

  var intro = document.createElement("div");
  intro.id = "glyphIntro";
  var word = document.createElement("div");
  word.className = "gi-word";
  TITLE.forEach(function (t, i) {
    if (t[0] === "space") {
      var sp = document.createElement("div");
      sp.className = "gi-space";
      word.appendChild(sp);
      return;
    }
    var tile = document.createElement("div");
    tile.className = "gi-tile";
    tile.style.setProperty("--i", i);
    tile.innerHTML = useSvg(t[0], "gi-glyph gi-face") +
      '<span class="gi-letter gi-face">' + t[1] + "</span>";
    word.appendChild(tile);
  });
  var hint = document.createElement("div");
  hint.className = "gi-hint";
  hint.textContent = "učitavanje…";
  intro.appendChild(word);
  intro.appendChild(hint);
  document.body.appendChild(intro);

  var introTimers = [];
  function endIntro() {
    if (window.__glyphIntroDone) return;
    window.__glyphIntroDone = true;
    introTimers.forEach(clearTimeout);
    intro.classList.remove("gi-in"); // fade-out
    setTimeout(function () {
      if (intro.parentNode) intro.parentNode.removeChild(intro);
    }, 600);
  }
  intro.addEventListener("click", endIntro); // klik = preskoči

  var introShown = false;
  function showIntro() {
    if (introShown || window.__glyphIntroDone) return;
    introShown = true;
    place(intro);                 // veži intro za panel app-a
    intro.classList.add("gi-in"); // fade-in
    if (reduce) {
      intro.classList.add("gi-morph");
      introTimers.push(setTimeout(endIntro, 900));
    } else {
      introTimers.push(setTimeout(function () { intro.classList.add("gi-morph"); }, INTRO_MORPH_DELAY));
      introTimers.push(setTimeout(endIntro, INTRO_TOTAL_TIME));
    }
  }

  // Sačekaj da se slika panela izmjeri (da se intro pojavi tačno u prozoru, ne fullscreen)
  var introImg = document.querySelector(".screen.active .menu-image") ||
                 document.querySelector(".menu-image");
  if (introImg && introImg.complete && introImg.naturalWidth) {
    showIntro();
  } else if (introImg) {
    introImg.addEventListener("load", showIntro);
    introTimers.push(setTimeout(showIntro, 300)); // fallback ako load ne stigne
  } else {
    showIntro();
  }
  window.addEventListener("resize", function () {
    if (introShown && !window.__glyphIntroDone) place(intro);
  });

  /* ---------- PRELAZ IZMEĐU EKRANA (wipe) ---------- */
  var wipe = document.createElement("div");
  wipe.id = "glyphWipe";
  var band = document.createElement("div");
  band.className = "gw-band";
  var bandIds = [
    "g-line-eye", "g-line-reed", "g-line-seed", "g-line-foot", "g-line-wave",
    "g-line-bird", "g-line-oval", "g-line-slash", "g-line-mouth", "g-line-hill",
    "g-line-eye", "g-line-reed", "g-line-bird", "g-line-wave"
  ];
  band.innerHTML = bandIds
    .map(function (id) { return '<svg viewBox="0 0 100 100"><use href="#' + id + '"/></svg>'; })
    .join("");
  wipe.appendChild(band);
  document.body.appendChild(wipe);

  var wiping = false;
  function playWipe(swap) {
    if (reduce) { swap(); return; }
    if (wiping) {
      swap();
      return;
    }
    wiping = true;
    place(wipe);   // veži traku za trenutni panel app-a
    wipe.classList.remove("gw-run");
    void wipe.offsetWidth; // restart animacije
    wipe.classList.add("gw-run");
    document.documentElement.classList.add("gw-no-screen-fade");
    setTimeout(swap, WIPE_SWAP_DELAY);  // zamjena ekrana dok traka prekriva
    setTimeout(function () {
      wipe.classList.remove("gw-run");
      document.documentElement.classList.remove("gw-no-screen-fade");
      wiping = false;
    }, WIPE_TOTAL_TIME);
  }

  /* ---------- Omotaj globalnu showScreen ---------- */
  var orig = window.showScreen;
  if (typeof orig === "function") {
    window.showScreen = function () {
      if (!window.__glyphIntroDone) {
        return orig.apply(this, arguments);
      }
      var ctx = this;
      var args = arguments;
      var activeScreen = document.querySelector(".screen.active");
      var nextScreen = args[0];
      var isStartGame =
        activeScreen &&
        activeScreen.id === "menuScreen" &&
        nextScreen &&
        nextScreen.id === "playerModeScreen";

      if (isStartGame) {
        playWipe(function () { orig.apply(ctx, args); });
        return;
      }

      return orig.apply(ctx, args);
    };
  }
})();
