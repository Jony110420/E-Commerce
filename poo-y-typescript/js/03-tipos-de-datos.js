// string
var cadena = "Alex Escobar";
cadena = 49;
// number
var numero = 10;
// Boleano
var verdadero_falso = true;
// Any
var cualquiera = "Hola";
cualquiera = 77;
// Arrays
var lenguajes = ["PHP", "JS", "CSS"];
var years = ["DOCE", 13, 14];
// Let vs var
var numero1 = 10;
var numero2 = 12;
if (numero1 == 10) {
    var numero1 = 44;
    var numero2 = 55;
    console.log(numero1, numero2);
}
console.log(numero1, numero2);
console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);
