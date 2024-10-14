const rules = document.querySelector(".rules-container");
const rulesBtn = document.getElementById("rules_button");
const inputGuess = document.getElementById("curr_guess");
const guessBtn = document.getElementById("guess_btn");
const resultDiv = document.querySelector(".results");
const gameEnd = document.querySelector(".game-end");
const score = document.querySelector(".score");
// const mainOverlaydark = document.getElementById('overlaydark');
// const closeButton = document.getElementById("close_button");

const mainBody = document.body;

let continueFlag = 1;

let steps = 0;

localStorage.setItem("store", [25, 56]);

function toggleScore() {
    // score.classList.toggle('active');
    gameEnd.classList.toggle('active');
    // mainBody.classList.toggle('modal-open');
    // mainOverlaydark.classList.toggle('overlay-on');
}

// mainBurgerMenu.addEventListener('click', (event) => {
//     // console.log(event);
//     if (event.target.classList.contains('active')) {
//         mainNavlist.classList.remove('active');
//     }

// });


// function toggleRules() {
//     rules.classList.toggle('active');
//     mainBody.classList.toggle('modal-open');
//     mainOverlaydark.classList.toggle('overlay-on');
// }

// rulesBtn.addEventListener('click', (e) => {
//     toggleRules();
// });

// closeButton.addEventListener('click', (e) => {
//     console.log("Close button");
//     toggleRules();
// });



// mainBurgerMenu.addEventListener('click', (event) => {
//     // console.log(event);
//     if (event.target.classList.contains('active')) {
//         mainNavlist.classList.remove('active');
//     }

// });

let numberToGuess = createNumberToGuess();
console.log("Number to guess " + numberToGuess);

function validate(value) {

    const numValue = Number(value);

    if (numValue < 1023 || numValue > 9876) {
        alert("Wrong number");
        continueFlag = 0;
    }
    else {
        continueFlag = 1;
    }
}

function endGame() {
    console.log("END END !!!!!!!!!!!!!!!!!!!!!!!!!!!!!");


    score.innerHTML = `You've guessed with ${steps} tries`;
    console.log(score.innerHTML);
    // alert(`You've guessed with ${steps} tries`);
    toggleScore();

    let myAudio = document.querySelector('#audio')
    myAudio.play();
    if (typeof (Storage) !== "undefined") {
        const scoreDiv = document.createElement("div");
        scoreDiv.innerHTML = "Last results: " + localStorage.getItem("store") + "," + steps;
        score.appendChild(scoreDiv);
        let bestResults = localStorage.getItem("store");
        console.log("best " + bestResults);
        // let lastBest = bestResults.pop();
        // if (steps < lastBest || bestResults.length < 10) {
        //     bestResults.push(steps);
        //     bestResults.sort();
        //     localStorage.setItem("store", bestResults);
        //     console.log("best " + bestResults);
        // }
        // Code for localStorage/sessionStorage.
    } else {
        alert("Sorry! No Web Storage support.");
    }
}
// document.querySelector("input").focus();
function showResult(value) {
    if (continueFlag === 1) {
        let resultOfGuess = '';
        const guessDiv = document.createElement("div");
        guessDiv.innerHTML = value;
        resultDiv.appendChild(guessDiv);

        const separatorDiv = document.createElement("div");
        separatorDiv.innerHTML = '|';
        resultDiv.appendChild(separatorDiv);





        resultOfGuess = calculateResult(value, numberToGuess);
        const guessResultDiv = document.createElement("div");
        guessResultDiv.innerHTML = resultOfGuess;
        resultDiv.appendChild(guessResultDiv);

        if (resultOfGuess === "B B B B ") {
            endGame();


        }
    }

}

function calculateResult(value, numberToGuess) {
    let calculatedResult = "";

    let valueArray = String(value).split('').map(Number);

    for (let j = 0; j < 4; j++) {
        if (numberToGuess.includes(valueArray[j])) {
            if (numberToGuess[j] === valueArray[j]) {
                calculatedResult = calculatedResult + "B ";
            }
            else {
                calculatedResult = calculatedResult + "C ";
            }
        }
    }

    return calculatedResult;
}

function createNumberToGuess() {
    let createdNnumber = [];
    for (let i = 0; i < 4; i++) {
        do {
            createdNnumber[i] = Math.floor(Math.random() * 9);

        }
        while (createdNnumber[0] === 0 || createdNnumber.includes(createdNnumber[i]) && createdNnumber.indexOf(createdNnumber[i]) != createdNnumber.lastIndexOf(createdNnumber[i]));
    }
    return createdNnumber;
}


guessBtn.addEventListener('click', (e) => {
    e.preventDefault();
    value = inputGuess.value;
    validate(value);
    steps++;
    showResult(value);

    console.log(steps);
})






