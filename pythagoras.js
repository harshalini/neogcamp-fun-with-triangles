const side1 = document.querySelector("#side-1");
const side2 = document.querySelector("#side-2");
const calculateButton = document.querySelector("#calculate-button");
const message = document.querySelector("#error-message");

message.style.display = "none";

calculateButton.addEventListener("click", function measureSide() {
    if (side1.value && side2.value) {
        if (side1.value > 0 && side2.value > 0) {
            calculateHypotenus();
        } else {
            showMessage("Please enter side greater than 0");
        }
    } else {
        showMessage("Please fill both the sides.")
    }

})

function calculateHypotenus() {
    const hypoSq = (Number(side1.value) * Number(side1.value)) + (Number(side2.value) * Number(side2.value));
    const hypoSide = Math.sqrt(hypoSq).toFixed(2);
    showMessage("The hypotenus side is: " + hypoSide);

}

function showMessage(msg) {
    message.style.display = "block";
    message.innerHTML = msg;
}

function hideMessage() {
    message.style.display = "none";
}