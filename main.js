let gridSize = prompt("Enter the grid size (between 1 and 100):");
while (
  gridSize < 1 ||
  gridSize > 100 ||
  isNaN(gridSize) ||
  !Number.isInteger(Number(gridSize))
) {
  gridSize = prompt("Invalid input. Please enter a number between 1 and 100:");
}

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < gridSize * gridSize; i++) {
  const gridItem = document.createElement("div");
  gridContainer.appendChild(gridItem);
  let itemSize = 400 / gridSize;
  gridItem.style.width = `${itemSize}px`;
  gridItem.style.height = `${itemSize}px`;
  gridItem.style.backgroundColor = "white";
}

let isMouseDown = false;
document.body.addEventListener("mousedown", () => {
  isMouseDown = true;
});
document.body.addEventListener("mouseup", () => {
  isMouseDown = false;
});

const buttons = document.querySelectorAll(".color-picker button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const color = button.id;
    const gridItems = document.querySelectorAll(".grid-container div");

    gridItems.forEach((item) => {
      item.addEventListener("mouseover", () => {
        if (isMouseDown) {
          item.style.backgroundColor = color;
        }
      });
    });
  });
});
