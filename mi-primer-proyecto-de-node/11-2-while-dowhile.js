// Bucles while - correra si se cumple la condicion (las veces que se cumpla)

let i = 0;
let max = 10;

while (i < max) {
    console.log(i);
    i++; //esto es lo que hara que no sea infinito
}

// Bucles Do ... while - correra y luego evalua la condicion, si se cumple corre nuevamente las veces que se cumpla y si no no corre mas 

i = 15;

do {
    console.log("estoy en el do while");
} while (i > max);