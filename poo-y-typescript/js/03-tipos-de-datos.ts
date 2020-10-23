type alfanumerico = string | number;

// string
let cadena: alfanumerico = "Alex Escobar";

cadena = 49;

// number
let numero: number = 10;

// Boleano
let verdadero_falso: boolean = true;

// Any
let cualquiera: any = "Hola";
cualquiera = 77;

// Arrays
var lenguajes: Array<string> = ["PHP", "JS", "CSS"];

let years: any[] = ["DOCE", 13, 14];

// Let vs var
var numero1 = 10;
var numero2 = 12;

if(numero1 == 10){
	var numero1 = 44;
	var numero2 = 55;

	console.log(numero1, numero2);
}

console.log(numero1, numero2);


console.log(cadena, numero, verdadero_falso, cualquiera, lenguajes, years);