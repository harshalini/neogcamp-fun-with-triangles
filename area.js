const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculateButton = document.querySelector("#calculate-button");
const message = document.querySelector("#error-message");

message.style.display = "none";

calculateButton.addEventListener("click", function measureSide() {
    if (base.value && height.value) {
        if (base.value > 0 && base.value > 0) {
            calculateArea();
        } else {
            showMessage("Please enter side greater than 0");
        }
    } else {
        showMessage("Please fill both the sides.")
    }

})

function calculateArea() {
    const area = (0.5 * (base.value) * (height.value)).toFixed(2);
    showMessage("The area of this triangle is: " + area);

}

function showMessage(msg) {
    message.style.display = "block";
    message.innerHTML = msg;
}

function hideMessage() {
    message.style.display = "none";
}