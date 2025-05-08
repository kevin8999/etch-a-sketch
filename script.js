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
            pixel.style["width"] = Math.floor(boardWidth / 16);
            boardRow.appendChild(pixel);
        }

        drawingBoard.appendChild(boardRow);
    }

}

createDrawingBoard(16, 16);