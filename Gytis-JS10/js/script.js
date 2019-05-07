let trainer1 = new Trainer('Ash Ketchum');
trainer1.addPokemon(new Pokemon(Pokemon.generatePokemonName()));
trainer1.addPokemon(new Pokemon(Pokemon.generatePokemonName()));
trainer1.addPokemon(new Pokemon('Pikachu'));
trainer1.printData();

const trainer2 = new Trainer('Team Rocket');
trainer2.addPokemon(new Pokemon('Meowth'));
trainer2.addPokemon(new Pokemon(Pokemon.generatePokemonName()));
trainer2.addPokemon(new Pokemon(Pokemon.generatePokemonName()));
trainer2.printData();

trainer1.fight(trainer2);

const button = document.getElementById('fightButton');

button.style.backgroundColor = '#ccff00';

//One approach (Overwrites the method)
button.onclick = () => {
    console.log('Fight button clicked');
    trainer1.fight(trainer2)};

//Second approach !!! USE THIS ONE !!! (Adds a method. Does not overwrite)
button.addEventListener("click", () => trainer1.fight(trainer2));
















