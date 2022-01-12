//importadores
import Clientes from "./clientes";
import Impuestos from "./impuestos";

//instancia Clientes
let c1 = new Clientes('Juan', i1)

//instancia Impuestos 
let i1 = new Impuestos(100,10);

console.log(i1.calcularImpuesto())