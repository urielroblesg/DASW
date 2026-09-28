// ============================================
// EJEMPLOS DE ARREGLOS EN JAVASCRIPT
// ============================================

// 1. DESESTRUCTURACIÓN DE ARREGLOS
// ============================================
console.log("=== DESESTRUCTURACIÓN DE ARREGLOS ===");


console.log(primera);
console.log(segunda);
console.log(tercera);

console.log(fruta1, fruta3); 

console.log(color5);

console.log(primero);
console.log(resto);  
// 2. SPREAD OPERATOR (...)
// ============================================
console.log("\n=== SPREAD OPERATOR ===");


console.log(fruta1, fruta3); 

console.log(color5); 


console.log(primero);
console.log(resto);  
// 3. MÉTODOS DE INSERCIÓN Y EXTRACCIÓN
// ============================================
console.log("\n=== MÉTODOS DE INSERCIÓN Y EXTRACCIÓN ===");



console.log("push:", stack);


console.log("pop:", ultimoElemento, "Arreglo:", stack); 

console.log("unshift:", stack);

console.log("shift:", primerElemento, "Arreglo:", stack); 

console.log("splice (insertar):", letters);

console.log("splice (eliminar):", numbers, "Eliminados:", eliminados);

console.log("concat:", concatenado);
console.log("Original:", lista1);

console.log("slice:", sliced);
console.log("Original:", concatenado); 


// 4. MÉTODOS DE BÚSQUEDA
// ============================================
console.log("\n=== MÉTODOS DE BÚSQUEDA ===");


console.log("indexOf 'mouse':", ); 
console.log("indexOf 'cable':", ); 

// lastIndexOf() - encuentra la última ocurrencia
console.log("lastIndexOf 'mouse':", ); 

// includes() - verifica si existe
console.log("includes 'teclado':", );  
console.log("includes 'cable':", ); 

console.log("find (edad > 30):", mayor30); 


console.log("find (comienza con 'm'):", producto);

console.log("findIndex (edad > 30):", indice);

console.log("filter (edad > 25):", mayores25);

console.log("some (edad < 20):", hayAlgunoMenor20);

console.log("every (edad > 20):", todosMayores20);  


// 5. MÉTODOS DE TRANSFORMACIÓN
// ============================================
console.log("\n=== MÉTODOS DE TRANSFORMACIÓN ===");

console.log("map (agregar 16% impuesto):", preciosConImpuesto); 


console.log("map (string a número):", numerosInt);


console.log("reduce (suma):", suma);


console.log("reduce (producto):", producto_total); 


console.log("reduce (conteo):", conteo); 


console.log("map (a mayúsculas):", mayusculas);



console.log("flatMap (aplanar):", aplanado);



// 6. MÉTODOS DE MANIPULACIÓN Y COMBINACIÓN
// ============================================
console.log("\n=== MÉTODOS DE MANIPULACIÓN Y COMBINACIÓN ===");


console.log("reverse:", inversible);



console.log("sort (números):", desordenado); 


console.log("sort (alfabético):", palabrasMez);



console.log("sort (descendente):", descendente); 



console.log("join:", mensaje);



console.log("flat (profundidad 1):", plano); 



console.log("flat (profundidad 2):", planoCompleto);



console.log("Encadenamiento:", resultado);