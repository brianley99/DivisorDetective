//get the start and end numbers from the inputs
//enrty point AKA controller function
function getValues() {

    let firstValue = document.getElementById('firstValue').value;
    let secondValue = document.getElementById('secondValue').value;
    let limitValue = document.getElementById('limitValue').value;

    let firstNumber = parseInt(firstValue);
    let secondNumber = parseInt(secondValue);
    let limitNumber = parseInt(limitValue);

    if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber) && Number.isInteger(limitNumber)) {
        // Valid numbers
        let numberArray = generateFizzBuzz(limitNumber);
        displayFizzBuzz(numberArray, firstNumber, secondNumber);
    } else {
        // Display an error
        Swal.fire({
            icon: 'error',
            title: 'Ooops!',
            text: 'Please enter valid Numbers for the start and and values',
            backdrop: 'false'
        });
    }



}

//generate the range of numbers to display
//business logic function
function generateFizzBuzz(limitNumber) {

    let numbers = [];

    for (let i = 1; i <= limitNumber; i++) {
        numbers.push(i);
    }

    return numbers; // => [0, 1, 2, ..., 100]

}

//showing the generated numbers on the page and bolding even numbers
//view function
function displayFizzBuzz(numbers, firstNumber, secondNumber) {

    let results = '';

    for (let index = 0; index < numbers.length; index = index + 1) {

        let currentNumber = numbers[index];

        if (currentNumber % firstNumber == 0 && currentNumber % secondNumber == 0) {
            results = results + '<tr><td class="binary-bandit">The Binary Bandit!</td></tr>';
        } else if (currentNumber % firstNumber == 0) {
            results = results + '<tr><td class="binary">Binary</td></tr>';
        } else if (currentNumber % secondNumber == 0) {
            results = results + '<tr><td class="bandit">Bandit</td></tr>';
        } else {
            results = results + '<tr><td>' + currentNumber + '</td></tr>';
        }

    }

    let tableBody = document.getElementById('results');
    tableBody.innerHTML = results;

}