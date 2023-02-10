// Iteration 1: Names and Input

let hacker1 = "Barbara";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Alejandro";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker2.length > hacker1.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

// Print the characters of the driver's name, separated by space, and in capital letters

let nameUpperCase = "";

for (let i = 0; i < hacker1.length; i++) {
    nameUpperCase += hacker1[i].toUpperCase();
    nameUpperCase += " ";
}
console.log(nameUpperCase);

// Print all the characters of the navigator's name, in reverse order

let reverseNavigator = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
    reverseNavigator += hacker2[i]; 
  }
console.log(reverseNavigator);

// Depending on the lexicographic order of the strings...

let names  = [hacker1, hacker2];
let sortedNames = names.sort();

for (let i = 0; i < sortedNames.length; i++) {
    if (sortedNames[0] === sortedNames[1]) {
        console.log("What?! You both have the same name?");
    } else if (sortedNames[0] === hacker1){
        console.log("The driver's name goes first.");
    } else if (sortedNames[0] === hacker2){
        console.log("Yo, the navigator goes first definitely");
    }
}

// Bonus 1 
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id tortor odio. Nam facilisis, dui quis aliquet tempus, mi nisl efficitur elit, a varius dui elit nec est. Etiam a venenatis magna. Duis tempor urna ut risus mollis luctus. Vestibulum metus metus, suscipit non urna a, semper consequat est. Maecenas eget condimentum justo, et interdum massa. Phasellus diam dui, viverra a pulvinar ac, lobortis sit amet arcu. Nunc finibus, nisi id commodo maximus, risus lacus volutpat orci, quis vehicula est odio sed neque. Integer porttitor arcu mauris. Vivamus hendrerit turpis id metus sollicitudin mattis a at urna. Duis nulla ante, dapibus vel risus molestie, lacinia hendrerit augue. Nullam vitae erat et felis congue mollis. Donec ut pharetra mi, sed interdum urna.";
let wordCount = 1;
let etCount = 0;
for (let i = 0; i < longText.length; i++) {
    if (longText[i] === " ") {
        wordCount++;
    }
}

console.log(wordCount);
for (let i = 0; i < longText.length; i++) {
    if (" " + longText[i] + "t" === " et") {
        etCount++;
    }
}
console.log(etCount);
