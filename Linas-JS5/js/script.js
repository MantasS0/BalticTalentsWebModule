let masyvas = [-10, 15, 20, 55, -3, -5, 0, 35];
let atsakymas = [];

for (let i = 0; i < masyvas.length; i++) {
    if (masyvas[i] > 0) {
        atsakymas.push(masyvas[i]);
    }
}

let isvedimas = document.getElementById('atsakymas');

for (let i = 0; i < atsakymas.length; i++) {
    if (i === atsakymas.length-1) {
        isvedimas.innerHTML += `<li style="color:blue;">${atsakymas[i]}</li>\n`;
        break;
    }
    isvedimas.innerHTML += `<li>${atsakymas[i]}</li>\n`;
}

