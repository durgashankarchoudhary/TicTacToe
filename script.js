const boxes = document.querySelectorAll(".box");
const msg = document.querySelector(".msg");
const winMsg = document.querySelector(".winMsg");
const resetButton = document.querySelector(".reset-btn");
const newGame = document.querySelector(".new-game");
let turnO = true;
const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

const resetGame = () => {
    turnO = true;

    winMsg.classList.add("hide");
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
}

resetButton.addEventListener("click", resetGame);
newGame.addEventListener("click", resetGame);

const showWinner = (Winner) => {
    msg.innerText = `Winner is ${Winner}`;
    winMsg.classList.remove("hide");
};

const checkWinner = () => {
    winningPatterns.forEach(pattern => {
        if (boxes[pattern[0]].innerText != "" && boxes[pattern[1]].innerText != "" && boxes[pattern[2]].innerText != "") {
            if (boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[0]].innerText === boxes[pattern[2]].innerText) {
                boxes.forEach(box => {
                    box.disabled = true;
                });
                showWinner(boxes[pattern[0]].innerText);
            }
        }
    });
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

