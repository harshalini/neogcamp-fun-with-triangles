const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-button");
const output = document.querySelector("#output");

const correctAns = ["75", "right angled", "obtuse", "acute", "Isosceles", "Equilateral"];

function calculateScore() {
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);

    for (let value of formResults.values()) {
        if (value === correctAns[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your score is :" + score;
};
submitButton.addEventListener("click", calculateScore);