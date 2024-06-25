// Principales operaciones artimeticas
let a = 3.5;
let b = 4.8;
//* suma
console.log(a + b);
//* resta
console.log(a - b);
//* Multiplicacion
console.log(a * b);
//* Division
console.log(a / b);

// Representacion de los numeros en cadenas de texto
console.log(typeof a);
let a_s = a.toString();// Aqui estariamos creando una variable la cual sera la variable a ya creada convertida a string con el .toString
console.log(a_s);
console.log(typeof a_s);

// Redondeo de numeros decimales
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);
//* .toFixed(x) - Limitar el numero de decimales al valor x
console.log(d.toFixed());// Este sin un parameto nos lo redonderaria a 10, un numero entero (a 10 porque esta cerca de el 10)
console.log(d.toFixed(1));// Este nos devolveria el valor con un decimal, si queremos dos le ponemos dos en el parentesis y asi si queremos 3, 4 etc

console.log(typeof d.toFixed(4));// Tener en cuenta que al usar esta funcion nos devolvera un valor de tipo string

//* .toPrecision(x) - Limita el numero de cifras significativas
let e = 1839.123456789;
let f = 221355615325;

console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(7));
