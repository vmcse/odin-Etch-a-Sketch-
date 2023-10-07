const createGrid = (cellCount) => {
  const container = document.querySelector(".container");
  const containerSize = container.clientHeight;
  const cellSize = containerSize / cellCount;

  console.log(cellSize);

  for (let i = 0; i < cellCount; i++) {
    const newRow = document.createElement("div");
    for (let j = 0; j < cellCount; j++) {
      const newCell = document.createElement("div");
      newCell.className = "item";
      newCell.style.height = `${cellSize}px`;
      newCell.style.width = `${cellSize}px`;
      newCell.addEventListener("mouseover", (e) => {
        e.target.style.background = "black";
      });
      newRow.appendChild(newCell);
    }
    container.appendChild(newRow);
  }
};

createGrid(32);
