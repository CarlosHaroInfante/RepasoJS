/**
 * 
 */

 var guardar = [];
 
 function pedido(){
	 
	 let usuario, coste, fechaEntrada, fechaSalida;
	 
	 const escribe = document.getElementById("tabla");
	 usuario = prompt("Usuario del pedido");
	 
	 coste = prompt("Coste del pedido");
	 
	 
	 let dia = prompt("día de llegada a oficina");
	 
	 let mes = prompt("mes de llegada a oficina");
	 
	 let anyo = prompt("año de llegada a oficina");
	 
	 fechaEntrada = new Date(anyo, (mes - 1), dia);
	 alert(fechaEntrada);
	 
	 if (fechaEntrada.getDay() === 0) {
		 fechaEntrada.setDate(fechaEntrada.getDate() + 1);
	 }
	 
	 
	 fechaSalida = new Date(fechaEntrada.getFullYear(), fechaEntrada.getMonth(), fechaEntrada.getDate() + 5);
	 alert(fechaSalida);
	 
	 if (fechaSalida.getDay() === 0) {
		 fechaSalida.setDate(fechaSalida.getDate() + 1);
	 }
	 
	 let fecha = new Date();
	 
	 let diaH = fecha.getDate();
	 
	 let mesH = fecha.getMonth();
	 
	 let anyoH = fecha.getFullYear();
	 
	 fechaCompara = new Date(anyoH, mesH, diaH);
	 alert(fechaCompara);
	 
	 
	 if(fechaEntrada >= fechaCompara){
		 
		 
		 escribe.innerHTML += ("<tr><td>" + usuario + "</td>"+ "<td>" + coste + "</td>" + "<td>" + fechaEntrada.getDate() + "/" + fechaEntrada.getMonth() + "/" + fechaEntrada.getFullYear() + "</td>" + "<td>" + fechaSalida.getDate() + "/" + fechaSalida.getMonth() + "/" + fechaSalida.getFullYear() +"</td></tr>");
		 guardar.push([usuario, coste, fechaEntrada, fechaSalida]);
		 }
		 else{
			alert("La fecha es inferior al dia  de hoy");
		 }
		 
	 }
	 
	 
	 function borrarPedido(){
		
		const escribir = document.getElementById("tabla");
		
		const nomUsu = prompt("Nombre de usuario del que quieras borrar el pedido");
		
		for(i=0;i<guardar.length;i++){
			if(guardar[i][0]== nomUsu){
				escribir.innerHTML = "";
				break;
			}
			else{
				alert("Ningún usuario con ese nombre");
				break;
			}
		}
	 }
 