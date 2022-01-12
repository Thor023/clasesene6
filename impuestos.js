export default class nuevos_impuestos { //Definicion de clase y constructora de Impuestos

    constructor(monto_bruto_anual, deducciones){
        this.monto_bruto_anual = monto_bruto_anual;
        this._deducciones = deducciones;
    };
    get monto_bruto_anual(){
        return this._monto_bruto_anual;
    };
    set monto_bruto_anual(nuevo_monto_bruto_anual){
        this._monto_bruto_anual = nuevo_monto_bruto_anual;
    };
    get deducciones(){
        return this._deducciones;
    };
    set deducciones(nuevas_deducciones){
        this._deducciones = nuevas_deducciones;
    };
    calcularImpuesto(){
        return (((this._monto_bruto_anual)-(this._deducciones))*0.21)
    }
};

