
var imagenes = ["Assets/Imagenes/Zapallo.png", "Assets/Imagenes/Papa.png", "Assets/Imagenes/Enano.png", "Assets/Imagenes/Doc.png", "Assets/Imagenes/Cherry.png", "Assets/Imagenes/Diamante.png"];
//var imagenes = ["Assets/Imagenes/Zapallo.png"];
var iniciar = document.getElementById("botonintro");                                                //Guardamos el boton de inicio
var interjuego = document.getElementById("juego");												   //guardamos el div que contiene todo el juego
var imgspin = document.getElementById("spinner"); 												   // guardamos el boton spin

//intervalos
var intervalo = "";
var intervalofrenado = "";
//Seccion data usuario
var nombre = ""; 																										   //aca se guardaria el nombre
var saldo = 0;																												  //saldo
var contenedornombre = document.getElementById("usuario"); 								  //guardamos el div en el que iria el nombre del usuario
var contenedorsaldo = document.getElementById("saldo"); 									  //guardamos el div en el que iria el saldo del usuario
var saldoinicial = 0;
var instruccion = document.getElementById("instrucciones");
var objetivo = document.getElementById("objetivo");
//Timba
var imagenslotss = document.getElementsByClassName("imagenslot");				    //guardamos los div en el que irian las imagenes del array
var valores = document.getElementsByClassName("valores"); 									//guardamos el array de los botones valores
var valorapuesta = ""; 																								    //aca guardariamos el valor del boton
var perdiste = document.getElementById("perdiste");
var botonreinicio = document.getElementsByClassName("reintentar");
var ganaste = document.getElementById("ganaste");
var imgboleano = true;
//codigo
iniciar.onclick = function () { 																					   //cuando se toque el boton iniciar
	while (nombre == "" || !isNaN(nombre)) {
		nombre = prompt("Ingrese su nombre"); 															//se pregunta el nombre y si esta vacio o es un numero se vuelve a preguntar hasta que se cumpla la condición
	}
	while (saldo < 100 || isNaN(saldo)) { 																		//si el saldo es menor a 100 o es nan el saldo se repite igual que arriba.
		saldo = parseInt(prompt("Ingrese cuanto saldo desea (minimo de 100)"));
		saldoinicial = saldo;
	}
	iniciar.style.display = "none"; 																				 //desaparece el boton de comenzar
	interjuego.style.display = "flex"; 																			   //se muestra en display el juego (flex para despues poder modificar el css)
	contenedornombre.innerHTML = (nombre); 														   //se muestra en pantalla el nombre
	contenedorsaldo.innerHTML = ("SALDO: " + (saldo));	
	objetivo.innerHTML = ("OBJETIVO: " + (saldoinicial*2));															 //se muestra en pantalla el dinero 
	instruccion.style.display = "none";
}
//tocar valores
for (var i = 0; i < valores.length; i++) {																	     //for que sirve para recorrer el array de los botones valores
	(function (i) {
		valores[i].onclick = function () { 																			//cuando se toque un boton en cualquier posición 
			valores[0].style.background = "#fff"; 															 //todos los botones se hacen grises
			valores[1].style.background = "#fff";
			valores[2].style.background = "#fff";
			valores[3].style.background = "#fff";
			valores[i].style.background = "#32AD69"; 																//pero al tocar uno el usuario se cambia solo ese
			valorapuesta = parseFloat(valores[i].textContent); 											//aca tamos agarrando y haciendo numero el valor tocado
			console.log(valorapuesta); 																				 //verificamos
			imgspin.style.display = "block"; 																	   //que se muestre el boton, despues de ingresar algun valor
		}
	}(i))
}
imgspin.onclick = function () { 																					//cuando se toque el spin 
	if (imgboleano === true) {
		if (saldo < valorapuesta) {
			if (saldo < 0.5) {
			perdiste.style.display = "flex";
			interjuego.style.display = "none";
		}
		else{
			alert("fondos insuficientes");
		}
		} else {
			imgboleano = false;
			imgspin.setAttribute("src", "Assets/Imagenes/Wait.png"); 							  //se cambia al spin wait
			saldo = saldo - valorapuesta; 																		   // el saldo tiene que restarse con el valor ingresado
			contenedorsaldo.innerHTML = (saldo);														  //se cambia el saldo en pantalla
			intervalo = setInterval(function () { 																 //y se hace un intervalo que giran las imagenes.
				imagenslotss[0].setAttribute("src", imagenes[random()]);
				imagenslotss[1].setAttribute("src", imagenes[random()]);
				imagenslotss[2].setAttribute("src", imagenes[random()]);
			}, 200)
			intervalofrenado = setTimeout(function () {													 //este intervalo se crea para que frenen despues de 20 segundos
				clearInterval(intervalo);
				imgboleano = true;
				imgspin.setAttribute("src", "Assets/Imagenes/Spin.png");
				if (imagenslotss[0].src === imagenslotss[1].src && imagenslotss[1].src === imagenslotss[2].src) { 			//detecta si las imagenes son iguales y triplica lo apostado
					saldo = saldo + (valorapuesta * 3);
					contenedorsaldo.innerHTML = (saldo);
				}
				if ((saldoinicial * 2) <= saldo) {
					interjuego.style.display = "none"
					ganaste.style.display = "flex";
				}
			}, 2000);

		}
	}
}
//reiniciarjuego
for (k = 0; k < botonreinicio.length; k++) {
	(function (k) {
		botonreinicio[k].onclick = function () {
			window.location.reload();
		}
	}(k))
}
//funciones
function random() {
	return Math.round(Math.random() * (imagenes.length - 1)); 				//funcion para que tire un numero random entre las posiciones del array imagenes
}
