"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Clientes = /*#__PURE__*/function () {
  //Definicion de clase y constructora de Clientes
  function Clientes(nombre, impuestos) {
    _classCallCheck(this, Clientes);

    this._nombre = nombre;
    this._impuestos = impuestos;
  }

  _createClass(Clientes, [{
    key: "nombre",
    get: function get() {
      return this._nombre;
    },
    set: function set(nuevo_nombre) {
      this._nombre = nuevo_nombre;
    }
  }, {
    key: "impuestos",
    get: function get() {
      return this._impuestos;
    },
    set: function set(nuevos_impuestos) {
      this._impuestos = nuevos_impuestos;
    }
  }]);

  return Clientes;
}();

exports["default"] = Clientes;
;
