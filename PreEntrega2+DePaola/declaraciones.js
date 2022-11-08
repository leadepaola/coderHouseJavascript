




/*
 ####  #        ##    ####  ######  ####     #   # 
#    # #       #  #  #      #      #          # #  
#      #      #    #  ####  #####   ####       #   
#      #      ######      # #           #      #   
#    # #      #    # #    # #      #    #      #   
 ####  ###### #    #  ####  ######  ####       # 

 ####  #####       # ###### #####  ####   ####  
#    # #    #      # #        #   #    # #      
#    # #####       # #####    #   #    #  ####  
#    # #    #      # #        #   #    #      # 
#    # #    # #    # #        #   #    # #    # 
 ####  #####   ####  ######   #    ####   ####

*/


// Clase cancha
class Cancha {
    constructor(tipo, suelo, cantidadJugadores, precio){
      this.tipo               = tipo;
      this.suelo              = suelo;
      this.cantidadJugadores  = cantidadJugadores;
      this.precio             = precio;
    }
    mostrar_Info_Cancha(){
      return(`CANCHA DE ${this.tipo}\nSuelo: ${this.suelo}\nCantidad de jugadores: ${this.cantidadJugadores}\nValor de alquiler por hora: $${this.precio}`)
    }
}

const canchaFutbol  = new Cancha ('FÚTBOL','Pasto sintético', 10, 5000);
const canchaTenis   = new Cancha ('TENIS','Polvo de ladrillo', 4, 8000);
const canchaBasquet = new Cancha ('BÁSQUET 3 vs 3','Parqué', 6, 4500);








//Clase jugador
class Jugador {
    constructor(nombre, apodo, estrellas){
      this.nombre       = nombre;
      this.apodo        = apodo;
      this.estrellas    = estrellas;

    }

    mostrar_info_jugador(){
      return(`${this.nombre}\n\nApodo: ${this.apodo}\nEstrellas: ${this.estrellas}`)
    }
}


const jugador1  = new Jugador ('Kylian Mbappé','Kyli', 4.7);
const jugador2  = new Jugador ('Lionel Messi','la pulga', 5);
const jugador3  = new Jugador ('Ángel Di María','Fideo', 4.6);
const jugador4  = new Jugador ('Karim Benzema','el gato', 5);
const jugador5  = new Jugador ('Gerard Pique','Geri', 3.8);
const jugador6  = new Jugador ('Rodrigo De Paul','Pollo', 4.5);
const jugador7  = new Jugador ('Alejandro Gómez','el papu', 4.1);
const jugador8  = new Jugador ('Damián Martínez','el dibu', 4);
const jugador9  = new Jugador ('Cristiano Ronaldo','el bicho', 5);
const jugador10  = new Jugador ('Erling Haaland','el androide', 4.7);

const jugador11  = new Jugador ('Rafael Nadal','Rafa', 5);
const jugador12  = new Jugador ('Juan Martín del Potro','la torre', 4.7);
const jugador13  = new Jugador ('Serena Williams','Slam', 4.4);
const jugador14  = new Jugador ('María Sharápova','Masha Queen', 4.2);

const jugador15  = new Jugador ('Michael Jordan','Black Jesus', 5);
const jugador16  = new Jugador ("Shaquille O'Neal ",'Big Cactus', 4.7);
const jugador17  = new Jugador ('Emanuel Ginóbili','Manu', 4.7);
const jugador18  = new Jugador ('LeBron James','King', 4.9);
const jugador19  = new Jugador ('Stephen Curry','Steph', 4.8);
const jugador20  = new Jugador ('Luis Scola','Luifa', 4.6);










/*
  ##   #####  #####    ##   #   #  ####  
 #  #  #    # #    #  #  #   # #  #      
#    # #    # #    # #    #   #    ####  
###### #####  #####  ######   #        # 
#    # #   #  #   #  #    #   #   #    # 
#    # #    # #    # #    #   #    ####  
*/


//Array de jugadores registrados
const canchas = [ canchaFutbol, canchaTenis, canchaBasquet];

const jugadores = [
  jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8, jugador9, jugador10, jugador11, jugador12, jugador13, jugador14, jugador15, jugador16, jugador17, jugador18, jugador19, jugador20
];









/*
###### #    # #    #  ####  #  ####  #    # ######  ####  
#      #    # ##   # #    # # #    # ##   # #      #      
#####  #    # # #  # #      # #    # # #  # #####   ####  
#      #    # #  # # #      # #    # #  # # #           # 
#      #    # #   ## #    # # #    # #   ## #      #    # 
#       ####  #    #  ####  #  ####  #    # ######  #### 
*/



//  Verificacion de ingreso de dato del usuario
//  El numero 3 refiere a que solo 3 numeros son válidos
const solicito_y_verifico_inputs3 = (variable, frase, input1, input2, input3) => {
 
  while(variable != input1 && variable != input2 && variable != input3 ){
  
    variable = prompt(frase);

  }

  return variable
}


//  Verificacion de ingreso de dato del usuario
//  El numero 2 refiere a que solo 2 numeros son válidos
const solicito_y_verifico_inputs2 = (variable, frase, input1, input2) => {
 
  while(variable != input1 && variable != input2 ){
  
    variable = prompt(frase);

  }

  return variable
}






// Salta de promp a promp para que el usuario pueda visualizar 
// La informacion de chanchas de futbol, tenis y basquet
const ver_info_canchas = (variable) => {
  
  let nuevoInput
  let inputSalida

  switch(variable){
  
    case "1":
      nuevoInput = prompt( frase6 );
      inputSalida = solicito_y_verifico_inputs3(nuevoInput,frase7,2,3,0);
      return inputSalida;
    break;

    case "2":
      nuevoInput = prompt( frase8 );
      inputSalida = solicito_y_verifico_inputs3(nuevoInput,frase9,1,3,0);
      return inputSalida;
    break;

    case "3":
      nuevoInput = prompt( frase10 );
      inputSalida = solicito_y_verifico_inputs3(nuevoInput,frase11,1,2,0);
      return inputSalida;
    break;

  }
}




//Selecciono jugadores al azar
const select_jugadores_alAzar = (array) => {

    //Ordena con posiciones al azar
    return array.sort(() => Math.random() > 0.5 ? 1 : -1);
}




//Calcular sale alquilar la cancha por jugador
const calcular_valorCancha_xPersona =(precio, cantidadJugadores) =>{
  return precio/cantidadJugadores 
}