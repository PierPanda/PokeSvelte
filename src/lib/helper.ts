//Genere un nombre aléatoire entre 0 et 151 (nombre de pokemons)
const createRandomNumber = (min:number, max:number) => {
  return Math.floor(Math.random() * (max-min) + min);
};

export { createRandomNumber };
