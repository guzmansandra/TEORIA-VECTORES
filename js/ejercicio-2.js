// crear un vector con los numeros del 1 al 5 
// luego elimina el numero que esta en la posicion 2 
// y recorre el vector

// inicializar vector 
let numeros = [1, 2, 3, 4, 5,];

// eliminar numero
numeros.splice(2, 1)

// Recorrer vector 
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

