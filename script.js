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

    // Reset drawingBoard
    drawingBoard.innerHTML = "";

    // Get properties of drawingBoard
    const properties = window.getComputedStyle(drawingBoard);

    let boardWidth = parseFloat(properties.width);
    let boardHeight = parseFloat(properties.width);

    console.log("Board width: " + boardWidth);

    for (let i = 0; i < numRows; i++) {
        let boardRow = document.createElement("div");
        boardRow.className = "board-row";

        for (let j = 0; j < numCols; j++) {
            let pixel = document.createElement("div");
            pixel.className = "pixel";

            let pixelWidth = Math.floor(boardWidth / numCols);
            let pixelHeight = Math.floor(boardHeight / numRows);

            console.log("Pixel Width: " + pixelWidth);
            console.log("Pixel Height: " + pixelHeight);

            // Pick the smaller value
            if (pixelWidth < pixelHeight) {
                pixelHeight = pixelWidth;
            }
            else {
                pixelWidth = pixelHeight;
            }

            pixel.style.width = pixelWidth.toString() + "px";
            pixel.style.height = pixel.style.width;


            pixel.addEventListener("mouseover", () => {
                pixel.style.backgroundColor = getColor();
                console.log("Row " + i + ", Col " + j + " hovered.");
            })

            boardRow.appendChild(pixel);
        }

        drawingBoard.appendChild(boardRow);
    }

}

function isValidRowColVal(value) {
    // Check that input is between 1 and 36. Note that input is already a number
    if (Number.isInteger(value)) {
        if (1 <= value && value <= 100) {
            console.log(true);
            return true;
        } else {
            console.log("Enter a number between 1 and 100.");
        }
    }
    else {
        console.log(value + " is not a valid integer.")
    }
    console.log("Invalid row/column value");
    return false;
}

function configureBoard() {
    const btn = document.querySelector("#generate-board-btn");

    btn.addEventListener("click", () => {
        // Get values of row and column inputted by user
        const rowInput = document.getElementById("row-select");
        let rowVal = rowInput.value;
        const colInput = document.getElementById("col-select");
        let colVal = colInput.value;

        // Convert to number
        rowVal = parseInt(rowVal, 10);
        colVal = parseInt(colVal, 10);

        if (isValidRowColVal(rowVal) && isValidRowColVal(colVal)) {
            createDrawingBoard(rowVal, colVal);
        }
    });

}

configureBoard();