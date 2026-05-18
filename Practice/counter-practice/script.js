let count = 0;

const countElement = document.getElementById("count");

document.getElementById("increase").addEventListener("click", () => {
  if (count >= 10) {
    alert("Count cannot exceed 10!");
    return;
  }
  count++;
  countElement.innerText = count;
});

document.getElementById("decrease").addEventListener("click", () => {
  if (count <= 0) {
    alert("Count cannot be negative!");
    return;
  }
  count--;
  countElement.innerText = count;
});

document.getElementById("reset").addEventListener("click", () => {
  count = 0;
  countElement.innerText = count;
});