const main = () => {
  createGrid(16);

  const promtBtn = document.querySelector(".prompt");

  promtBtn.addEventListener("click", (e) => {
    let cellSize;
    do {
      cellSize = prompt("Cell Size");
    } while (cellSize > 100);

    createGrid(cellSize);
  });
};

const createGrid = (cellCount) => {
  const container = document.querySelector(".container");
  container.innerHTML = "";
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
        const red = Math.random() * 256;
        const blue = Math.random() * 256;
        const green = Math.random() * 256;

        e.target.style.background = `rgb(${red}, ${green}, ${blue})`;
      });
      newRow.appendChild(newCell);
    }
    container.appendChild(newRow);
  }
};

main();
