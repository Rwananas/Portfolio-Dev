let myVar = "ma variable";
const myVar2 = "ma  variable 2";
console.log(myVar);

myVar = "ma variable changée"

// boolean
let isTrue = true;
let isFalse = false;

console.log(isFalse);

// chiffres et opérateurs
let chiffre1 = 4;
let chiffre2 = 3;
let chiffre3 = '3';

console.log(typeof chiffre1, typeof chiffre3);

// template string, littéraux de gabarits et concaténation

let test = 'test ' + myVar;
let test2 = `test ${myVar}`;

console.log(test);
console.log(test2);

// conditions IF /IF ELSE

if (chiffre1 > chiffre2) {
    console.log('condition valide');
}
if (chiffre1 === 4) {
    console.log('condition strictement égale valide');
}
if (chiffre1 !== 8) {
    console.log('condition strictement différente valide');
}
if (chiffre1 <= 3) {
    console.log('condition est valide');
}else{
    console.log('condition différente');
}

// tableaux ARRAY

let array = ['item 1', 'item 2', 'item 3', 'item 4'];
console.log(array[0]);
// affiche item 1

array = ['item 1', 'item 2', 'item 3', 'item 4'];
console.log(array.length);
// affiche 4, car il y a 4 données dans le tableau (ARRAY)

// Objets

let obj = {
    title: 'mon titre',
    description: 'ma description'
}
console.log(obj.title, obj.description);
// affiche mon titre ma description 

// LES BOUCLES, WHILE, FOR, FOREACH