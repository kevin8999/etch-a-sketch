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

    console.log(index);
    console.log(simpleColors[index]);

    return simpleColors[index];
}

function createDrawingBoard(numRows, numCols) {
    // Creates squares for drawing board that is numCols wide and numRows long
    drawingBoard = document.querySelector('.drawing-board');
    let boardWidth = drawingBoard.clientWidth;
    console.log(boardWidth);

    let board = [];
    for (let i = 0; i < numRows; i++) {
        let boardRow = document.createElement("div");
        boardRow.className = "board-row";

        for (let j = 0; j < numCols; j++) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.style["width"] = Math.floor(boardWidth / numCols);

            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = getColor();
                console.log("Row " + i + ", Col " + j + " hovered.");
            })

            boardRow.appendChild(pixel);
        }

        drawingBoard.appendChild(boardRow);
    }

}

createDrawingBoard(16, 16);