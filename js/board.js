function createBoard() {
    const board = document.getElementById("chessboard");
    if (!board) {
        console.error('No element found with id "chessboard".');
        return;
    }

    for (let row = 0; row < 8; row++) {

        for (let col = 0; col < 8; col++) {

            const square = document.createElement("div");

            square.classList.add("square");

            if ((row + col) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");
            }

            board.appendChild(square);
        }
    }
}

createBoard();
