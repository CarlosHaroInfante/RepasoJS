/**
 * 
 */

var guardar = [];
function renovar() {
	
	const escribir = document.getElementById("tabla");
	let numero;	 
	 do{
	  numero = prompt("Número del DNI");
	 }
	 while(!Number(numero) || numero.length != 8);
	 var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
	 
	 var resto = numero % 23;
	 
	 var letraCalculada = letras.charAt(resto);
	 
	 var DNI = numero + letraCalculada;
	 
	 var nombre = prompt("Nombre Completo");
	 
	 var edad = prompt("Edad");
	 edad = parseInt(edad);
	 
	 if(isNaN(edad)){
		 alert("por favor escriba una fecha válida");
		 return;
	 }
	 alert(edad);
	 
	 let fecha = new Date();
	 
	 if(edad < 5){
		 
	  fecha.setFullYear(fecha.getFullYear() + 2);
		 
	 }
	 else if (edad >= 5 && edad < 30){
		 
		 fecha.setFullYear(fecha.getFullYear() + 5);
	 }
	 else if (edad >= 30 && edad < 70){
		 fecha.setFullYear(fecha.getFullYear() + 10);
	 }
	 
	 else if(edad >= 70){
		 fecha = "Nunca";
	 }
	 
	 else {
		alert("Error al insertar la edad");
	 }
	 
	 guardar.push([nombre, DNI, edad, fecha]);
	 
	
    if (fecha === "Nunca") {
        escribir.innerHTML += ("<tr><td>" + nombre + "</td><td>" + DNI + "</td><td>" + edad + "</td><td>" + fecha + "</tr>");
    } else {
        escribir.innerHTML += ("<tr><td>" + nombre + "</td><td>" + DNI + "</td><td>" + edad + "</td><td>" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear() + "</td></tr>");
    }
 }
 
 
 
 
 function borrar(){
	 
	 const escribir = document.getElementById("tabla");
	 
	 let nombre = prompt("introduce el nombre a eliminar");
	 
	 for(i=0;i<guardar.length;i++){
		 
		 if(guardar[i][0]==nombre){
			 
			 escribir.innerHTML = "";
			 break;
			 
		 }
		 else{
			 alert("Ninguna renovación con este nombre");
			 break;
		 }
		 
	 }
	 
 }
 
 
 