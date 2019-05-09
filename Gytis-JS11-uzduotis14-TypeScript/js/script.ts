class Car {
    carName: string;
    carSpeed: number;
    carDistanceTraveled: number;

    constructor(name: string, speed: number) {
        this.carName = name;
        this.carSpeed = speed;
        this.carDistanceTraveled = 0;
    }

    drive(time: number) {
        this.carDistanceTraveled = this.carSpeed * time;
    }

    printData(): void {
        console.log(`Car Name: ${this.carName}
        Car speed: ${this.carSpeed}
        Car distance traveled: ${this.carDistanceTraveled}`);
    }
}

let carPark: Car[] = [];

const inputName = (<HTMLInputElement>document.getElementById('name'));
const inputSpeed = (<HTMLInputElement>document.getElementById('speed'));
const inputTime = (<HTMLInputElement>document.getElementById('time'));
const buttonAddVehicle = (<HTMLDivElement>document.querySelector('.buttons .addButton'));
const buttonRace = (<HTMLDivElement>document.querySelector('.buttons .raceButton'));

buttonAddVehicle.addEventListener('click', () => {
    let newCar: Car = new Car(inputName.value, parseInt(inputSpeed.value));
    console.log(newCar.carName + "," + newCar.carSpeed + "," + newCar.carDistanceTraveled);
    carPark.push(newCar);
});

buttonRace.addEventListener('click', () => {
    carPark.forEach((car) => {
        car.drive(parseInt(inputTime.value));
    });

    carPark.forEach((car) => {
        car.printData();
    });
});




