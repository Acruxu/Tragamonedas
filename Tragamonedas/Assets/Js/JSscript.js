
var imagenes = ["Assets/Imagenes/Zapallo.png","Assets/Imagenes/Papa.png","Assets/Imagenes/Enano.png","Assets/Imagenes/Doc.png", "Assets/Imagenes/Cherry.png","Assets/Imagenes/Diamante.png"];

var iniciar = document.getElementById("botonintro"); //Guardamos el boton de inicio
var interjuego = document.getElementById("juego");
var imgspin = document.getElementById("spinner");

//intervalos
var intervalo = "";
var intervalofrenado = "";
var contador = 0; 

//Seccion data usuario
var nombre = "";//aca se guardaria el nombre
var saldo = 0;
var contenedornombre = document.getElementById("usuario");
var contenedorsaldo = document.getElementById("saldo");
//-------------------

//Timba
var imagenslotss = document.getElementsByClassName("imagenslot");
var valores = document.getElementsByClassName("valores");
var valorapuesta = 0;

//codigo
iniciar.onclick=function(){
	
	while(nombre == ""){ //falta validar si pone un numero
	nombre = prompt("Ingrese su nombre");
	}
	
	while(saldo < 100){
		saldo = parseInt(prompt("Ingrese cuanto saldo desea (minimo de 100)"));
	}

	if (nombre != "" && saldo != NaN){ //falta ver como validar el numero
	iniciar.style.display = "none";
	interjuego.style.display = "flex";
	contenedornombre.innerHTML = (nombre);
	contenedorsaldo.innerHTML = (saldo);
	}
	else{
		alert("ñeñe");
	}
	
}




imgspin.onclick=function(){
	imgspin.setAttribute("src","Assets/Imagenes/Wait.png");
	for (var i = 0; i <= 3; i++){
	(function(i){
	intervalo = setInterval(function(){
	imagenslotss[i].setAttribute("src", imagenes[random()]);
	},200)
	intervalofrenado = setTimeout(function(){
	clearInterval(intervalo);
	imgspin.setAttribute("src","Assets/Imagenes/Spin.png");
	},2000);
}(i))
}
}

//tocar valores
for (var i = 0; i < valores.length ; i++){
(function(i){
	valores[i].onclick = function(){
	console.log(i);
}
}(i))	
}







//funciones
function random(){
	return Math.round(Math.random() * (imagenes.length - 1));
}
function frenado(interval){
	return clearInterval();
}