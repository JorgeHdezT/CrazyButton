function moverElemento() {
  // Obtener dimensiones de la pantalla
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Obtener el elemento p
  const elemento = document.getElementById('trampa');

  // Calcular nuevas posiciones aleatorias
  const nuevaPosX = Math.floor(Math.random() * (screenWidth - elemento.offsetWidth));
  const nuevaPosY = Math.floor(Math.random() * (screenHeight - elemento.offsetHeight));

  // Aplicar las nuevas posiciones al elemento

  elemento.style.position = "absolute";
  elemento.style.left = nuevaPosX + 'px';
  elemento.style.top = nuevaPosY + 'px';
}

function message() {
  let mainDiv = document.body;
  mainDiv.innerHTML = "";

  // Corazones1
  let corazones1h1 = document.createElement("h1");
  corazones1h1.style.textAlign = "center";
  let corazones1 = document.createTextNode("♡♡♡");
  corazones1h1.appendChild(corazones1);
  mainDiv.appendChild(corazones1h1);

  // Frase
  let fraseh1 = document.createElement("h1");
  fraseh1.style.textAlign = "center";
  let frase = document.createTextNode("Es broma, sabes que te amo igual");
  fraseh1.appendChild(frase);
  mainDiv.appendChild(fraseh1);

  // Corazones2
  let corazones2h1 = document.createElement("h1");
  corazones2h1.style.textAlign = "center";
  let corazones2 = document.createTextNode("♡♡♡");
  corazones2h1.appendChild(corazones2);
  mainDiv.appendChild(corazones2h1);

  
}