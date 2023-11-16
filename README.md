# Tragamonedas
Trabajo final de programación
Los integrantes:  Ignacio Laluz
                  Giuliodori Kaestner
                  Francisco Galeano
                  Joaco Abecian

Descripcion tecnica: La idea de este Tp es realizar un tragamonedas con html, css y javascript en la que el usuario tenga la posibilidad de poder apostar todo el dinero que quiera y caer en la tentacion de la ludopatia hasta perder o ganar si duplica el dinero ingresado.

1- En un principio, le pediremos al usuario que ingrese su nombre a partir de un prompt que guarde la informacion en una variable.
2- Luego se le pedira al usuario que ingrese el monto de dinero total que quiere apostar, el cual tiene que ser un numero >= 100.
3- En el siguiente paso, se le daran 4 opciones al usuario de cuanto quiere apostar en una cifra pequeña del monto total, los cuales seran: (0.5, 1, 2, 5 ).  Donde habra un contador de su monto total donde sumara dinero cuando gane y restara cuando pierde.
4- A partir de este punto, el usuario podra comenzar a realizar sus apuestas activando una palanca, donde se barajaran 3 iamgenes como si fuera una maquina de casino.
5- En caso de ganar (unicamente con 3 imagenes iguales) la apusta ingresada se triplicara *3 y se sumara al contador. En caso de perder, la apuesta se perdera y el dinero apostado se le restara al contador del monto.
6- El usuario gana en caso de duplciar el monto total ingresado en el principio (contador) y perdera en caso de llegar a 0 o menos al valor del contador.
