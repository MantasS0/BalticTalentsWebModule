/*
function changeLanguage(language) {
    if (language !== 'en' && language !== 'lt' && language !== 'de' && language !== 'es') {
        hello.innerHTML = 'Hello World!';
    } else {
        if (language === 'en') {
            hello.innerHTML = 'Hello World!';
        }
        if (language === 'lt') {
            hello.innerHTML = 'Labas Pasauli!';
        }
        if (language === 'de') {
            hello.innerHTML = 'Hallo Welt!';
        }
        if (language === 'es') {
            hello.innerHTML = 'Hola Mundo!';
        }
    }
}
*/


document.getElementById("scoreCalculate").onclick = displayGrade;

function displayGrade() {
    let score = document.getElementById("score").value;
    let grade;
    console.log(`Passed score is: ${score}`);
    // document.getElementById("grade").innerHTML = 'The grade is: ';
    if (score > 100 || score < 0) {
        alert("The sore is incorrect format.")
    } else {
        if (score > 80) {
            grade = 'A';
        } else if (score > 60) {
            grade = 'B';
        } else if (score > 40) {
            grade = 'C';
        } else if (score > 20) {
            grade = 'D';
        } else if (score >= 0) {
            grade = 'F';
        }
        document.getElementById("grade").innerHTML = grade;
        console.log(`Calculated grade is: ${grade}`)
    }
}



















