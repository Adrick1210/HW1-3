//----------------------------------------
// Easy Going
//----------------------------------------

for (let i = 1; i < 21; i++) {
  console.log(i);
}

//----------------------------------------
// Get Even
//----------------------------------------

for (let i = 0; i < 201; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//----------------------------------------
// Fizz Buzz
//----------------------------------------

for (let i = 1; i < 101; i++) {
  if (i % 15 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

//----------------------------------------
// Wild Wild Life
//----------------------------------------

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
const sharky = ["Sharky", "shark", 20, "Left Coast"];
const plantee = ["Plantee", "plant", 5000, "Mordor"];
const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

plantee.splice(2, 1, 5001);
console.log(plantee);
wolfy.splice(3, 1, "Gotham City");
console.log(wolfy);
dart.push("Hawkins");
console.log(dart);
wolfy.splice(0, 1, "Gameboy");
console.log(wolfy);

//----------------------------------------
// Yell at the Ninja Turtles
//----------------------------------------

const turtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

for (turtle of turtles) {
  console.log(turtle.toUpperCase());
}

//----------------------------------------
// Methods Revisited
//----------------------------------------

const favMovies = [
  "Jaws",
  "The Fellowship of the Ring",
  "Howl's Moving Castle",
  "Django Unchained",
  "Cloud Atlas",
  "The Usual Suspects",
  "Toy Story",
  "Conan the Barbarian",
  "Titanic",
  "Harry Potter",
  "Fried Green Tomatoes",
  "Volver",
  "Oculus",
  "Seven",
  "Black Panther",
  "Harry Potter",
  "Imitation of Life",
  "Snatch",
  "Fast and Furious",
];

console.log(favMovies[8]);
favMovies.sort();
// By using the .sort() method, it put the strings in the array in A-Z order. It seems to have permanently altered the app after the method
// has been used, I tested a line of code after to see and it does not permanently affect the array with other methods until .sort() is called again.
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift();
// using the unshift() method, nothing returned because the object that was removed wasn't originally a part of the array (or, it wasn't hard-
// coded).
favMovies.splice(15, 1, "Avatar");
// This splice will not permanently alter the array unless the next console.log() is called after this method.
// favMovies.slice(9);
// The slice does not permanently alter the array or do anything at the moment. It targets the last half of the array but does nothing until it is
// assigned.
let favMovies2 = favMovies.slice(9);
console.log(favMovies2);
// It did not permanently alter our array as the .slice() method took half of the main array and stored inside a new variable that was called
// with a console log.
console.log(favMovies.indexOf("Fast and Furious"));
// It is still in the original array because it has not been permanently altered. So by console.log and the index, we can still access the object.
// It did not matter if we used "let" or "var" instead of "const". Because the objects were not manipulated using methods without bracket notations
// of any kind. Using a "let" declaration would have resulted the same.

//----------------------------------------
// Where is Waldo
//----------------------------------------

const whereIsWaldo = [
  ["Timmy", "Frank"],
  "Eggbert",
  ["Lucinda", "Jacc", "Neff", "Snoop"],
  ["Petunia", ["Baked Goods", "Waldo"]],
];
whereIsWaldo.splice(1, 1);
console.table(whereIsWaldo);
whereIsWaldo[1].splice(2, 1, "No One");
console.table(whereIsWaldo);
console.log(whereIsWaldo[2][1][1]);

//----------------------------------------
// Excited Kitten
//----------------------------------------

let catTalk = [
  "Human... why you taking pics of me",
  "...The catnip made me do it..",
  "Why does the red dot always get away..",
];

for (let i = 0; i < 20; i++) {
  if (i % 2 === 0) {
    catChat = Math.floor(Math.random() * catTalk.length);
    console.log(catTalk[catChat]);
  } else {
    console.log("Pet me, Love me! HSSSSSS");
  }
}

//----------------------------------------
// Find the Median
//----------------------------------------
