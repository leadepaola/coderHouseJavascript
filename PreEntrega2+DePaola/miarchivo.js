

// Variables
let tipoJuego
let jugador
let juego_jugador


// Frases para alert/prompt
let frase1 = 'Bienvenidx a ESPN training, donde vas a poder entrenar un deporte'
let frase2 = '¿A qué quieres jugar?:\n- Futbol\n- Paddle\n- Tenis'
let frase3 = 'Dato mal ingresado, escribe una de las 3 opciones:\n- Futbol\n- Paddle\n- Tenis'
let frase4 = '¡Buena elección!  \n\n Ahora elige, escribiendo su numero, a tu personaje:\n 1. Roger Feder \n 2. Messi \n 3. Goku'
let frase5 = 'Dato mal ingresado, escribe el número 1,2 o 3:\n 1. Roger Feder \n 2. Messi \n 3. Goku'


// Algoritmo
alert(frase1);

// Elegir juego
tipoJuego = prompt(frase2).toLowerCase();

while(tipoJuego != 'futbol' && tipoJuego != 'paddle' && tipoJuego != 'tenis' ){
	
	tipoJuego = prompt(frase3);
}


// Elegir jugador
jugador = prompt(frase4);

while(jugador != 1 && jugador != 2 && jugador != 3 ){
	
	jugador = prompt(frase5);

}

//junto juego y jugador seleccionado
juego_jugador = tipoJuego+'_'+jugador


//Busco imagen correspondiente a la seleccion
switch(juego_jugador){
	
	case "futbol_1":
       $('#content').html('<img id="img_fondo" src="img/futbol_roger.png" alt="">');
  	break;

  	case "futbol_2":
       $('#content').html('<img id="img_fondo" src="img/futbol_messi.png" alt="">');
  	break;

  	case "futbol_3":
       $('#content').html('<img id="img_fondo" src="img/futbol_goku.png" alt="">');
  	break;

  	case "paddle_1":
       $('#content').html('<img id="img_fondo" src="img/paddle_roger.png" alt="">');
  	break;

  	case "paddle_2":
       $('#content').html('<img id="img_fondo" src="img/paddle_messi.png" alt="">');
  	break;

  	case "paddle_3":
       $('#content').html('<img id="img_fondo" src="img/paddle_goku.png" alt="">');
  	break;

  	case "tenis_1":
       $('#content').html('<img id="img_fondo" src="img/tenis_roger.png" alt="">');
  	break;

  	case "tenis_2":
       $('#content').html('<img id="img_fondo" src="img/tenis_messi.png" alt="">');
  	break;

  	case "tenis_3":
       $('#content').html('<img id="img_fondo" src="img/tenis_goku.png" alt="">');
  	break;

}



