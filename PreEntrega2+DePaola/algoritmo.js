

//Variables
let verInfo;
let verInfo_seleccion;

let canchaSeleccionada;
let canchaSeleccionada_OBJ={};

let maxJugadores;
let jugadoresRestantes;

let sumadoDeJugadores;

let temp_nombreJugador;
let temp_apodoJugador;
let temp_varVerif;

let jugadoresSeleccionados = []


// Frases para alert/prompt
let frase1 = 'Hola de nuevo a ESPN training, donde vas a poder entrenar un deporte.';
let frase2 = 'En esta ocasión te encargarás de organizar un partido';
let frase3 = 'Puedes elegir 3 deportes.\n¡Asegúrate de ver su información antes de elegirlo!';
let frase4 = '¿De qué deporte quieres ver la información?\nElige escribiendo su número:\n\n1. Fútbol\n2. Tenis\n3. Básquet';
let frase5 = 'Dato mal insertado.\n\n¿De qué deporte quieres ver la información?\nElige escribiendo su número:\n\n1. Futbol\n2. Tenis\n3. Básquet';

let frase6 = canchaFutbol.mostrar_Info_Cancha()+'\n\n2. Ver Tenis\n3. Ver Básquet\n0. Pasar a seleccionar';
let frase7 ='Dato mal insertado.\n\n¿De qué deporte quieres ver la información?\nElige escribiendo su número:\n\n2. Ver Tenis\n3. Ver Básquet\n0. Pasar a seleccionar';

let frase8 = canchaTenis.mostrar_Info_Cancha()+'\n\n1. Ver Fútbol\n3. Ver Básquet\n0. Pasar a seleccionar';
let frase9 ='Dato mal insertado.\n\n¿De qué deporte quieres ver la información?\nElige escribiendo su número:\n\n1. Ver Fútbol\n3. Ver Básquet\n0. Pasar a seleccionar';;

let frase10 = canchaBasquet.mostrar_Info_Cancha()+'\n\n1. Ver Fútbol\n2. Ver Tenis\n0. Pasar a seleccionar';
let frase11 ='Dato mal insertado.\n\n¿De qué deporte quieres ver la información?\nElige escribiendo su número:\n\n1. Ver Fútbol\n2. Ver Tenis\n0. Pasar a seleccionar';


let frase12 = '¿A qué deporte quieres jugar?\n\n1. Fútbol\n2. Tenis\n3. Básquet';

let frase15 = 'SUMAR JUGADORES\n\n1. Agregar manualmente un jugador amigo\n2. Que ESPN training se encargue de buscar el resto de jugadores';
let frase16 = 'Ingresa el nombre del jugador';
let frase17 = 'Ingresa el apodo del jugador';








/*
# #    # #  ####  #  ####  
# ##   # # #    # # #    # 
# # #  # # #      # #    # 
# #  # # # #      # #    # 
# #   ## # #    # # #    # 
# #    # #  ####  #  ####
*/



//Bienvenida
alert(frase1);
alert(frase2);
alert(frase3);



// Elegir ver informacion de deporte/cancha
//verInfo = prompt(frase4);
verInfo = solicito_y_verifico_inputs3(verInfo,frase4,1,2,3);

// Verifico que haya introducido bien un dato 
verInfo = solicito_y_verifico_inputs3(verInfo,frase5,1,2,3);




// Muestro info de deporte/cancha solicitada
while(verInfo != 0  ){

	verInfo = ver_info_canchas(verInfo);

}	


// Solicito que seleccione deporte/cancha a jugar
canchaSeleccionada = solicito_y_verifico_inputs3(canchaSeleccionada,frase12,1,2,3);


// Segun deporte/cancha seleccionado, instancio objeto
switch(canchaSeleccionada){
  
    case "1":
    	canchaSeleccionada_OBJ = new Cancha ('FÚTBOL','Pasto sintético', 10, 5000);
    break;

    case "2":
    	canchaSeleccionada_OBJ = new Cancha ('TENIS','Polvo de ladrillo', 4, 8000);
    break;

    case "3":
    	canchaSeleccionada_OBJ = new Cancha ('BÁSQUET 3 vs 3','Parqué', 6, 4500);
    break;

}


alert('Has seleccionado:\n\nCHANCA DE '+canchaSeleccionada_OBJ.tipo+'\n ');

//console.log(canchaSeleccionada_OBJ);
//alert(canchaSeleccionada_OBJ.mostrar_Info_Cancha());


// Tomo máximo de jugadores de acuerdo a seleccion de deporte/cancha
maxJugadores = canchaSeleccionada_OBJ.cantidadJugadores;


// Calculo jugadores restantes
jugadoresRestantes= maxJugadores-1;
alert('Contándote a ti, restan '+jugadoresRestantes+' jugadores para completar partido');	



// Se agregan jugadores al partido

while(jugadoresRestantes > 0 ){

	// Consulto cómo quiere agregar jugadores
	// Manual o automatico
	sumadoDeJugadores = solicito_y_verifico_inputs2(sumadoDeJugadores,frase15,1,2);

	switch(sumadoDeJugadores){
  	
	  	// Agregar jugador de manera manual
	    case "1":

	    	//Tomo datos de jugador. Nombre y apodo
	    	while(temp_varVerif!=1){
				
	    		temp_varVerif=0;

	    		//Pido nombres	
		    	temp_nombreJugador = prompt(frase16);
		    	temp_apodoJugador = prompt(frase17);	

		    	//Preparo frase con datos insertados 
		    	let frase18 = 'Nombre: '+temp_nombreJugador+'\nApodo: '+temp_apodoJugador+'\n\n1. Confirmar\n2. Editar de cero';

		    	//Consulto si ingresó los datos correctos
		    	temp_varVerif = solicito_y_verifico_inputs2(temp_varVerif,frase18,1,2);
		    	
	    	}

	    	//Introduzco jugador en la lista
	    	jugadoresSeleccionados.push({
				nombre: temp_nombreJugador,
				apodo: temp_apodoJugador,
				estrellas: 0
			});

	    	jugadoresRestantes--;

	    	//Reseteo variables
	    	temp_varVerif=0;
		  	sumadoDeJugadores=0;

	    break;



	    // Agregar jugador de manera automática
	    case "2":

	    	for (let i = 0; i < jugadores.length; i++) {
	
	    		// Mezco de manera aleatoria todos los jugadores del array jugadores 
	    		let jugadoresRandom = select_jugadores_alAzar(jugadores);

	   			// Verifico que el jugador no se repita en el nuevo array jugadoresSeleccionados
	    		let metodoSOME = jugadoresSeleccionados.some((jugador) => jugador.nombre === jugadoresRandom[i].nombre)

	    		// Si no se repita y todavia faltan jugadores restantes para completar partido, lo agrego al partido
	    		if(metodoSOME==false && jugadoresRestantes >0){

	    			jugadoresSeleccionados.push(jugadoresRandom[i]);
	    			jugadoresRestantes--;
	    		}
	    		
			}

	    break;
	 }
}
  	


alert('Ya tienes organizado el partido, ¡Bravo!');
alert('Esta la información de tu partido:\n\n'+canchaSeleccionada_OBJ.mostrar_Info_Cancha());

	// Ordeno string en variable 
	let imprimirJugadores='';

	jugadoresSeleccionados.forEach((jugadores) =>{
		imprimirJugadores += (jugadores.nombre+'\n');
	})

alert('Ellos serán tus amigos del partido:\n\n'+imprimirJugadores);

	// Calculo precio por persona para pagar la cancha
	let precioPorPersona;
	precioPorPersona = calcular_valorCancha_xPersona(canchaSeleccionada_OBJ.precio, canchaSeleccionada_OBJ.cantidadJugadores);

alert('¡Y recuerda!\n\n Deben pagar $'+precioPorPersona+' cada uno para alquiler de la cancha :P');



/*
###### # #    # 
#      # ##   # 
#####  # # #  # 
#      # #  # # 
#      # #   ## 
#      # #    # 
*/

