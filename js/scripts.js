// I love not using JS actually, so the less the better.
const gifs = [
  'images/mtg_rotating_swamp.gif"',
  'images/mtg_rotating_island.gif"',
  'images/mtg_rotating_forest.gif"',
  'images/mtg_rotating_mountain.gif"',
  'images/mtg_rotating_plains.gif"',
  'images/rotating_sword.gif"',
  // Add more paths as needed
];

function getRandomGif() {
  if (gifs.length === 0) {
    console.error("No GIFs found.");
    return;
  }
  const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
  const gifContainer = document.getElementById("gifs");
  gifContainer.innerHTML = `<img src="${randomGif}" alt="Random GIF">`;
}
