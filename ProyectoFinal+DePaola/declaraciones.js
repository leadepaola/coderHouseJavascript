

//Arrays de bases
/*-------------------------------------*/

let partidos = []
let jugadores = []
let jugadoresOnline = []


// Verifico si hay informacion en storage para partidos confirmados
if(localStorage.getItem('partidosConfirmados')){
  partidosConfirmados = JSON.parse(localStorage.getItem('partidosConfirmados'))
}else{
  partidosConfirmados = [ ]; 
}



// VARIABLES
//-------------------------------------

// POP UP
const fondo_negro             = document.querySelector('#fondo_negro')
const popUp_perfil_content    = document.querySelector('#popUp_perfil_content')
const popUp_sumarsePart_cont  = document.querySelector('#popUp_sumarsePart_cont')
const popUp_info_content      = document.querySelector('#popUp_info_content')
const popUp_info_txt          = document.querySelector('#popUp_info_txt')

// Baja
const popUp_bajaPart_cont   = document.querySelector('#popUp_bajaPart_cont')



