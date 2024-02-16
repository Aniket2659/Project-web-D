console.log("Welcome to Tic Tac Toe");
let audioTurn = new Audio("../assets/ting.mp3");
let gameover = new Audio("../assets/gameover.mp3");
let turn = "X";
let isgameover = false;
let clickcount = 0;

// this function is changing the Turn
function changeTurn() {
  return turn === "X" ? "0" : "X";
}

// functio for checking the wining condition
function checkWin() {
  let boxtext = document.getElementsByClassName("boxtext");
  // console.log(boxtext);
  // console.log(typeof boxtext);
  let wins = [
    [0, 1, 2, 5, 7, 0],
    [3, 4, 5, 5, 22, 0],
    [6, 7, 8, 5, 38, 0],
    [0, 3, 6, -10, 23, 90],
    [1, 4, 7, 5, 23, 90],
    [2, 5, 8, 20, 22, 90],
    [0, 4, 8, -3, 22, 45],
    [2, 4, 6, -2, 22, 135],
  ];

  wins.forEach((e, index) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxtext[e[0]].innerText + " won";
      isgameover = true;
      document
        .querySelector(".imgbox")
        .getElementsByTagName("img")[0].style.width = "200px";

      document.querySelector(".line").classList.add(`strike-${index}`);

      document
        .getElementsByClassName("gameContainer")[0]
        .classList.add("disable");
    }
  });
  if (clickcount == 9) {
    document
      .getElementsByClassName("gameContainer")[0]
      .classList.add("disable");
    isgameover = true;
    if (isgameover) {
      document.getElementsByClassName("info")[0].innerText = "Match Draw";
    }
  }
}

// game Logic
function game() {
  let boxes = document.getElementsByClassName("box");
  // console.log(boxes);
  Array.from(boxes).forEach((element) => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
      console.log("clicked");
      console.log("'" + boxtext.innerHTML + "'");

      if (boxtext.innerHTML === "") {
        console.log("inside if of game logic");
        boxtext.innerHTML = turn;
        audioTurn.play();
        turn = changeTurn();
        clickcount++;
        console.log(clickcount);
        checkWin();
        if (!isgameover) {
          document.getElementsByClassName("info")[0].innerText =
            "Turn for " + turn;
        }
      }
      console.log("moving out");
    });
  });
}
// Add onClick Listener to the reset button
reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element, index) => {
    element.innerText = "";
    document.querySelector(".line").classList.remove(`strike-${index}`);
  });
  document.querySelector(".gameContainer").classList.remove("disable");
  clickcount = 0;
  turn = "X";
  isgameover = false;
  // document.querySelector(".line").style.width = "0vw";
  document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
  document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width =
    "0px";
});

game();
