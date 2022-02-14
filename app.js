// create pin *********************************************
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    } else {
        return getPin()
    }
}
// pin genaretor function ********************************************
function generatePin() {
    const pin = getPin();
    document.getElementById("show-pin").innerText = pin;
}
// pin typed *******************************************************
document.getElementById("keypad").addEventListener('click', function (e) {
    const number = e.target.innerText;

    const calInput = document.getElementById("typed-numbers");
    if (isNaN(number)) {
        if (number == 'C') {
            calInput.value = '';
        }
    } else {
        const previousNumber = calInput.value
        const newNumber = previousNumber + number
        calInput.value = newNumber;
    }
});
// pin verification ************************
function verifyPin() {
    const pin = document.getElementById('show-pin').innerText;
    const typedPin = document.getElementById("typed-numbers").value;
    const successMessage = document.getElementById("success");
    const errorMessage = document.getElementById("faild");
    const count = document.getElementById("count");

    if (pin == typedPin) {
        successMessage.style.display = 'block'
        errorMessage.style.display = 'none'
    } else {
        errorMessage.style.display = 'block'
        successMessage.style.display = 'none'
        var countNumber = parseFloat(count.innerText);
        countNumber--;
        if (countNumber >= 1) {
            console.log(countNumber);
            count.innerText = countNumber;
        } else if (countNumber == 0) {
            alert('Wrong Pin for 3 times page refreshing');
            window.location.reload()
        }
    }

}
function del() {
    var del = document.getElementById("typed-numbers");
    del.value = del.value.slice(0, -1)
}