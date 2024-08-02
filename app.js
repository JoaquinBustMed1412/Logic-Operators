/*
var n1,n2, n3, resultado;
n1=parseInt(prompt("introduce primer numero"));
n2=parseInt(prompt("introduce el segundo numero"));
n3=prompt("introduce un signo");
*/
//Código normal
/*

switch (n3) {
    case "+":
        resultado=n1+n2;
    break;

    case "-":
        if (n1>n2) {
            resultado=n1-n2;
        }else{
            resultado=n2-n1;
        }
    break;

    case "*":
        resultado=n1*n2;
    break;

    case "/":
        if (n1>n2) {
            resultado=n1/n2;
        } else {
            resultado=n2/n1;
        }
    break;

    default:
        console.log("Error 404")
    break;

}

document.write (resultado);
*/



//Código sin break


/*
switch (n3) {
    case "+":
        console.log(`La suma es: ${n1+n2}`);
        

    case "-":
        if (n1>n2) {
            console.log(`La resta es: ${n1-n2}`);
        }else{
            console.log(`La resta es: ${n2-n1}`);
        }
        

    case "*":
        console.log(`El producto es: ${n1*n2}`);
        break

    case "/":
        if (n1>n2) {
            console.log(`El cociente es: ${n1/n2}`);
        } else {
            console.log(`El cociente es: ${n2/n1}`);
        }
    case "@":
        console.log(`La potencia es: ${n1**n2}`);
        //break   

    default:
        console.log("Error 404")
    

}
*/
//console.log (resultado);




//Código sin default

/*
switch (n3) {
    case "+":
        resultado=n1+n2;
    break;

    case "-":
        if (n1>n2) {
            resultado=n1-n2;
        }else{
            resultado=n2-n1;
        }
    break;

    case "*":
        resultado=n1*n2;
    break;

    case "/":
        if (n1>n2) {
            resultado=n1/n2;
        } else {
            resultado=n2/n1;
        }
    break;

}

document.write (resultado);
*/



//Código "Días de la Semana" en Switch

/*
let diaDeLaSemana = prompt("Ingrese el día de hoy: ")

switch (diaDeLaSemana) {
    case "Lunes":
        console.log("Me despierto muy aburrido... 😑");
    break;

    case "Martes":
        console.log("Me despierto algo fastidiado... 😒");
    break;

    case "Miércoles":
        console.log("Me despierto algo cansado... 😪");
    break;

    case "Jueves":
        console.log("Me despierto algo animado... 🙂");
    break;

    case "Viernes":
        console.log("Me despierto feliz... 😄");
    break;

    case "Sábado":
        console.log("Me despierto muy relajado... 🫠");
    break;

    case "Domingo":
        console.log("Me despierto tranquilo... 😊");
    break;

    default:
        console.log("Por favor, ingresa un día de la semana.");
}
*/


/*
switch(emocion){
    case "feliz":
        console.log("color amarillo")
        break;
    case "ira":
    case "corazón":
        console.log("color rojo")
        break;
    case "envidia":
    case "enferm@":
        console.log("color verde")
        break;
    case "diablo":
    case "berenjena":
        console.log("color violeta")
        break;
}
*/


//Crea un programa que pida la nota de un estudiante en los tres trimestres del curso y calcule la nota promedio.
//El resultado que dará será suspenso si la media es menor de 5, aprobado si está entre 5 y 7 y Notable por encima de 7.

/*
Primer paso: Pedir la nota del primer trimestre y guardarla en la variable "notaPrimerTrimestre" (prompt)
Segundo paso: Pedir la nota del segundo trimestre y guardarla en la variable "notaSegundoTrimestre" (prompt)
Tercer paso: Pedir la nota del tercer trimestre y guardarla en la variable "notaTercerTrimestre" (prompt)
Cuarto paso: Calcular la nota promedio (Suma entre las notas y luego división entre 3 del total) y guardarla en la variable "notaPromedio"
Quinto paso: Comprobar si la nota promedio es suspensa, aprobada o notable (if, else if, else)
Sexto paso: Mostrar el resultado (alert)
*/

//Primer paso
let notaPrimerTrimestre = parseFloat(prompt("Ingrese la nota que obtuvo en el primer trimestre: "))
//Segundo paso
let notaSegundoTrimestre = parseFloat(prompt("Ingrese la nota que obtuvo en el segundo trimestre: "))
//Tercer paso
let notaTercerTrimestre = parseFloat(prompt("Ingrese la nota que obtuvo en el tercer trimestre: "))
//Cuarto paso
let notaPromedio = (notaPrimerTrimestre + notaSegundoTrimestre + notaTercerTrimestre) / 3
//Quinto paso
if (notaPromedio < 5) {
    //Sexto paso
    alert("SUSPENSO")
} else if (notaPromedio >= 5 && notaPromedio <= 7){
    //Sexto paso
    alert("APROBADO")
} else {
    //Sexto paso
    alert("NOTABLE")
}


//Control de acceso a una aplicación: Puedes usar un condicional para verificar si un usuario ha proporcionado las credenciales correctas.
//Si las credenciales son correctas, les das acceso; de lo contrario, les muestras un mensaje de error.

let usuarioValido = "Joaquin123"
let contrasenaValida = "01234"

let usuarioIngresado = prompt("Ingrese su usuario: ")
let contrasenaIngresada = prompt("Ingrese su contraseña: ")

if (usuarioIngresado === usuarioValido) {
    alert("Usuario correcto")
    if (contrasenaIngresada === contrasenaValida) {
        alert("Bienvenido a la aplicación")
    } else {
        alert("Contraseña incorrecta")
    }
} else {
    alert("Usuario incorrecto")
}