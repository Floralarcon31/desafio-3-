
//Realizar un programar que solicite 2 números al usuario y la operación aritmética que desea realizar(suma,resta).
//Se debe mostrar por consola el resultado de la operación seleccionada.

let  resultado = 0;
let numUno = 0;
let numDos = 0;
var operacion = prompt("Que operacion desea realizar con estos numeros? suma o resta? escribi -salir-?").toLowerCase();


while(operacion != "salir"){
    let numUno = parseInt(prompt("Ingrese un numero"));
    let numDos = parseInt(prompt("Ingrese otro numero"));
     

    if (operacion == "suma"){
        resultado = numUno + numDos;
        alert(`El resultado es ${resultado}`);
        operacion = prompt("Que operacion desea realizar con estos numeros? suma o resta? escribi -salir-?").toLowerCase();
    }else if(operacion == "resta"){
        resultado= numUno - numDos;
        alert(`El resultado es ${resultado}`);
        operacion = prompt("Que operacion desea realizar con estos numeros? suma o resta? escribi -salir-?").toLowerCase();
    }else{
        alert("Has escrito un caracter invalido, vuelvelo a intentar!!");
        operacion = prompt("Que operacion desea realizar con estos numeros? suma o resta? escribi -salir-?").toLowerCase();
    }
}












/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Solicitamos un valor al usuario y  que sume otro numero en cada repe, realizando una salida por cada resultado-

/*let suma = 0;

for (let i = 1; i <= 4; i++) {
    let Usuario2 = parseInt(prompt("Ingresar Numero favorito"));
    suma = suma + Usuario2;
    document.write(suma + "<br>");

}


//Numero por prompt, repetir la salida del mensaje la cant de veces ingresada

let numeros = parseInt(prompt("Ingrese un numero"));
for (i = 1; i <= numeros; i++){
    document.write ("Shake it off" +"<br>");
}
*/