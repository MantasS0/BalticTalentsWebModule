class Trainer {
    constructor(trainerName) {
        this.name = trainerName;
        this.medals = 0;
        this.pokemons = [];
    }

    /**
     *
     * @param {Pokemon} pokemon
     *
     */
    addPokemon(pokemon) {
        this.pokemons.push(pokemon);
    }

    printData() {
        console.log(`Trainer name ${this.name}`);
        console.log(`Trainer Pokemons:`);
        for (let pokemon of this.pokemons) {
            console.log(`${pokemon.name} (${pokemon.power})`);
        }

        console.log(`Power of all Pokemon: ${this.allPokemonPower()}`);

        console.log('-----------------------');
    }

    /**
     *
     * @returns {number} Summed pokemon power
     */
    allPokemonPower() {
        let power = 0;

        this.pokemons.forEach((pokemon) => {
            power += pokemon.power;
        });
        return power;
    }

    /**
     *
     * @param {Trainer} Trainer Opponent trainer
     */
    fight(otherTrainer) {
        console.log(`Fighters: ${this.name} vs ${otherTrainer.name}`);
        if (this.allPokemonPower() > otherTrainer.allPokemonPower()) {
            console.log(`${this.name} won the fight`);
            this.medals++;
        } else {
            console.log(`${otherTrainer.name} won the fight`);
            otherTrainer.medals++;
        }
    }
}