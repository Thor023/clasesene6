"use strict";

var _clientes = _interopRequireDefault(require("../clientes.js"));

var _impuestos = _interopRequireDefault(require("../impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//importadores
//instancia Impuestos 
var i1 = new _impuestos["default"](100000, 10000); //instancia Clientes

var c1 = new _clientes["default"]('Juan', i1);
console.log(i1.calcularImpuesto());
