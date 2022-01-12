//importadores
import Clientes from "./clientes.js";
import Impuestos from "./impuestos.js";

//instancia Impuestos 
let i1 = new Impuestos(100000,10000);
//instancia Clientes
let c1 = new Clientes('Juan', i1)


console.log(i1.calcularImpuesto())