// Sentencia switch

let nota= 3;

switch (nota) {
    case 5:
        console.log("Sobresaliente");
         //el break se usa para que cuando ya haya conseguido el caso y lo haya ejecutado no pase al siguiente y los siga ejecutando, una vez ejecutado uno de los casos se para este bucle
         break;
    case 4:
        console.log("Buen trabajo, Aprobado");
        break;
    case 3:
        console.log("Aprobado");
        break;
    case 2:
        console.log("Reprobado por poco");
        break;
    case 1:
        console.log("Reprobado");
        break;
    default:
        console.log("Error");
        break;
}