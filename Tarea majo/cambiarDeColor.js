
    // Obtiene una referencia al botón
    var boton = document.getElementById("cambiarColor");
    var miSection = document.getElementById("miSection");
  
    // Agrega un evento de clic al botón
  boton.addEventListener("click", function (){
      // Genera un color aleatorio
   var colorAleatorio = '#' + Math.floor(Math.random()*16777215).toString(16);
      
      // Cambia el color de fondo del body

      miSection.style.backgroundColor = colorAleatorio;
    
    });


    function cambiarColor() {
        var textoElemento = document.getElementById("texto");
        var colorAl = '#' + Math.floor(Math.random()*16777215).toString(16);
        textoElemento.style.color = colorAl; // Cambia "red" al color deseado
      }
      
      // Asignar la función al evento click del botón
      var cambiarColorBtn = document.getElementById("cambiarColorBtn");
      cambiarColorBtn.addEventListener("click", cambiarColor);