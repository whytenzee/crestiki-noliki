let currentPlayer = "X";
let moves = ["", "", "", "", "", "", "", "", ""];

function makeMove(index) {
  if (moves[index] === "") {
    moves[index] = currentPlayer;
    document.getElementsByClassName("cell")[index].innerText = currentPlayer;
    if (checkForWin()) {
      document.getElementById("message").innerText = currentPlayer + " победили!";
    } else if (moves.every((val) => val !== "")) {
      document.getElementById("message").innerText = "Это ничья!";
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
  }
}

function checkForWin() {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  return winConditions.some((condition) => {
    return moves[condition[0]] !== "" &&
      moves[condition[0]] === moves[condition[1]] &&
      moves[condition[1]] === moves[condition[2]];
  });
}

function resetBoard() {
  moves = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  document.getElementById("message").innerText = "";
  
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
}
