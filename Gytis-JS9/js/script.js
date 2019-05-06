let city = {
    name: 'Kaunas',
    population: 295269,
    area: 157,
    printData: function () {
        console.log(`Miesto pavadinimas: ${this.name}`);
        console.log(`Miesto populiacija: ${this.population}`);
        console.log(`Miesto plotas: ${this.area}`);
        console.log(`Miesto apgyvendinimo tankumas: ${this.density()} zmoniu/km2`);
    },
    density: function () {
        return this.population / this.area;
    },
    addPopulation: function (amount) {
        this.population += amount;
    }
};


city.printData();
//  vienas budas
//  city.addPopulation(Number(prompt('Pridekite populiacijos')));
//  antras budas
//  city.addPopulation(+prompt('Pridekite populiacijos'));
//  trecias budas
//  city.addPopulation(prompt('Pridekite populiacijos') * 1);

city.printData();

//knyga "Javascript design patterns"

//factory pattern
function cityFactory(name, pop, area) {
    return {
        name: name,
        population: pop,
        area: area,
        printData: function () {
            console.log(`Miesto pavadinimas: ${this.name}`);
            console.log(`Miesto populiacija: ${this.population}`);
            console.log(`Miesto plotas: ${this.area}`);
            console.log(`Miesto apgyvendinimo tankumas: ${this.density()} zmoniu/km2`);
        },
        density: function () {
            return this.population / this.area;
        },
        addPopulation: function (amount) {
            this.population += amount;
        }
    }
}

class City {
    constructor(name, area, population) {
        this.name = name;
        this.area = area;
        this.population = population;
    }

    printData() {
        console.log(`Miesto pavadinimas: ${this.name}`);
        console.log(`Miesto populiacija: ${this.population}`);
        console.log(`Miesto plotas: ${this.area}`);
        console.log(`Miesto apgyvendinimo tankumas: ${this.density()} zmoniu/km2`);
    }

    density() {
        return this.population / this.area;
    }
}

let city2 = new City('Kaunas', 157, 295269);
let city3 = new City('Vilnius', 401, 544386);


city2.printData();
city3.printData();




































