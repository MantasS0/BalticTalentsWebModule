function alphabetise(){
    let input = document.getElementById('input').value.toString();
    let splitString = input.split("");
    let reversedArray = splitString.sort();
    document.getElementById('output').value = reversedArray.join("");
}









