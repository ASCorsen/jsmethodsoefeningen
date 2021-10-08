/* Opdracht 0: voorbeeld */
// Log het cijfer PI in de terminal
// ---- Verwachte uitkomst: 3.141592653589793

console.log(Math.PI);

/* Opdracht 1: */
// Bereken de omtrek van een cirkel met een diameter van 4 en log dit in de terminal. De eenheid (cm, meters, etc. maakt niet uit).
// Tip: de formule is omtrek = diameter * pi
// ---- Verwachte uitkomst: 12.566370614359172

console.log("cirkel met een diameter van 4 = "+ Math.PI * 4);



/* Opdracht 2: */
// Bereken de omtrek van een cirkel met een diameter van 12 en rond dit af naar een heel getal. Log dit in de terminal.
// ---- Verwachte uitkomst: 38

function calculateDiameter(diameterRounded) {
    let outcome = Math.PI * diameterRounded
    return Math.round(outcome)
}
console.log(calculateDiameter(12))

/* Opdracht 3: */
// Bereken de wortel van 9 en log dit in de terminal
// ---- Verwachte uitkomst: 3

console.log("Bereken de wortel van 9 = "+ Math.sqrt(9))

/* Opdracht 4: */
// Genereer een willekeurig getal tussen de 0 en 1 en doe dan een check:
// * is het willekeurige getal groter dan 0.5 ? Log dan het getal met "Het glas is halfvol" in de terminal
// * is het willekeurige getal kleiner dan 0.5 ? Log dan het getal met "Het glas is half leeg" in de terminal
// Tip: iedere keer als je het script opnieuw draait (wel even een extra spatie toevoegen o.i.d.) is dit getal anders ;)
// ---- Verwachte uitkomst: Bijbehorende zin afhankelijk van de uitkomst

console.log("/* Opdracht 4: */")
for (let i = 0; i < 10; i++) {
    let wisdom = Math.random();
    if (wisdom > 0.5) {
        console.log("Het glas is halfvol: "+ wisdom)
    } else if (wisdom < 0.5) {
        console.log("Het glas is half leeg: "+ wisdom)
    }
    else if (wisdom === 0.5) {
        console.log("Ultra Instinct!!")
    }
}