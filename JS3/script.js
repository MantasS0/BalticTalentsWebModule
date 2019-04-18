var cities = [
    {
        name: 'Kaunas',
        population: 295269,
        area: 157,
        isTemporaryCapital: true
    },
    {
        name: 'Klaipeda',
        population: 152818,
        area: 98
    }
];

//naujas globalus kintamasis
var kaunasDensity = cities[0].population / cities[0].area;

//naujas atributas priskiriamas objektui
cities[1].density = cities[1].population / cities[1].area;

if (cities[1].density > 1500) {
    console.log(`${cities[1].name} yra vidutiniskai apgyvendintas miestas`);
}

if (cities[0].population / cities[0].area > 1600) {
    console.log(`Ir Kaune galime gyventi su likusiais ${cities[0].population - 1} gyventojais.`)
}

console.log(`Kauno apgyvendinimo tankumas yra: ${cities[0].population / cities[0].area} zmoniu/1km\xb2`);

if (cities[0].isTemporaryCapital) {
    console.log('Kaunas yra laikinoji sostine (ir jei Vilnius nesupyks, tai ir Lietuvos sirdis).')
}

if (cities[1].population % 2 === 0 || cities[1].population > 200000) {
    console.log(`${cities[1].population} yra lyginis skaicius arba populiacija yra didesne nei 200 000`)
} else {
    console.log(`${cities[1].population} nera lyginis skaicius`)
}

if (cities[0].population > 100000 && cities[1].population > 100000) {
    console.log("Abu miestai yra didmiesciai")
}


var uzsakymai = [
    {
        preke: 'Kebabas su vistiena',
        kaina: 3.70
    },
    {
        preke: 'Kebabas su falafeliais',
        kaina: 3.30
    },
    {
        preke: 'Saslykas',
        kaina: 4.20
    }
];

var x = 0;

while (x < 10) {
    console.log(x);
    x++;
}

console.log('Ciklas baigtas');

var y = 0;

while (y < uzsakymai.length) {
    console.log(uzsakymai[y].preke);
    console.log(uzsakymai[y].kaina);
    y++;
}

for (let i = 0; i < uzsakymai.length; i++) {
    console.log(uzsakymai[i].preke);
    console.log(uzsakymai[i].kaina);
}































































