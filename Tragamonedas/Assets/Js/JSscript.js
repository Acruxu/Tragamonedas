
var imagenes = ["Assets/Imagenes/Zapallo.png","Assets/Imagenes/Papa.png","Assets/Imagenes/Enano.png","Assets/Imagenes/Doc.png", "Assets/Imagenes/Cherry.png","Assets/Imagenes/Diamante.png"];

var iniciar = document.getElementById("botonintro"); //Guardamos el boton de inicio
var interjuego = document.getElementById("juego");
var imgspin = document.getElementById("spinner");

//intervalos
var intervalo = "";
var intervalofrenado = "";

//Seccion data usuario
var nombre = "";//aca se guardaria el nombre
var saldo = 0;
var contenedornombre = document.getElementById("usuario");
var contenedorsaldo = document.getElementById("saldo");
//-------------------

//Timba
var imagenslotss = document.getElementsByClassName("imagenslot");
var valores = document.getElementsByClassName("valores");
var valorapuesta = "";



//codigo
iniciar.onclick=function(){
	
	while(nombre == "" || !isNaN(nombre)){ 
	nombre = prompt("Ingrese su nombre");
	}
	
	
	while(saldo < 100||(isNaN(saldo))){
		saldo = parseInt(prompt("Ingrese cuanto saldo desea (minimo de 100)"));
	}

	iniciar.style.display = "none";
	interjuego.style.display = "flex";
	contenedornombre.innerHTML = (nombre);
	contenedorsaldo.innerHTML = (saldo);
	}
	


 imgspin.onclick=function(){
	imgspin.setAttribute("src","Assets/Imagenes/Wait.png");
	saldo= saldo-valorapuesta;
	contenedorsaldo.innerHTML = (saldo);
	intervalo = setInterval(function(){
	imagenslotss[0].setAttribute("src", imagenes[random()]);
	imagenslotss[1].setAttribute("src", imagenes[random()]);
	imagenslotss[2].setAttribute("src", imagenes[random()]);
	},200)
	intervalofrenado = setTimeout(function(){
		clearInterval(intervalo);
		imgspin.setAttribute("src","Assets/Imagenes/Spin.png");

		},2000);
	
}




//tocar valores
for (var i = 0; i < valores.length ; i++){
(function(i){
	valores[i].onclick = function(){
		valores[0].style.background="grey";
		valores[1].style.background="grey";
		valores[2].style.background="grey";
		valores[3].style.background="grey";

	valores[i].style.background="blue";
	valorapuesta = 	parseInt(valores[i].textContent);
	console.log(valorapuesta);
	imgspin.style.display = "block";
}
}(i))	
}







//funciones
function random(){
	return Math.round(Math.random() * (imagenes.length - 1));
}
