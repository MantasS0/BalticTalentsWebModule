//JSON - java script object notation

//this is a MAP
var cat = {
    name: 'Garfildas',
    age: 8,
    pavadelis: {
        spalva: 'ruda',
        papuosimai: false
    }
};

var cat2 = {
    name: 'Tasikas',
    age: 5,
    pavadelis: {
        spalva: 'raudona',
        papuosimai: true
    }
};

console.log(cat.name + ' yra ' + cat.age + ' metu amziaus');
console.log('Katino pavadelio spalva yra ' + cat.pavadelis.spalva);

//Masyvas (Array)
var krepsininkai = ['Sabonis', 'Kurtinaitis', 'Jasikevicius', 11];

krepsininkai[3] = 'Valaciunas';


for (var i = 0; i < krepsininkai.length; i++) {
    console.log(krepsininkai[i]);
}

console.log(cat);


var lankytojai = [
    {
        vardas: 'Jurgis',
        amzius: 18
    }, {
        vardas: 'Maryte',
        amzius: 24
    }
];

console.log(lankytojai[1].vardas);

if (lankytojai[0].amzius >= 18) {
    console.log(`${lankytojai[0].vardas} gali lankytis xxx ekspozicijoje.`)
} else {
    console.log('Lankytojas NEGALI lankytis xxx ekspozicijoje.')

}


























