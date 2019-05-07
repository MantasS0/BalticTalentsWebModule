/*Sukurkite dvi klases: Miestas ir Namas.

Kiekvienas miestas galės turėti jam priklausančius namus bei rinkliavos tarifus (už elektrą, dujas ir vandenį).
Tarifai priskiriami per konstruktorių.

Kiekvienas namas turės savo plotą bei gyventojų skaičių, kurie taip pat bus priskiriami
per konstruktorių (kuriant objektus).

Miestas privalo turėti tokius metodus:
1. Namo pridėjimo metodą
2. Rinkliavos metodą - šis metodas grąžina skaičių, kuris nurodo, kiek rinkliavos bus surinktą iš VISŲ mieste esančių
namų už tam tikrą pasalaugą (dujas, elektrą ar vandenį). Paslaugos tipą nurodykite per argumentą.
Rinkliava skaičiuojama miesto rinkliavos tarifą padauginus iš namo ploto.
3. Duomenų spausdinimo metodą - šis metodas atspausdina visus mieste esančių namų duomenis bei rinkliavų sumas.*/

let city1 = new City('Kaunas', 0.13, 0.46, 1.06);
city1.addHouse(new House('Pilies g. 1', 'Petras Laidosas', 203));
city1.addHouse(new House('Amaliu g. 54a', 'Virginija Morkute', 109));
city1.addHouse(new House('Rotuses a. 1', 'Vytautas Lanzbergis', 606));
city1.printData();












