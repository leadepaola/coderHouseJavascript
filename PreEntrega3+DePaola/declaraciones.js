




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
    constructor(id, tipo, suelo, lugar, userConfirmado, cantidadJugadoresConfirmados, cantidadJugadores, precio, img){
      this.id                             = id;
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

const canchaFutbol1 = new Cancha (1, 'Fútbol',   'Pasto sintético', 'Villa Bosch',      0, 6, 10, 650, './img/canchas/futbol_1.png');
const canchaFutbol2 = new Cancha (2, 'Fútbol',   'Pasto sintético', 'San Andrés',       0, 4, 10, 650, './img/canchas/futbol_2.jpg');

const canchaBasquet1 = new Cancha (3, 'Básquet', 'Cemento',          'Devoto',           0, 3,  6, 990, './img/canchas/basquet_1.jpg');
const canchaBasquet2 = new Cancha (4, 'Básquet', 'Cemento',         'Pilar',            0, 5, 10, 800, './img/canchas/basquet_2.jpg');

const canchaTenis1 = new Cancha (5, 'Tenis',     'Polvo de ladrillo', 'El Palomar',     0, 1, 2, 1500, './img/canchas/tenis_1.jpg');
const canchaTenis2 = new Cancha (6, 'Tenis',     'Polvo de ladrillo', 'Ciudad Jardín',  0, 3, 4, 1200, './img/canchas/tenis_2.jpg');





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
let partidos


// Verifico si hay informacion en storage para partidos abiertos
if(localStorage.getItem('partidos')){
  partidos = JSON.parse(localStorage.getItem('partidos'))
}else{
  partidos = [ canchaFutbol1, canchaFutbol2, canchaBasquet1, canchaBasquet2, canchaTenis1, canchaTenis2]; 
}

// Verifico si hay informacion en storage para partidos confirmados
if(localStorage.getItem('partidosConfirmados')){
  partidosConfirmados = JSON.parse(localStorage.getItem('partidosConfirmados'))
}else{
  partidosConfirmados = [ ]; 
}



const jugadores = [
  jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8, jugador9, jugador10, jugador11, jugador12, jugador13, jugador14, jugador15, jugador16, jugador17, jugador18, jugador19, jugador20
];

const jugadoresOnline = [
  jugador1, jugador2, jugador3, jugador4, jugador5, jugador6, jugador7, jugador8, jugador9, jugador10, jugador11, jugador12, jugador13, jugador14, jugador15, jugador16, jugador17, jugador18, jugador19, jugador20
];




// VARIABLES
//-------------------------------------

// POP UP
const fondo_negro             = document.querySelector('#fondo_negro')
const popUp_perfil_content    = document.querySelector('#popUp_perfil_content')
const popUp_sumarsePart_cont  = document.querySelector('#popUp_sumarsePart_cont')
const popUp_info_content      = document.querySelector('#popUp_info_content')
const popUp_info_txt          = document.querySelector('#popUp_info_txt')



// Jugadores Online
const jugOn_SubContainer = document.querySelector('#jugOn_SubContainer')

// Baja
const popUp_bajaPart_cont          = document.querySelector('#popUp_bajaPart_cont')




/*
###### #    # #    #  ####  #  ####  #    # ######  ####  
#      #    # ##   # #    # # #    # ##   # #      #      
#####  #    # # #  # #      # #    # # #  # #####   ####  
#      #    # #  # # #      # #    # #  # # #           # 
#      #    # #   ## #    # # #    # #   ## #      #    # 
#       ####  #    #  ####  #  ####  #    # ######  #### 
*/


// Devuelve al azar 1 o 0 (uno o cero)
//-------------------------------------
const azar_online_offline = () => {
    return Math.round(Math.random() * (1 + 0-0) + 0);
}



// Selecciono jugadores al azar que se encuentran Online
//-------------------------------------
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








// Imprimir partidos abiertos
//-------------------------------------

const partAb_SubContainer   = document.querySelector('#partAb_SubContainer')
const partConf_SubContainer = document.querySelector('#partConf_SubContainer')



const imprimir_partidosAbiertos = () =>{

  partidos.forEach((cancha) => {

    const partAb = document.createElement('div')
    partAb.classList.add('partAb_img_container')
    partAb.setAttribute('data-id',cancha.id)

    //<img class="partAb_img" data-id="${cancha.id}" src="${cancha.img}" alt="${cancha.tipo}">
    if (cancha.cantidadJugadoresConfirmados != cancha.cantidadJugadores && cancha.userConfirmado==0) {
        partAb.innerHTML = `
            <img class="partAb_img" src="${cancha.img}" alt="${cancha.tipo}">

            <div class="partAv_txt_content">
              <div class="partAb_tit" >${cancha.tipo} - ${cancha.lugar}</div>     
              <div class="partAb_sub">${cancha.cantidadJugadoresConfirmados} confirmados de ${cancha.cantidadJugadores}</div>     
              <div class="partAb_pre">$${cancha.precio}</div>  
            </div>
          `
        partAb_SubContainer.append(partAb)
    }  

  })
}

imprimir_partidosAbiertos()






const mostrarInfoPartidoConfirmado = (e) => {
  
    // Tomo el id del jugador al que se le hizo click
    const id_partConfirmado = e.target.closest('.partConf_img_container').getAttribute('data-id')
   

    partidosConfirmados.forEach((cancha) => {

      if (cancha.id == id_partConfirmado) {

          //const bajaPart = document.createElement('div')
          //bajaPart.classList.add('popUp_bajaPart_cont')

          let imgLogo = ''

          switch(cancha.tipo){
            case 'Fútbol':
                imgLogo='./img/balls/football.png'
            break;
            case 'Básquet':
                imgLogo='./img/balls/basket.png'

            break;
            case 'Tenis':
                imgLogo='./img/balls/tennis.png'
            break;
          }


          popUp_bajaPart_cont.innerHTML = `
              <img id="popUp_bajaPart_photo" src="${imgLogo}" alt="${cancha.tipo}">

              <div id="popUp_bajaPart_info_cont">
                  <div id="bajaPart_tit">${cancha.lugar}</div>

                  <div id="bajaPart_suelo">${cancha.suelo}</div>
                  <div id="bajaPart_jugadores">${cancha.cantidadJugadoresConfirmados} Jugadores confirmados de ${cancha.cantidadJugadores}</div>

                  <div id="bajaPart_Precio">$${cancha.precio}</div>
              </div>

              <button id="btn_bajaPart_content" data-id="${cancha.id}">
                  <div id="btn_bajaPart_txt">Darse de baja</div>
              </button>
          `
          popUp_bajaPart_cont.style.backgroundImage = `url("${cancha.img}")`

          mostrar_popUp_bajaPart()
      }

        

  })
} 





const renderizar_partidosConfirmados = () =>{

  partConf_SubContainer.innerHTML = ''

  partidosConfirmados.forEach((cancha) => {

    const partConf = document.createElement('div')
    partConf.classList.add('partConf_img_container')
    partConf.setAttribute('data-id',cancha.id)
       
    partConf.innerHTML = `
        <img class="partConf_img" src="${cancha.img}" alt="${cancha.tipo}">

        <div class="partConf_txt_content">
          <div class="partConf_tit" >${cancha.tipo}</div>      
          <div class="partConf_sub">${cancha.lugar}</div>      
          <div class="partConf_pre">$${cancha.precio}</div> 
        </div>
    `
    partConf_SubContainer.append(partConf)

  })

  // Creo query selector 
  const partConf_img_container = document.querySelectorAll('.partConf_img_container')
  partConf_img_container.forEach((card) =>{
      card.addEventListener('click', mostrarInfoPartidoConfirmado)
  })
}

renderizar_partidosConfirmados()























const agregar_partido_a_confirmados = (id) => {

    const partConf = document.createElement('div')
    partConf.classList.add('partConf_img_container')
    

    partidosConfirmados.forEach((cancha) => {
        if(cancha.id==id){
            partConf.setAttribute('data-id',cancha.id)
            partConf.innerHTML = `
                <img class="partConf_img" src="${cancha.img}" alt="${cancha.tipo}">

                <div class="partConf_txt_content">
                  <div class="partConf_tit" >${cancha.tipo}</div>      
                  <div class="partConf_sub">${cancha.lugar}</div>      
                  <div class="partConf_pre">$${cancha.precio}</div> 
                </div>
            `
            partConf_SubContainer.append(partConf)

        }
    })
  
}













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
//-------------------------------------
jugOn_img_container.forEach((card) =>{

  card.addEventListener('click', (e) =>{

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











// Click sobre Partido abierto => muesta popUp para sumarse al partido
//-------------------------------------

const popUp_sumarsePart_photo   = document.querySelector('#popUp_sumarsePart_photo')
const partAb_img_container      = document.querySelectorAll('.partAb_img_container')

partAb_img_container.forEach((card) =>{

    card.addEventListener('click', (e) =>{

    // Tomo el id del jugador al que se le hizo click
    const id_cancha = e.target.closest('.partAb_img_container').getAttribute('data-id')

    partidos.forEach((cancha) =>{

      if(cancha.id == id_cancha){

          let imgLogo = ''

          switch(cancha.tipo){
            case 'Fútbol':
                imgLogo='./img/balls/football.png'
            break;
            case 'Básquet':
                imgLogo='./img/balls/basket.png'

            break;
            case 'Tenis':
                imgLogo='./img/balls/tennis.png'
            break;
          }

          popUp_sumarsePart_cont.innerHTML= `
              <img id="popUp_sumarsePart_photo" src="${imgLogo}" alt="">

              <div id="popUp_sumarsePart_info_cont">
                <div id="sumarsePart_tit">${cancha.lugar}</div>

                <div id="sumarPart_suelo">${cancha.suelo}</div>
                <div id="sumarPart_jugadores">${cancha.cantidadJugadoresConfirmados} Jugadores confirmados de ${cancha.cantidadJugadores}</div>

                <div id="sumarPart_Precio">$${cancha.precio}</div>
              </div>

              <button id="btn_sumarsePart_content" data-id="${cancha.id}">
                <div id="btn_sumarsePart_txt">Sumarse</div>
              </button>

              `
          popUp_sumarsePart_cont.style.backgroundImage = `url("${cancha.img}")`

      }

    })

    // Css
    fondo_negro.style.display = 'flex'
    popUp_sumarsePart_cont.style.display = 'block'
    
    


    // Click sobre btn Sumarse 
    //-------------------------------------

    const btn_sumarsePart_content   = document.querySelector('#btn_sumarsePart_content')

    btn_sumarsePart_content.addEventListener('click', (e) =>{

        // Saco card de partidos abiertos para mostrarla, luego, en confirmados
        card.style.display = 'none'

        // Tomo el id del partido seleccionado
        const partido_select_id = e.target.closest('#btn_sumarsePart_content').getAttribute('data-id')
        
        partidos.forEach((partido) =>{
            if (partido.id == partido_select_id) {
                partido.userConfirmado = 1;
                partido.cantidadJugadoresConfirmados++

                partidosConfirmados.push(partido)

            }
        })
        


        // Guardo Modificacion en storage
        localStorage.setItem('partidos',JSON.stringify(partidos))
        localStorage.setItem('partidosConfirmados',JSON.stringify(partidosConfirmados))


        // Css - 
        popUp_sumarsePart_cont.style.display = 'none'
        popUp_info_content.style.display = 'block'
        popUp_info_txt.innerHTML = 'Te has sumado al partido correctamente'


        // Imprimo partido en la seccion de confirmados
        //agregar_partido_a_confirmados(partido_select_id);
        renderizar_partidosConfirmados();

    })






  })

})












const mostrar_popUp_bajaPart = () =>{
    fondo_negro.style.display = 'flex'
    popUp_bajaPart_cont.style.display = 'block'
}





// Click sobre fondo negro
fondo_negro.addEventListener('click', () =>{

  fondo_negro.style.display = 'none'
  popUp_perfil_content.style.display = 'none'
  popUp_sumarsePart_cont.style.display = 'none'
  popUp_info_content.style.display = 'none'
  popUp_bajaPart_cont.style.display = 'none'

})


// Click sobre pop ap Perfil jugador
popUp_perfil_content.addEventListener('click', () =>{

  fondo_negro.style.display = 'none'
  popUp_perfil_content.style.display = 'none'
})


// Click sobre pop ap info
popUp_info_content.addEventListener('click', () =>{

  fondo_negro.style.display = 'none'
  popUp_info_content.style.display = 'none'
})