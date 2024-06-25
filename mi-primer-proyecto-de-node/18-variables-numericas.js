// Numbers

// Declaracion de variables numericas (enteros y decimales)
let a = 5;
console.log(a);

let b = 0.1
console.log(b);

// Precision
let c = 0.2;
console.log(b + c);// =0.30000000000000004 no nos da un resultado preciso, esto hay que tenrlo en cuentas
 //Si necesitamos que el valor sea 0.3 exacto (o cualquier otro resultado exacto con decimales)podemos hacer los sig.=

 console.log(Math.round((b + c) *100)/100); //=0.3