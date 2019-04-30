/*
function reverse() {
    let input = document.getElementById('input').value.toString();
    let splitString = input.split("");
    let reversedArray = splitString.reverse();
    document.getElementById('output').value = reversedArray.join("");
}

function alphabetise(){
    let input = document.getElementById('input').value.toString();
    let splitString = input.split("");
    let reversedArray = splitString.sort();
    document.getElementById('output').value = reversedArray.join("");
}
*/

function addHelp() {

    let selected = getTempType();
    console.log(selected);
    if (selected === "celsius") {
        document.getElementById('temp1').innerHTML = 'F';
        document.getElementById('temp2').innerHTML = 'C';
    } else if (selected === "fahrenheit") {
        document.getElementById('temp1').innerHTML = 'C';
        document.getElementById('temp2').innerHTML = 'F';
    }
}

function convert() {
    /*    T(°C) = (T(°F) - 32) × 5/9     */
    /*    T(°F)=(T(°C) × 9/5) + 32          */

    let selected = getTempType();
    let atsakymas;
    let input = document.getElementById('input').value;
    if (selected === "celsius") {
        atsakymas = (input - 32) * 5 / 9;
    } else if (selected === "fahrenheit") {
        atsakymas = (input * 9 / 5) + 32;
    } else {
        console.log("Error occurred getting tempType");
        atsakymas = 'Error';
    }
    document.getElementById('output').value = atsakymas;
}

function getTempType() {
    return document.getElementById('selectTemp').value;
}

/*
let reversedNumber ='';
function reverse() {
    let input = document.getElementById('input').value;
    console.log(input);
    if (isNaN(input)) {
        alert('Not a number...');
    } else {
        input = Number.parseInt(input);
        if (input < 0) {
            reversedNumber += '-';
            input *= -1;
        }
        console.log(input);
        // while (input >= 1) {
            reversedNumber += (input % 10).toString();
            input%=10;
            console.log(input);
            console.log(reversedNumber);

        // }
        document.getElementById('output').value = reversedNumber;
    }
}
*/









