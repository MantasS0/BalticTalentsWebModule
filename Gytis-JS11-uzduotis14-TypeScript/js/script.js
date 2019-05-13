var Car = /** @class */ (function () {
    function Car(name, speed) {
        this.carName = name;
        this.carSpeed = speed;
        this.carDistanceTraveled = 0;
    }
    Car.prototype.drive = function (time) {
        this.carDistanceTraveled = this.carSpeed * time;
    };
    Car.prototype.printData = function () {
        console.log("Car Name: " + this.carName + "\n        Car speed: " + this.carSpeed + "\n        Car distance traveled: " + this.carDistanceTraveled);
    };
    return Car;
}());
var carPark = [];
var inputName = document.getElementById('name');
var inputSpeed = document.getElementById('speed');
var inputTime = document.getElementById('time');
var buttonAddVehicle = document.querySelector('.buttons .addButton');
var buttonRace = document.querySelector('.buttons .raceButton');
buttonAddVehicle.addEventListener('click', function () {
    var newCar = new Car(inputName.value, parseInt(inputSpeed.value));
    console.log(newCar.carName + "," + newCar.carSpeed + "," + newCar.carDistanceTraveled);
    carPark.push(newCar);
});
buttonRace.addEventListener('click', function () {
    carPark.forEach(function (car) {
        car.drive(parseInt(inputTime.value));
    });
    carPark.forEach(function (car) {
        car.printData();
    });
});
//# sourceMappingURL=script.js.map