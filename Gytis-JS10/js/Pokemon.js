class Pokemon {
    constructor(pokemonName) {
        this.name = pokemonName;
        this.power = Math.floor(Math.random() * 91) + 10;
    }

    /**
     *
     * @returns {string} Name of pokemon
     */
    static generatePokemonName() {
        let syllables = ['po', 'tas', 'liu', 'to', 'ka', 'ge', 'ra', 'si', 'dis', 'lek', 'ru', 'na', 'ca', 'ti', 'ko', 'pa', 'skver', 'ne', 'lis'];

        let name = '';
        for (let i = 0; i < Math.floor(Math.random() * 5) + 2; i++) {
            const randomIndex = Math.floor(Math.random() * syllables.length);

            name += syllables[randomIndex];
        }

        return name;
    }

}