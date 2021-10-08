/* Opdracht 0: voorbeeld */
// Check de lengte van onderstaande string en log dit in de terminal
// ---- Verwachte uitkomst: 10

const word = "zoetsappig";
console.log(word.length);


/* Opdracht 1 */
//  Check of het woord "Banaan" langer is dan het woord "Aardappel" en log dit in de terminal.
// ---- Verwachte uitkomst: false

const fruit = "Banaan";
const vegetable = "Aardappel";
// const longChar = fruit < vegetable
// console.log("Check of het woord Banaanlanger is dan het woord Aardappel :" + longChar)
console.log("Check of het woord Banaanlanger is dan het woord Aardappel :" +fruit.length > vegetable.length);

/* Opdracht 2 */
//  Zorg ervoor dat de laatste letter van het woord in fruit en vegetable (hierboven) in de terminal gelogd wordt.
//  Tip: bedenk 1 manier die voor beide woorden zou werken.
// ---- Verwachte uitkomst voor fruit: "n"
// ---- Verwachte uitkomst voor vegetable: "l"

function getLastChar(input) {
    const counter = input.substr(-1)
    return counter
}
console.log("/* Opdracht 2 */ de laatste letter van het woord in fruit en vegetable: ")
console.log("Verwachte uitkomst voor fruit: N     = "+  getLastChar(fruit))
console.log("Verwachte uitkomst voor vegetable: l   = "+ getLastChar(vegetable))


/* Opdracht 3 */
//  Haal de spaties aan het begin en eind van onderstaande zin weg en log dit in de terminal
// ---- Verwachte uitkomst: "De kat krabt de krullen van de trap"

const userInput = "  De kat krabt de krullen van de trap ";
console.log(userInput.trim())




/* Opdracht 4 */
// Check of het woord "Fantastisch" in onderstaande zin voorkomt en log dit in de terminal.
// ---- Verwachte uitkomst: true

const story = "We vinden de behaalde resultaten werkelijk prachtig. Fantastisch, nietwaar?"
console.log("Verwachte uitkomst: " + story.includes("Fantastisch"))


/* Opdracht 5 */
// Knip de vraag van bovenstaande tekst (story) af, zodat alleen het eerste gedeelte overblijft en log dit in de terminal.
// ---- Verwachte uitkomst: "We vinden de behaalde resultaten werkelijk prachtig."

console.log(story.substr(0,52))
console.log(story.split(" Fantastisch, nietwaar?"))
console.log(story.replace(" Fantastisch, nietwaar?",""))
//welke is juist ?

/* Opdracht 6 */
// Maak van onderstaand bedrag een Nederlands bedrag door het volgende te doen:
// * Vervang het dollar-teken voor een euro-teken
// * Vervang de punt voor een komma
// Log dit in de terminal.
// ---- Verwachte uitkomst: "€35,59"

const price = "$35.59";
console.log("Verwachte uitkomst:€35,59 nu is het: "+ price)
console.log("Na wat knutselen: " + price.replace("$","€").replace(".",","))






