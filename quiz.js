const quizForm = document.querySelector(".quiz-form");
const submitButton = document.querySelector("#submit-button");
const questions = document.querySelectorAll(".question-container");
const output = document.querySelector("#output");

const correctAns = ["75", "right angled", "obtuse", "acute", "Isosceles", "Equilateral", "3*a", "40"];

let score = 0;
quizForm.addEventListener('submit', (e) => {

    e.preventDefault();

    const formResults = new FormData(quizForm);
    let index = 0;
    for (let value of formResults) {
        if (value[1] == correctAns[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    output.innerText = "Your score is: " + score;
    submitButton.style.display = "none";
});