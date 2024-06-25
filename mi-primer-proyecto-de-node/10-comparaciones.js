// Comparaciones

// Igual: == igualdad debil, compara solo el valor; === igualdad fuerte, compara el valor y el tipo
if (5 == 5) {
    console.log("5 es igual a 5");
};

if (5 === 5) {
    console.log("5 es muy igual a 5");
};

let a = "5";
let b = 5;

if (a == b) { // los == compara simplemente el valor
    console.log("a es igual a b - Debil");
}

if (a === b) { // los === compara el valor y el tipo
    console.log("a es igual a b - Fuerte");
}

// No igual: != debil, solo compara el valor; !== fuerte, compara valor y tipo

let c = 4;
let d = 3;

if (c != d) {
    console.log("c es diferente a d - Debil");
}

if (c !== d) {
    console.log("c es diferente a d - Fuerte");
}

// Mayor que <; menor que >; mayor o igual que <=; menor o iguall que >=

let e = 5;
let f = 6;

if (e < f) {
    console.log("c es diferente a d - Fuerte");
}

if (e > f) {
    console.log("c es diferente a d - Fuerte");
}

if (e <= f) {
    console.log("c es diferente a d - Fuerte");
}

if (e >= f) {
    console.log("c es diferente a d - Fuerte");
}