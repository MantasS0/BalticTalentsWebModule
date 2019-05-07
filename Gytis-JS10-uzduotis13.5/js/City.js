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
     * @param service
     * @returns {number}
     */
    taxForWholeCity(service) {
        let tariffCoefficient;
        if (service === this.tariffs.electricity) {
            tariffCoefficient = this.tariffs.electricity;
        } else if (service === this.tariffs.gas) {
            tariffCoefficient = this.tariffs.gas;
        } else if (service === this.tariffs.water) {
            tariffCoefficient = this.tariffs.water;
        } else {
            console.log('Incorrect service supplied');
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
        console.log(`Miestas: ${this.name}\nMieste yra ${this.houses.length} namu:`);
        this.houses.forEach((house) => {
            console.log(`          Adresas: ${house.address}\n
          Savininkas: ${house.owner}\n
          Bendras namo plotas: ${house.area}\n
          --------------------------------`);
        });
        console.log(`        Miesto elektros saskaita: ${this.taxForWholeCity(this.tariffs.electricity).toFixed(2)}\n
        Miesto duju saskaita: ${this.taxForWholeCity(this.tariffs.gas).toFixed(2)}\n
        Miesto vandens saskaita: ${this.taxForWholeCity(this.tariffs.water).toFixed(2)}`)
    }
}