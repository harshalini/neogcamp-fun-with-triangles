const angle1 = document.querySelector("#angle-1");
const angle2 = document.querySelector("#angle-2");
const angle3 = document.querySelector("#angle-3");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");

message.style.display = "none";

checkButton.addEventListener("click", function measureAngle() {
    if (angle1.value && angle2.value && angle3.value) {
        if (angle1.value > 0 && angle2.value > 0 && angle3.value > 0) {
            checkSum();
        } else {
            showMessage("Please enter angle greater than 0");
        }
    } else {
        showMessage("Please fill all the angles.")
    }

})

function checkSum() {
    if (Number(angle1.value) + Number(angle2.value) + Number(angle3.value) === 180) {
        showMessage("These angles make a triangle.")
    } else {
        showMessage("These angles don't make a triangle.")
    }
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerHTML = msg;
}

function hideMessage() {
    message.style.display = "none";
}