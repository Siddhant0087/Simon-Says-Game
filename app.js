let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector('h2');
let highScore = 0;

let btns = ['red', 'green', 'orange', 'purple'];

gameStatus = false;
let level = 0;

document.addEventListener('keypress', function () {
  if (gameStatus == false) {
    console.log('game Started');
    gameStatus = true;

    levelUp();
  }
});

// document.querySelector('body').addEventListener('click', function () {
//   if (!gameStatus) {
//     console.log('Game started');
//     gameStatus = true;
//     levelUp();
//   }
// });

function gameFlash(btn) {
  btn.classList.add('flash');
  setTimeout(function () {
    btn.classList.remove('flash');
  }, 250);
}

function userFlash(btn) {
  if (btn.classList[1] == 'orange') {
    btn.classList.add('lightOrange');
    setTimeout(function () {
      btn.classList.remove('lightOrange');
    }, 250);
  } else if (btn.classList[1] == 'red') {
    btn.classList.add('lightRed');
    setTimeout(function () {
      btn.classList.remove('lightRed');
    }, 250);
  } else if (btn.classList[1] == 'green') {
    btn.classList.add('lightGreen');
    setTimeout(function () {
      btn.classList.remove('lightGreen');
    }, 250);
  } else if (btn.classList[1] == 'purple') {
    btn.classList.add('lightPurple');
    setTimeout(function () {
      btn.classList.remove('lightPurple');
    }, 250);
  }
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randInd = Math.floor(Math.random() * 4);
  let randColor = btns[randInd];
  let randBtn = document.querySelector(`.${randColor}`);
  // console.log(randInd);
  // console.log(randColor);
  // console.log(randBtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (highScore < level) {
      highScore = level;
    }
    h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br><br> Higest Score is <b>${highScore}</b> press any key to start!!`;
    document.querySelector('body').style.backgroundColor = 'red';
    setTimeout(function () {
      document.querySelector('body').style.backgroundColor = 'white';
    }, 150);
    reset();
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute('id');
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
  btn.addEventListener('click', btnPress);
}

function reset() {
  gameStatus = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
