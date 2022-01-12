export default class Clientes { //Definicion de clase y constructora de Clientes
        constructor(nombre,impuestos){
            this._nombre = nombre;
            this._impuestos = impuestos;
        };
        get nombre(){
            return this._nombre;
        };
        set nombre(nuevo_nombre){
            this._nombre = nuevo_nombre;
        };
        get impuestos(){
            return this._impuestos;
        };
        set impuestos(nuevos_impuestos){
            this._impuestos = nuevos_impuestos;
        };  
};
