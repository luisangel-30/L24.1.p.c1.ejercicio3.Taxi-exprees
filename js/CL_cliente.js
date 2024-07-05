export default class CL_cliente{
    constructor(nombre,servicio,edad,sexo){
        this.nombre=nombre;
        this.servicio=servicio;
        this.edad=edad;
        this.sexo=sexo;
    }
    set nombre(n){
        this._nombre=n;
    }
    get nombre(){
        return this._nombre;
    }
    set servicio(s){
        this._servicio=s;
    }
    get servicio(){
        return this._servicio;
    }
    set edad(e){
        this._edad=+e;
    }
    get edad(){
        return this._edad;
    }
    set sexo(o){
        this._sexo=o;
    }
    get sexo(){
        return this._sexo;
    }
    tiposervicio(){
        if(this.servicio=="1")
            return "Servicio largo urbano";
        else(this.servicio=="2")
        return "Servicio corto urbano";
    }
    tiposexo(){
        if(this.sexo=="F")
            return "Femenino";
        else(this.sexo=="M")
        return "Masculino";
    }


}