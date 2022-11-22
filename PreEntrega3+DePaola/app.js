




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





// Sumo al partido
// -------------------------------------
sumarse_al_partido = (e) => {
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
    mostrar_popUp_info('Te has sumado al partido correctamente')


    // Imprimo partido en la seccion de confirmados
    //agregar_partido_a_confirmados(partido_select_id);
    renderizar_partidosConfirmados();
    renderizar_partidosAbiertos();
}





// Muesta popUp con info del partido para sumarse 
//-------------------------------------

mostrarInfo_para_sumarsePartido = (e) => {

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
    btn_sumarsePart_content.addEventListener('click', sumarse_al_partido)

}














// Renderizar partidos abiertos
//-------------------------------------

const partAb_SubContainer   = document.querySelector('#partAb_SubContainer')
const partConf_SubContainer = document.querySelector('#partConf_SubContainer')



const renderizar_partidosAbiertos = () =>{

  partAb_SubContainer.innerHTML = ''

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

  const popUp_sumarsePart_photo   = document.querySelector('#popUp_sumarsePart_photo')
  const partAb_img_container      = document.querySelectorAll('.partAb_img_container')
  partAb_img_container.forEach((card) =>{
    card.addEventListener('click', mostrarInfo_para_sumarsePartido)
  })
}

renderizar_partidosAbiertos()










// Darse de baja de un partido
// -------------------------------------

const darseDeBaja = (e) =>{
    
    // Tomo el id del jugador al que se le hizo click
    const id_partido_baja = e.target.closest('#btn_bajaPart_content').getAttribute('data-id')
    
    partidosConfirmados = partidosConfirmados.filter((partido) => partido.id != id_partido_baja)


    partidos.forEach((partido) =>{
        if (partido.id == id_partido_baja) {
            partido.userConfirmado = 0;
            partido.cantidadJugadoresConfirmados--

        }
    })
        
    // Guardo Modificacion en storage
    localStorage.setItem('partidos',JSON.stringify(partidos))
    localStorage.setItem('partidosConfirmados',JSON.stringify(partidosConfirmados))

    // Css
    popUp_bajaPart_cont.style.display = 'none'
    mostrar_popUp_info('Te has dado de baja correctamente')

    renderizar_partidosConfirmados()
    renderizar_partidosAbiertos()

}



// Mostrar informacion de partido confirmado
// -------------------------------------

const mostrarInfoPartidoConfirmado = (e) => {
  
    // Tomo el id del jugador al que se le hizo click
    const id_partConfirmado = e.target.closest('.partConf_img_container').getAttribute('data-id')
   

    partidosConfirmados.forEach((cancha) => {

      if (cancha.id == id_partConfirmado) {

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

          const btn_bajaPart_content          = document.querySelector('#btn_bajaPart_content')
          btn_bajaPart_content.addEventListener('click', darseDeBaja)

         
      }
  })
} 



// Renderizar partidos confirmados
// -------------------------------------
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










// Pasar partido abierto a partido confirmado
// -------------------------------------
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
















mostrar_popUp_info = (text) =>{
    popUp_info_content.style.display = 'block'
    popUp_info_txt.innerHTML = text
}




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