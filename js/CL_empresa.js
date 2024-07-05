export default class CL_empresa{
    constructor(){
        this.contfemmay=0;
        this.menedad=200;
        this.acumedad=0;
        this.contclientes=0;
    }
    procesarclientes(cli){
        if(cli.edad>=18 && cli.sexo=="F"){
            this.contfemmay++;
        }
        if(cli.edad<this.menedad){
            this.menedad=cli.edad;
        }
        this.acumedad+=cli.edad;
        this.contclientes++;
    }
    cantfemmayores(){
        return this.contfemmay;
    }
    menoredad(){
        return this.menedad;
    }
    porcentaje(){
        return this.acumedad/this.contclientes;

    }
}