
function reverse() {
    let input = document.getElementById('input').value.toString();
    let splitString = input.split("");
    let reversedArray = splitString.reverse();
    document.getElementById('output').value = reversedArray.join("");
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









