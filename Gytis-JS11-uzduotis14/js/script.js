/*Aprašykite mašinos konstruktorinę funkciją (arba klasę), kiekviena mašina gali turėti savo greitį (jis nurodomas
 sukuriant objektą), pavadinimą (jis taip pat nurodomas sukuriant objektą) ir nuvažiuotą atstumą (sukuriant objektą
 jis lygus 0).
Mašina turi turėti metodą važiuoti(laikas), kuriame galime perduoti laiko parametrą. Metode apskaičiuojamas nuvažiuotas
kelias (laikas*greitis) ir pridedamas prie viso nuvažiuoto atstumo.
Mašina turi turėti metodą spausdintiDuomenis(), kurio metu atspausdinami mašinos duomenys (pavadinimas, greitis ir
nuvažiuotas kelias).

Sukurkite tuščią mašinų masyvą.

Sukurkite du HTML mygtukus "Pridėti mašiną" ir "Lenktyniauti".
Sukurkite tris HTML input laukelius "Pavadinimas", "Greitis" ir laikas.

Paspaudus mygtuką "Pridėti mašiną" yra sukuriamas naujas mašinos objektas, kuris išsaugomas mašinų masyve, o jo greičio
ir pavadinimo reikšmės lygios input laukelių "Pavadinimas" ir "Greitis" reikšmėms.

Paspaudus mygtuką "Lenktyniauti" kiekvienai mašinai masyve yra iškviečiamas važiavimo metodas, o jam nurodoma "Laikas"
input laukelio reikšmė. Įvykdžius važiavimo metoda būna atspausdinamos visos mašinos.*/

let carPark = [];

class Car {
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
        this.distanceTraveled = 0;
    }

    drive(time) {
        this.distanceTraveled = this.speed * time;
    }

    printData() {
        console.log(`Car Name: ${this.name}\r
        Car speed: ${this.speed}\r
        Car distance traveled: ${this.distanceTraveled}`);
    }
}

const inputName = document.getElementById('name');
const inputSpeed = document.getElementById('speed');
const inputTime = document.getElementById('time');
const buttonAddVehicle = document.querySelector('.buttons .addButton');
const buttonRace = document.querySelector('.buttons .raceButton');

buttonAddVehicle.addEventListener('click', () => {
    carPark.push(new Car(inputName.value, parseInt(inputSpeed.value)));
});

buttonRace.addEventListener('click', () => {
    carPark.forEach((car)=>{
        car.drive(parseInt(inputTime.value))
    });

    carPark.forEach((car)=>{
        car.printData();
    });

});





















































