const races = [
  "Human",
  "Elf",
  "Dwarf",
  "Orc",
  "Half-Elf",
  "Tiefling",
  "Halfling",
];

const classes = ["Warrior", "Wizard", "Thief", "Bard"];

const getRandomElement = (array) => {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
};

const characterRace = getRandomElement(races);
const characterClass = getRandomElement(classes);
console.log(`Your character is: ${characterRace} ${characterClass}`);
