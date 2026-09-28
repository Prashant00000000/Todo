let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let Level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");

        started = true;
        Level = 0;
        gameseq = [];
        userseq = [];

        levelup();
    }
});

function gameflash(btn) {
    btn.classList.add("flash");

    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userflash(btn) {
    btn.classList.add("userflash");

    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}

function levelup() {
    userseq = [];

    Level++;
    h2.innerText = `Level ${Level}`;

    // random button choose
    let randomindex = Math.floor(Math.random() * 4);
    let randomcolor = btns[randomindex];

    let randombtn = document.querySelector(`.${randomcolor}`);

    gameseq.push(randomcolor);

    console.log(gameseq);

    gameflash(randombtn);
}

function checkans() {
    let indx = userseq.length - 1;

    if (userseq[indx] === gameseq[indx]) {

        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 500);
        }

    } else {
        h2.innerText = `Game over! Your score was ${Level - 1}. Press any key to restart.`;
        reset();
    }
}

function btnPress() {

    let btn = this;

    userflash(btn);

    let userColor = btn.getAttribute("id");

    userseq.push(userColor);

    checkans();
}

let allbtns = document.querySelectorAll(".btn");

for (let btn of allbtns) {
    btn.addEventListener("click", btnPress);
}
function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    Level = 0;
}