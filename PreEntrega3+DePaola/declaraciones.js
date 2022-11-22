




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
    constructor(tipo, suelo, lugar, userConfirmado, cantidadJugadoresConfirmados, cantidadJugadores, precio, img){
      this.tipo                           = tipo;
      this.suelo                          = suelo;
      this.lugar                          = lugar;
      this.userConfirmado                 = userConfirmado;
      this.cantidadJugadoresConfirmados   = cantidadJugadoresConfirmados;
      this.cantidadJugadores              = cantidadJugadores;
      this.precio                         = precio;
      this.img                            = img;
    }
}

const canchaFutbol1 = new Cancha ('Fútbol',   'Pasto sintético', 'Villa Bosch',      0, 6, 10, 650, './img/canchas/futbol_1.png');
const canchaFutbol2 = new Cancha ('Fútbol',   'Pasto sintético', 'San Andrés',       0, 4, 10, 650, './img/canchas/futbol_2.jpg');

const canchaBasquet1 = new Cancha ('Básquet', 'Parqué',          'Devoto',           0, 3,  6, 990, './img/canchas/basquet_1.jpg');
const canchaBasquet2 = new Cancha ('Básquet', 'Cemento',         'Pilar',            0, 5, 10, 800, './img/canchas/basquet_2.jpg');

const canchaTenis1 = new Cancha ('Tenis',     'Polvo de ladrillo', 'El Palomar',     0, 1, 2, 1500, './img/canchas/tenis_1.jpg');
const canchaTenis2 = new Cancha ('Tenis',     'Polvo de ladrillo', 'Ciudad Jardín',  0, 3, 4, 1200, './img/canchas/tenis_2.jpg');





//Clase jugador
class Jugador {
    constructor(id, nombre, apellido, apodo, estrellas, img){
      this.id           = id;
      this.nombre       = nombre;
      this.apellido       = apellido;
      this.apodo        = apodo;
      this.estrellas    = estrellas;
      this.img          = img;

    }
}


const jugador1  = new Jugador (1, 'Kylian','Mbappé','Kyli', '4.7',               './img/players/kylian.jpg');
const jugador2  = new Jugador (2, 'Lionel','Messi','la pulga', '5.0',              './img/players/messi.jpg');
const jugador3  = new Jugador (3, 'Ángel','Di María','Fideo', '4.6',             './img/players/di_maria.png');
const jugador4  = new Jugador (4, 'Karim','Benzema','el gato', '5.0',              './img/players/benzema.jpg');
const jugador5  = new Jugador (5, 'Gerard','Pique','Geri', '3.8',                './img/players/pique.png');
const jugador6  = new Jugador (6, 'Rodrigo','De Paul','Pollo', '4.5',            './img/players/de_paul.jpg');
const jugador7  = new Jugador (7, 'Alejandro','Gómez','el papu', '4.1',          './img/players/papu_gomez.png');
const jugador8  = new Jugador (8, 'Damián','Martínez','el dibu', '4.0',            './img/players/dibu_martinez.png');
const jugador9  = new Jugador (9, 'Cristiano','Ronaldo','el bicho', '5.0',         './img/players/cristiano.jpg');
const jugador10  = new Jugador (10, 'Erling','Haaland','el androide', '4.7',      './img/players/haaland.jpeg');

const jugador11  = new Jugador (11, 'Rafael','Nadal','Rafa', '5.0',                 './img/players/rafa_nadal.png');
const jugador12  = new Jugador (12, 'Juan Martín','del Potro','la torre', '4.7',  './img/players/delpotro.jpg');
const jugador13  = new Jugador (13, 'Serena','Williams','Slam', '4.4',            './img/players/serena_williams.jpg');
const jugador14  = new Jugador (14, 'María','Sharápova','Masha Queen', '4.2',     './img/players/sharapova.png');

const jugador15  = new Jugador (15, 'Michael','Jordan','Black Jesus', '5.0',        './img/players/jordan.jpg');
const jugador16  = new Jugador (16, 'Shaquille',"O'Neal",'Big Cactus', '4.7',     './img/players/oneal.png');
const jugador17  = new Jugador (17, 'Manu','Ginóbili','Manu', '4.7',              './img/players/manu_ginobilli.jpg');
const jugador18  = new Jugador (18, 'LeBron','James','King', '4.9',               './img/players/lebron.jpg');
const jugador19  = new Jugador (19, 'Stephen','Curry','Steph', '4.8',             './img/players/curry.png');
const jugador20  = new Jugador (20, 'Luis','Scola','Luifa', '4.6',                './img/players/scola.jpg');





/*
  ##   #####  #####    ##   #   #  ####  
 #  #  #    # #    #  #  #   # #  #      
#    # #    # #    # #    #   #    ####  
###### #####  #####  ######   #        # 
#    # #   #  #   #  #    #   #   #    # 
#    # #    # #    # #    #   #    ####  
*/


//Arrays de bases
const partidosAbiertos = [ canchaFutbol1, canchaFutbol2, canchaBasquet1, canchaBasquet2, canchaTenis1, canchaTenis2];

const jugadores = [
  jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8, jugador9, jugador10, jugador11, jugador12, jugador13, jugador14, jugador15, jugador16, jugador17, jugador18, jugador19, jugador20
];

const jugadoresOnline = [
  jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8, jugador9, jugador10, jugador11, jugador12, jugador13, jugador14, jugador15, jugador16, jugador17, jugador18, jugador19, jugador20
];




// VARIABLES



//let jugadoresOnline = jugadores;



    // POP UP
    const fondo_negro           = document.querySelector('#fondo_negro')
    const popUp_perfil_content  = document.querySelector('#popUp_perfil_content')


const jugOn_SubContainer = document.querySelector('#jugOn_SubContainer')


/*
###### #    # #    #  ####  #  ####  #    # ######  ####  
#      #    # ##   # #    # # #    # ##   # #      #      
#####  #    # # #  # #      # #    # # #  # #####   ####  
#      #    # #  # # #      # #    # #  # # #           # 
#      #    # #   ## #    # # #    # #   ## #      #    # 
#       ####  #    #  ####  #  ####  #    # ######  #### 
*/


// Devuelve al azar 1 o 0 (uno o cero)
const azar_online_offline = () => {
    return Math.round(Math.random() * (1 + 0-0) + 0);
}



//Selecciono jugadores al azar que se encuentran Online
const jugadores_online_alAzar = (array) => {

    // Reordena array
    const nuevoArray = array.sort(() => Math.random() > 0.5 ? 1 : -1);


    nuevoArray.forEach((jugador) =>{

      // Si de forma azar da 1 se imprime el jugador
      if(azar_online_offline() == 1){

        const jugadorOn = document.createElement('div')
        jugadorOn.classList.add('jugOn_img_container')
        jugadorOn.innerHTML = `<img class="jugOn_img" src="${jugador.img}" alt="${jugador.nombre}" data-id="${jugador.id}" >`

        jugOn_SubContainer.append(jugadorOn)
      }

    })

}

// Imprimo jugadores Online => el resultado siempre es al alzar
jugadores_online_alAzar(jugadoresOnline);










const jugOn_img_container = document.querySelectorAll('.jugOn_img_container')



/*
###### #    # ###### #    # #####  ####   ####  
#      #    # #      ##   #   #   #    # #      
#####  #    # #####  # #  #   #   #    #  ####  
#      #    # #      #  # #   #   #    #      # 
#       #  #  #      #   ##   #   #    # #    # 
######   ##   ###### #    #   #    ####   ####
*/




//Click sobre jugador Online => Muestro popUp con su info
jugOn_img_container.forEach((action) =>{

  action.addEventListener('click', (e) =>{

    // Tomo el id del jugador al que se le hizo click
    const id_jugador = e.target.getAttribute('data-id')

    jugadores.forEach((seleccionado) => {
        
      if(seleccionado.id==id_jugador){

          popUp_perfil_content.innerHTML = `
            <img id="popUp_perfil_photo" src="${seleccionado.img}" alt="${seleccionado.nombre}">

            <div id="popUp_tit"><span class="segoe_semiblond">${seleccionado.nombre} </span>${seleccionado.apellido}</div>

            <div id="popUp_quali">
              ${seleccionado.estrellas}
              <img id="popUp_star" src="./img/star_png.png" alt="">
            </div>
            `
      }
    })
    
    // Css
    fondo_negro.style.display = 'flex'
    popUp_perfil_content.style.display = 'block'
    
  })
  
})



// Click sobre fondo negro
fondo_negro.addEventListener('click', () =>{

  fondo_negro.style.display = 'none'
  popUp_perfil_content.style.display = 'none'
})


// Click sobre pop ap Perfil jugador
popUp_perfil_content.addEventListener('click', () =>{

  fondo_negro.style.display = 'none'
  popUp_perfil_content.style.display = 'none'
})