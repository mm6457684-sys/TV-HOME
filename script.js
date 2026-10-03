const backgrounds = [
  "bg1.jpg",
  "bg2.jpg",
  "bg3.jpg",
  "bg4.jpg"
];

// A fresh random background is selected on every page load.
// Nothing is stored in localStorage, so it resets naturally.
function setRandomBackground() {
  const index = Math.floor(Math.random() * backgrounds.length);
  document.querySelector(".background").style.backgroundImage =
    `url("${backgrounds[index]}")`;
}

function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit"});
}

function doSearch() {
  const q = document.getElementById("search").value.trim();
  if (!q) return;
  window.location.href =
    "https://www.google.com/search?q=" + encodeURIComponent(q);
}

document.getElementById("searchBtn").addEventListener("click", doSearch);
document.getElementById("search").addEventListener("keydown", (e) => {
  if (e.key === "Enter") doSearch();
});

document.getElementById("changeBg").addEventListener("click", setRandomBackground);

// Keep placeholder cards from navigating to "#".
document.querySelectorAll('[data-placeholder="true"]').forEach(card => {
  card.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Edit index.html and replace this card with your own website URL.");
  });
});

setRandomBackground();
updateClock();
setInterval(updateClock, 1000);
