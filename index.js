let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

const createGrid = (cellCount) => {
  const container = document.querySelector(".container");
  container.setAttribute("draggable", "false");
  container.innerHTML = "";

  container.style.gridTemplateColumns = `repeat(${cellCount}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${cellCount}, 1fr)`;

  const containerSize = container.offsetWidth;
  const cellSize = containerSize / cellCount;

  console.log(cellSize);

  for (let i = 0; i < cellCount; i++) {
    const newRow = document.createElement("div");
    for (let j = 0; j < cellCount; j++) {
      const newCell = document.createElement("div");
      newCell.className = "item";
      newCell.setAttribute("draggable", "false");
      newCell.style.height = `${cellSize}px`;
      newCell.style.width = `${cellSize}px`;
      newCell.addEventListener("mousemove", (e) => {
        e.preventDefault();
        if (mouseDown) {
          const red = Math.random() * 256;
          const blue = Math.random() * 256;
          const green = Math.random() * 256;

          e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
        }
      });
      newRow.appendChild(newCell);
    }
    container.appendChild(newRow);
  }
};

createGrid(16);

const promtBtn = document.querySelector(".prompt");

promtBtn.addEventListener("click", (e) => {
  let cellSize;
  do {
    cellSize = prompt("Cell Size");
  } while (cellSize > 100);

  createGrid(cellSize);
});
