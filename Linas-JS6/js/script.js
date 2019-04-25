/*
function perimetroSkaiciavimas(krastine, kitaKrastine, darKitaKrastine) {
    var perimetras = krastine + kitaKrastine + darKitaKrastine;
    console.log(perimetras);

    return perimetras;
}

var a = 7;
var b = 9;
var c = 8;

perimetroSkaiciavimas(a,b,c);

var h = 9;
var j = 10;
var k = 11;


var manoFunkcAtsakymas = perimetroSkaiciavimas(perimetroSkaiciavimas(h,j,k),j,k);

console.log(manoFunkcAtsakymas);
*/

function greitis(atstumasInKm, laikasInVal) {
    let meters = atstumasInKm * 1000;
    let sec = laikasInVal * 3600;
    return meters / sec;
}

function printToScreen(speed) {
    document.getElementById('ataskymas').innerHTML += `<div> Greitis yra: ${speed.toFixed(2)}m/sec </div>`;
}

printToScreen(greitis(100, 1));
printToScreen(greitis(120, 2));
printToScreen(greitis(200, 3.5));


function addColor() {
    document.body.style.backgroundColor = "red";
}

function removeColor() {
    document.body.style.background = "none";
}

var isColor = false;
var colorCode = "#66adf6";

function toggleColor() {
    if (isColor) {
        document.body.style.background = "none";
        isColor = false;
    } else {

        document.body.style.backgroundColor = colorCode;
        isColor = true;
    }

}


function changeColorCode(inputColor) {

    let abecele = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'h', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'z'];

    let colorString = inputColor;
    let curentArray = colorString.toArray();
    for (let i = 0; i < curentArray.length; i++) {
        if (isNaN(curentArray[i])) {

        }
    }
}






























