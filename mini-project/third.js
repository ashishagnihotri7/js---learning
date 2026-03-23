let box = document.querySelectorAll(".box");
let reset = document.querySelector("#reseet");
let newgame = document.querySelector("#newgame");
let messagecontainer = document.querySelector(".msg-cotsiner");
let msg = document.querySelector("#msg");

let turno = true;
let count = 0;

const win = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
];

// click logic
box.forEach((b) => {
  b.addEventListener("click", () => {

    // prevent overwrite
    if (b.innerText !== "") return;

    if (turno) {
      b.innerText = "O";
      turno = false;
    } else {
      b.innerText = "X";
      turno = true;
    }

    b.disabled = true;
    count++;

    checkWinner();
  });
});

// show winner
const showWinner = (winner) => {
  msg.innerText = `Congratulations! Winner is ${winner}`;
  messagecontainer.classList.remove("hide");
  disableBoxes();
};

// show draw
const showDraw = () => {
  msg.innerText = "Match Draw!";
  messagecontainer.classList.remove("hide");
  disableBoxes();
};

// disable all boxes
const disableBoxes = () => {
  for (let b of box) {
    b.disabled = true;
  }
};

// reset game
const resetgame = () => {
  turno = true;
  count = 0;

  for (let b of box) {
    b.innerText = "";
    b.disabled = false;
  }

  messagecontainer.classList.add("hide");
};

// check winner
const checkWinner = () => {

  for (let pattern of win) {
    let pos1 = box[pattern[0]].innerText;
    let pos2 = box[pattern[1]].innerText;
    let pos3 = box[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        return;  
      }
    }
  }

  // draw condition
  if (count === 9) {
    showDraw();
  }
};

// buttons
reset.addEventListener("click", resetgame);
newgame.addEventListener("click", resetgame);


         // DAY 9 COMPLETE