"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var nuevos_impuestos = /*#__PURE__*/function () {
  //Definicion de clase y constructora de Impuestos
  function nuevos_impuestos(monto_bruto_anual, deducciones) {
    _classCallCheck(this, nuevos_impuestos);

    this.monto_bruto_anual = monto_bruto_anual;
    this._deducciones = deducciones;
  }

  _createClass(nuevos_impuestos, [{
    key: "monto_bruto_anual",
    get: function get() {
      return this._monto_bruto_anual;
    },
    set: function set(nuevo_monto_bruto_anual) {
      this._monto_bruto_anual = nuevo_monto_bruto_anual;
    }
  }, {
    key: "deducciones",
    get: function get() {
      return this._deducciones;
    },
    set: function set(nuevas_deducciones) {
      this._deducciones = nuevas_deducciones;
    }
  }, {
    key: "calcularImpuesto",
    value: function calcularImpuesto() {
      return (this._monto_bruto_anual - this._deducciones) * 0.21;
    }
  }]);

  return nuevos_impuestos;
}();

exports["default"] = nuevos_impuestos;
;
