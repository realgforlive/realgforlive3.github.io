// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Quiero despertar a diario", time: 17 },
  { text: "y que me veas a los ojos", time: 21 },
  { text: "darte un beso consentido", time: 22 },
  { text: "y acaricindo tu rostro decirte", time: 25 },
  { text: "que el tiempo me sobra", time: 30 },
  { text: "si se trata de ti", time: 31 },
  { text: "quiero mas de dos razones para que estemos unidos", time: 39 },
  { text: "sabes a que me refiero", time: 45 },
  { text: "quiero tener muchos hijos contigo", time: 47 },
  { text: "y que esten de testigos", time: 50 },
  { text: "de lo que es ser feliz", time: 53 },
  { text: "quiero poder ser tu dueño", time: 59 },
  { text: "y estar por siempre en tu vida", time: 102 },
  { text: "quiero que en cada tristeza pueda ser tu compañia", time: 104 },
  { text: "juntar nuestros corazones compartirte mi alegria", time: 109 },
  { text: "quiero que te des un viaje", time: 114 },
  { text: "en el que yo sea tu guia", time: 116 },
  { text: "ser un felices por siempre", time: 119 },
  { text: "pero no de fantacia", time: 122 },
  { text: "ir a recorrer el mundo para que en fotografias", time: 124 },
  { text: "desde enero hasta diciembre recordar los 2020 algun dia", time: 130 },
  { text: "quiero poder ser tu dueño", time: 200 },
  { text: "y estar por siempre en tu vida", time: 203 },
  { text: "quiero que en cada tristeza pueda ser tu compañia", time: 205 },
  { text: "juntar nuestros corazones compartirte mi alegria", time: 210 },
  { text: "quiero que te des un viaje", time: 215 },
  { text: "en el que yo sea tu guia", time: 217 },
  { text: "ser un felices por siempre", time: 220 },
  { text: "pero no de fantacia", time: 223 },
  { text: "ir a recorrer el mundo para que en fotografias", time: 225 },
  { text: "desde enero hasta diciembre recordar los 2020 algun dia", time: 231 },
  { text: "desde enero hasta diciembre recordar los 2020 algun dia", time: 239 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);