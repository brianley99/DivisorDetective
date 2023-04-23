
//Controller
function getValues() {

    //Get Inputs from page
    let firstDivisor = document.getElementById('firstDivisor').value;
    let seconfDivisor = document.getElementById('secondDivisor').value;
    let rangeValue = document.getElementById('rangeValue').value;

    //Conver Inputs to numbers
    firstDivisor = parseFloat(firstDivisor);
    seconfDivisor = parseFloat(seconfDivisor);
    rangeValue = parseFloat(rangeValue);

    //Validate inputs
    if (Number.isInteger(firstDivisor) == false) {
        //First Divisor Error Display
        Swal.fire({
            icon: 'error',
            title: 'Ooops!',
            text: 'Please enter valid Number for First Divisor',
            backdrop: 'false'
        });
    } else if (Number.isInteger(seconfDivisor) == false) {
        //Second Divisor Error Display
        Swal.fire({
            icon: 'error',
            title: 'Ooops!',
            text: 'Please enter valid Number for Second Divisor',
            backdrop: 'false'
        });
    } else if (Number.isInteger(rangeValue) == false) {
        //Range Error Display
        Swal.fire({
            icon: 'error',
            title: 'Ooops!',
            text: 'Please enter valid Number for Range',
            backdrop: 'false'
        });
    } else {
        //Successfully Validated Inputs

        //Call generateDivisors
        let divisorNumbers = generateDivisors(firstDivisor, seconfDivisor, rangeValue);

        //Call displayDivisors
        displayDivisors(divisorNumbers);
    }
}

//Logic
function generateDivisors(firstDivisor, secondDivisor, rangeValue) {

    //Create empty array for numbers
    let divisors = [];

    //Add numbers to array using for loop
    for (let number = 1; number <= rangeValue; number++) {
        //Go through all numbers from 1 to rangeValue

        //Add 'binary', 'bandit', 'The Binary Bandit!' if disvisble
        if(number % firstDivisor == 0 && number % secondDivisor == 0){
            divisors.push('The Binary Bandit!');    
        } else if (number % firstDivisor == 0){
            divisors.push('Binary');
        } else if (number % secondDivisor == 0){
            divisors.push('Bandit');
        } else {
            divisors.push(number);
        };
    };

    //Return array
    return divisors;
}

//View
function displayDivisors(divisorNumbers) {

    //Create empty string to store table rows into
    let tabelRows = '';

    //Format all divisorNumbers to html table rows
    for (let index = 0; index < divisorNumbers.length; index++) {

        let element = divisorNumbers[index];

        //Highlight divisible values
        if (element == 'The Binary Bandit!') {
            tabelRows += `<tr><td class="text-danger fw-bold">${element}</td></tr>`;
        } else if (element == 'Binary') {
            tabelRows += `<tr><td class="fw-bold">${element}</td></tr>`;
        } else if ( element == 'Bandit') {
            tabelRows += `<tr><td class="fw-bold">${element}</td></tr>`;
        } else {
            tabelRows += `<tr><td>${element}</tr></td>`
        };
    }

    //Display table to page
    let tableBody = document.getElementById('resultsTableBody');
    tableBody.innerHTML = tabelRows;
    document.getElementById('results').classList.remove('d-none');
}
