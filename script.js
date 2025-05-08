function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function getColor() {
    // Returns a color for the board
    const simpleColors = [
        "red",
        "green",
        "blue",
        "yellow",
        "orange",
        "purple",
        "pink",
        "brown",
        "black",
        "magenta",
        "lime"
    ];

    const index = getRandomInt(0, simpleColors.length);
    return simpleColors[index];
}

function createDrawingBoard(numRows, numCols) {
    // Creates squares for drawing board that is numCols wide and numRows long
    drawingBoard = document.querySelector('.drawing-board');

    // Get properties of drawingBoard
    const properties = window.getComputedStyle(drawingBoard);

    let boardWidth = parseFloat(properties.width);
    console.log("Board width: " + boardWidth);

    let board = [];
    for (let i = 0; i < numRows; i++) {
        let boardRow = document.createElement("div");
        boardRow.className = "board-row";

        for (let j = 0; j < numCols; j++) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";

            let pixelWidth = Math.floor(boardWidth / numCols)

            pixel.style.width = pixelWidth.toString() + "px";
            pixel.style.height = pixel.style.width;

            console.log(pixelWidth);

            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = getColor();
                console.log("Row " + i + ", Col " + j + " hovered.");
            })

            boardRow.appendChild(pixel);
        }

        drawingBoard.appendChild(boardRow);
    }

}

createDrawingBoard(36, 36);