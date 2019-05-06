/*Parašykite programą, kuri turėtų stačiakampių masyvą, kuriame saugotų jų aukščio ir pločio duomenis.
Aprašykite funkcijas, kurios apskaičiuoja stačiakampio plotą, perimetrą ir įstrižainę.
Panaudodami aprašytas funkcijas atvaizduokite visus stačiakampius ir jų savybės (NAUDOKITE CIKLĄ).

Papildomai sukurkite funkciją, į kurią perdavus stačiakampių masyvą, ji grąžintų didžiausią (pagal plotą) stačiakampį.
Atspausdinkite didžiausią stačiakampį į ekraną (užuomina - apsirašykite papildomą kintamajį, kuris saugo esamo
didžiausio stačiakampio reikšmę, o ją keiskite ciklo metu jei [i] stačiakampis didesnis už esamą).*/

const rectangles = [
    {width: 5, height: 10},
    {width: 30, height: 100},
    {width: 50, height: 20},
    {width: 75, height: 150},
    {width: 40, height: 120}
];

let biggestRectangleArea = 0;
let biggestRectangleIndex;

const inputWidth = document.getElementById('width');
const inputHeight = document.getElementById('height');
const button = document.getElementById('button');


function getRectanglePerimeter(width, height) {
    return (width + height) * 2;
}

function getRectangleArea(width, height) {
    return width * height;
}

function getRectangleDiagonal(width, height) {
    return Math.sqrt(width ** 2 + height ** 2);
}

function hasBiggestArea(area, index) {
    if (biggestRectangleArea<area) {
        biggestRectangleArea = area;
        biggestRectangleIndex = index;
    }
}

for (let i = 0; i < rectangles.length; i++) {

    let outputData = document.getElementById('infoContainer');
    let rectangleId = `rectangle${i}`;

    outputData.innerHTML += `<ul>
<li>Rectangle Nr.${i+1}</li>
<li>Rectangle width: ${rectangles[i].width}</li>
<li>Rectangle height: ${rectangles[i].height}</li>
<li>Rectangle perimeter: ${getRectanglePerimeter(rectangles[i].width,rectangles[i].height)}</li>
<li>Rectangle area: ${getRectangleArea(rectangles[i].width,rectangles[i].height)}</li>
<li>Rectangle diagonal: ${getRectangleDiagonal(rectangles[i].width,rectangles[i].height).toFixed(2)}</li>
</ul>`;

    document.querySelector('ul:last-child').setAttribute("id",rectangleId);

    hasBiggestArea(getRectangleArea(rectangles[i].width,rectangles[i].height),i);
}

let biggestRectangle = document.getElementById(`rectangle${biggestRectangleIndex}`);
let firstNode = biggestRectangle.querySelector('li:first-child');
let newNode = document.createElement('li');

newNode.textContent = 'I am the BIGGEST ONE!1!1!1';
newNode.style.cssText = 'margin: 10px 0; font-size: 22px;';

biggestRectangle.insertBefore(newNode,firstNode);
biggestRectangle.style.cssText = 'color: red; font-size: 18px; font-weight: 600';

document.getElementById('biggestRectangle').innerHTML = `<div style="width: ${rectangles[biggestRectangleIndex].width}px; height: ${rectangles[biggestRectangleIndex].height}px; background-color: red;"></div>`;

