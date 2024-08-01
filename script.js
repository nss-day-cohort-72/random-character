const races = ["Human", "Elf"];

const classes = ["Warrior", "Wizard", "Warlock"];

const getRandomElement = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const characterRace = getRandomElement(races);
const characterClass = getRandomElement(classes);
console.log(`Your character is: ${characterRace} ${characterClass}`);
