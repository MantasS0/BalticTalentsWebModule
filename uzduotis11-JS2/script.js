/*
Parašykite programą, kurioje masyve būtų saugomi mašinų objektai. Kiekvienoje mašinoje saugomi nuvažiuoto kelio ir laiko (kiek mašina užtruko kelyje) duomenys bei mašinos valstybiniai numeriai.

    Atspausdinkite duotus mašinų duomenis bei apskaičiuokite vidutinį kiekvienos mašinos greitį ir jį taip pat atspausdinkite. Jei vidutinis mašinos greitis viršija 60, atspausdinkite mašinos valstybinius numerius.*/

var lawOffenderVehicles = [];

var currentDistance = 100;
var currentTime = 1.5;
var currentRegistrationPlates = 'ABC111';

var vehicle1 = {
    distance: currentDistance,
    time: currentTime,
    registrationPlates: currentRegistrationPlates
};

var vehicle2 = {
    distance: 60,
    time: 2,
    registrationPlates: 'CAB888'
};

var registeredVehicles = [vehicle1, vehicle2,
    {
        distance: 200,
        time: 2,
        registrationPlates: 'BOSAS'
    }
];

var vehicle4 = {
    distance: 30,
    time: 0.2,
    registrationPlates: 'ZED420'
};

registeredVehicles.push(vehicle4);

for (var i = 0; i < registeredVehicles.length; i++) {
    var vehicleDistance = registeredVehicles[i].distance;
    var vehicleTime = registeredVehicles[i].time;
    var vehicleSpeed = vehicleDistance / vehicleTime;
    console.log(`Automobilis Nr.${i+1} nuvaziavo ${vehicleDistance} km per ${vehicleTime} h\r
    Automobilio vidutinis greitis yra: ${Math.round(vehicleSpeed)} km/h`);
    if (vehicleSpeed > 60) {
        console.log(`Sis automobilis (${registeredVehicles[i].registrationPlates}) virsijo greiti ${(vehicleSpeed - 60).toFixed(2)} km/h.\r
        Israsyta ${Math.pow(vehicleSpeed - 60, 2).toFixed(2)} \u20AC bauda.`)
    }
    console.log('');
}






