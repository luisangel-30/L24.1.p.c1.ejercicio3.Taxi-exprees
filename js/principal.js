/*TAXI EXPRESS
La empresa TAXI EXPRESS C.A, dedicada al ramo de servicios de transporte, señala que, por
el aumento de su cartera de clientes, necesita un sistema automatizado que le permita llevar
ciertas estadísticas. Para ello por cada cliente que atiende le toma los siguientes datos: nombre,
tipo de servicio a tomar (1. Largo Urbano, 2. Corto Urbano), edad y sexo (1. Masculino o 2.
Femenino). Es significativo para la empresa, obtener un reporte que contenga: a) Cantidad de
clientes femeninas mayores de edad, b) cuál ha sido la menor edad atendida, c) promedio de
edad de los clientes.
Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato, informando que Juan (20 años) tomó servicio corto, Ana (19) largo, Lin
(18) corto, y Mary (15) largo:
Cantidad de clientes femeninas mayores de edad: 2
La menor edad atendida fue de 15 años
El promedio de edad de los clientes es de 18 años*/

import CL_cliente from "./CL_cliente.js";
import CL_empresa from "./CL_empresa.js";

let cliente= new CL_cliente();
let cli1 = new CL_cliente("Juan","2",20,"M");
let cli2 = new CL_cliente("Ana","1",19,"F");
let cli3 = new CL_cliente("Lin","2",18,"F");
let cli4 = new CL_cliente("Mary","1",15,"F");

let empresa= new CL_empresa();
empresa.procesarclientes(cli1);
empresa.procesarclientes(cli2);
empresa.procesarclientes(cli3);
empresa.procesarclientes(cli4);

let salida=document.getElementById("salida");
salida.innerHTML=`
<br>Nombre:${cli1.nombre}     Servicio:${cli1.tiposervicio()}          edad:${cli1.edad}     sexo:${cli1.tiposexo()} 
<br>Nombre:${cli2.nombre}     Servicio:${cli2.tiposervicio()}          edad:${cli2.edad}     sexo:${cli2.tiposexo()} 
<br>Nombre:${cli3.nombre}     Servicio:${cli3.tiposervicio()}          edad:${cli3.edad}     sexo:${cli3.tiposexo()} 
<br>Nombre:${cli4.nombre}     Servicio:${cli4.tiposervicio()}          edad:${cli4.edad}     sexo:${cli4.tiposexo()}
<br><br> 
Cantidad de clientes femeninas mayores de edad: ${empresa.cantfemmayores()}
<br> La menor edad atendida fue de ${empresa.menoredad()} años
<br> El promedio de edad de los clientes es de ${empresa.porcentaje()} años

`
