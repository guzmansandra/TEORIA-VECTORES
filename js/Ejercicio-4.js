// Crear un vector con los numeros del 1 al 10.
// Usa unn ciclo para sumar los numeros en el vector y mostrar el resultado 

// Definir vctor de tipo numerico
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

// Definir variable para almacenar la suma
let suma = 0;

// Recorrer el vector para sumar los numeros 
for (let i = 0; i < numeros.length; i++) {
    suma = suma + numeros[i]; 
}
console.log("La suma es: " + suma);

