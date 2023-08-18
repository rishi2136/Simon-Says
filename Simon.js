let gameSeq = ["red", "yellow", "blue", "purple"];
let playerSeq = [];
let start = false;
let level = 0;
let newSeq = [];
let score = 0;
let highestScore = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
    if (start == false) {
        start = true;
        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flashColor");
    setTimeout(function () {
        btn.classList.remove("flashColor");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("clickColor");
    setTimeout(function () {
        btn.classList.remove("clickColor");
    }, 250);
}


function levelUp() {
    playerSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    //generate random color flash
    let colorIdx = Math.floor(Math.random() * 4);
    let btnColor = gameSeq[colorIdx];
    let randFlash = document.querySelector(`.${btnColor}`);
    newSeq.push(btnColor);
    // console.log(newSeq);
    gameFlash(randFlash);
}


function highScore(score) {
    if (highestScore <= score) {
        highestScore = score;
        h2.innerHTML = `Congratulation you create a HIGHSCORE <b> ${highestScore} </b> <br> Press any key to Play Again`;
    } else {
        h2.innerHTML = `Game Over Your score is <b> ${score} </b> <br>high score :<b>${highestScore}</b> <br>Press any key to Play Again`;
    }
}
// let body = document.querySelector("body");
let gameScreen = document.querySelector(".gameScreen");
function wrong() {
    gameScreen.classList.add("wrong");
    setTimeout(function () {
        gameScreen.classList.remove("wrong");
    }, 200);
}


function checkAns(idx) {
    if (playerSeq[idx] === newSeq[idx]) {
        if (playerSeq.length == newSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        score = level-1;
        highScore(score);
        console.log("Game Restart");
        wrong();
        reset();
    }
}


function btnPress() {
    //this access the btn element of btns as object
    let btn = this;
    userFlash(btn);
    let addSeq = btn.getAttribute("id");
    playerSeq.push(addSeq);
    checkAns(playerSeq.length - 1);
}

let btns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    start = false;
    playerSeq = [];
    level = 0;
    newSeq = [];
}







