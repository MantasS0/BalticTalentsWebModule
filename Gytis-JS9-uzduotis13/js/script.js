//  vienas budas
//  city.addPopulation(Number(prompt('Pridekite populiacijos')));
//  antras budas
//  city.addPopulation(+prompt('Pridekite populiacijos'));
//  trecias budas
//  city.addPopulation(prompt('Pridekite populiacijos') * 1);

/*Sukurkite studento klasę (Studentas), kuri turėtų vardo, pavardės ir pažymių atributus (pažymius saugokite masyve).
Atributai turi būti priskiriami kuriant objektą.
Studentas turi turėti metodus:
*Pažymių vidurkio apskaičiavimo metodą.
*Naujo pažymio pridėjimo metodą. (Jei į masyvą norite pridėti naują reikšmę naudokite
* masyvoPavadinimas.push(NAUJAREIKŠMĖ) metodą)
*Duomenų atspausdinimo metodą. Turi būti atspausdinamas studento vardas, pirmoji pavardės raidė ir pažymio vidurkis.
* Jei studento vidurkis 7 ar didesnis, būna atspausdinamas užrašas "šaunuolis!".

Sukurkite bent du studentus ir panaudokite duotus metodus.

Papildoma užduotis:
Studentui sukurti palyginimo metodą, kuriame per argumentą galime perduoti kito studento objektą
ir tada būtų atspausdinama, kurio studento vidurkis aukštesnis.*/


class Student {

    constructor(name, surname, grades) {
        this.name = name;
        this.surname = surname;
        this.grades = grades;
    }

    getAverage() {
        let sum = 0;
        for (let grade of this.grades) {
            console.log(grade);
            sum += grade;
        }
        return (sum / this.grades.length).toFixed(1);
    }

    addGrade(newGrade) {
        this.grades.push(newGrade);
    }

    printData() {
        console.log(`Student: ${this.name} ${this.surname.charAt(0)}. AVG.Mark.: ${this.getAverage()}`)
    }

    compareToTheDeath(student){
        let winner = undefined;

        if (this.getAverage()>student.getAverage()){
            winner = this;
        } else if (this.getAverage()<student.getAverage()){
            winner = student;
        } else {
            console.log('Both are equal!')
        }

        if (winner!==undefined) {
            console.log(`Student ${winner.name} ${winner.surname.charAt(0)}. won the battle with AVG.Mark. of ${winner.getAverage()}`)
        }
    }
}

let student1 = new Student('Marius', 'Taurutis', [10, 10, 8, 8]);
student1.printData();

let student2 = new Student('Arunas', 'Botagas',[]);

student2.addGrade(9);
student2.addGrade(8);
student2.addGrade(7);
student2.addGrade(6);

student2.printData();

student1.compareToTheDeath(student2);
































