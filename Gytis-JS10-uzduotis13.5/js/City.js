
const ServiceTypes = {
    Electricity: 'electricity',
    Gas: 'gas',
    Water: 'water'
};

class City {
    /**
     * @param {string} cityName
     * @param {number} electricityTariff
     * @param {number} gasTariff
     * @param {number} waterTariff
     */
    constructor(cityName, electricityTariff, gasTariff, waterTariff) {
        this.name = cityName;
        this.tariffs = {
            electricity: electricityTariff,
            gas: gasTariff,
            water: waterTariff
        };
        this.houses = [];
    }

    /**
     * @param {House} house
     */
    addHouse(house) {
        this.houses.push(house);
    }

    /**
     *
     * @param serviceType
     * @returns {number}
     */
    taxForWholeCity(serviceType) {

        let tariffCoefficient;
        if (serviceType === this.tariffs.electricity) {
            tariffCoefficient = this.tariffs.electricity;
        } else if (serviceType === this.tariffs.gas) {
            tariffCoefficient = this.tariffs.gas;
        } else if (serviceType === this.tariffs.water) {
            tariffCoefficient = this.tariffs.water;
        } else {
            console.log('Incorrect serviceType supplied');
            return null;
        }
        return this.getAllHousesSummedArea() * tariffCoefficient;
    }

    /**
     *
     * @returns {number} Summed area of all the houses in the city
     */
    getAllHousesSummedArea() {
        let area = 0;
        this.houses.forEach((house) => {
            area += house.area;
        });
        return area;
    }

    printData() {
        /*To Console*/
        console.log(`Miestas: ${this.name}\nMieste yra ${this.houses.length} namu:`);
        this.houses.forEach((house) => {
            console.log(`          Adresas: ${house.address}\n
          Savininkas: ${house.owner}\n
          Bendras namo plotas: ${house.area}\n
          --------------------------------`);
        });
        console.log(`        Miesto elektros saskaita: ${this.taxForWholeCity(this.tariffs.electricity).toFixed(2)}\n
        Miesto duju saskaita: ${this.taxForWholeCity(this.tariffs.gas).toFixed(2)}\n
        Miesto vandens saskaita: ${this.taxForWholeCity(this.tariffs.water).toFixed(2)}`);


        /*To HTML*/
        const countryDiv = document.getElementById('country');


        let houseListId = `${this.name}List`;
        countryDiv.innerHTML += `<div class="inner">
<h3>Miestas: ${this.name}</h3>
<h4>Mieste yra ${this.houses.length} namu:</h4>
<ul class="houseList">
</ul>
<ul class="municipalTaxes">
<li id="electricity">Miesto elektros saskaita: ${this.taxForWholeCity(this.tariffs.electricity).toFixed(2)}</li>
<li id="gas">Miesto duju saskaita: ${this.taxForWholeCity(this.tariffs.gas).toFixed(2)}</li>
<li id="water">Miesto vandens saskaita: ${this.taxForWholeCity(this.tariffs.water).toFixed(2)}</li>
</ul>
</div>`;

        document.querySelector('ul.houseList').setAttribute("id", houseListId);

        this.houses.forEach((house) => {
            document.getElementById(houseListId).innerHTML += `<li>Adresas: ${house.address}</li>
          <li>Savininkas: ${house.owner}</li>
          <li>Bendras namo plotas: ${house.area}</li>
          <li>--------------------------------</li>`;
        });

        document.querySelector('h3').style.cssText = 'font-size: 21px; font-weight: 600';
        document.querySelector('h4').style.fontSize = '18px';
        document.querySelector('h4').style.fontWeight = '600';
    }
}




















