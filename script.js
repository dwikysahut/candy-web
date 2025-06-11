const frownBtn = document.getElementById("frown-btn");
const loveBtn = document.getElementById("smile-btn");
const dialog = document.getElementById("dialog");
const frowndialog = document.getElementById("frown-dialog");
const closeDialog = document.getElementById("close-dialog");
const frowncloseDialog = document.getElementById("close-frown-dialog");

// Function to generate a random position farther away
function getFartherRandomPosition() {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();

  const maxX = containerRect.width - frownBtn.offsetWidth;
  const maxY = containerRect.height - frownBtn.offsetHeight;

  const randomX = (Math.random() - 0.5) * 2 * maxX; // Range [-maxX, maxX]
  const randomY = (Math.random() - 0.5) * 2 * maxY; // Range [-maxY, maxY]

  return { x: randomX, y: randomY };
}

// Event listener to move the "frown" button
frownBtn.addEventListener("mouseover", () => {
  const { x, y } = getFartherRandomPosition();
  frownBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Event listener for love button
loveBtn.addEventListener("click", () => {
  dialog.classList.remove("hidden"); // Show dialog
});
frownBtn.addEventListener("click", () => {
  const { x, y } = getFartherRandomPosition();
  frownBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Close dialog
closeDialog.addEventListener("click", () => {
  dialog.classList.add("hidden"); // Hide dialog
});
frowncloseDialog.addEventListener("click", () => {
  frowndialog.classList.add("hidden"); // Hide dialog
});
