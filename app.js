
let numeroSecreto = 0; 

let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);

  if(listaNumerosSorteados.length == numeroMaximo)
  {
    
    asignarTextoElemento('p','Ya se sortearon todos los números posibles');
  }
  else
  {
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    }
    else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
  
  
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
    document.querySelector('#reiniciar').removeAttribute('disabled');
  }
  else {
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número es menor');
    }
    else {
      asignarTextoElemento('p', 'El número es mayor');
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

function limpiarCaja()
{
  document.querySelector('#numeroUsuario').value = '';
}

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function nuevoJuego()
{
  asignarTextoElemento('h1', 'Juego del número secreto');
  asignarTextoElemento('p', `Escribe un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
 // console.log('número secreto: ' + numeroSecreto + ' tipo: ' + typeof (numeroSecreto));
  intentos = 1;
}

function reiniciarJuego()
{
  //Limpiar caja
  limpiarCaja();
  //Indicar mensaje de inicio
  //Generar el número secreto
  //Inicializar el número de intentos
  nuevoJuego();
  //Deshabilitar el botón de nuevo juego
  document.querySelector('#reiniciar').setAttribute('disabled','true');
}


nuevoJuego();