// Como se inicializa un vector 
let vector = []; // Vector Vacio 

// Vector con nformación
let nombres = ["Carlos", "Juan", "Pepe", "Maria", "Luis", "Brayan", "Michael", "Cathe", "Andres"];

// Imprmir o escribir todo el vector 
console.log("Vector: " + nombres);

// Imprimir o escribir un solo dato del vector 
console.log("El nombre que esta en la posicion 1 es: " + nombres[1]);

// Recorrer un vector
for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

// Agregar informacion a un vector 
nombres.push("Stiven"); 

console.log(nombres); 

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

// Eliminar informacion 
nombres.splice (1, 2);

console.log(nombres);

for(let i = 0; i < nombres.length; i++){
    console.log(nombres[i]);
}

