// MODULOS 
const suma = require('./operaciones/suma.js');
const resta = require('./operaciones/resta.js');
const producto = require('./operaciones/producto.js');
const division = require('./operaciones/division.js');
const operacionMultiple = require('./operaciones/operacionMultiple.js');

console.log(suma.suma(5,7));
console.log(resta.resta(6,2));
console.log(producto.producto(2,5));
console.log(division.division(8,6));
console.log(operacionMultiple.operacionMultiple(8,6,81));