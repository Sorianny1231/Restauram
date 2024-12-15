// Función para simular agregar productos al carrito
let carritoCount = 0;

function agregarAlCarrito() {
  carritoCount++;
  document.getElementById("carrito-count").innerText = carritoCount;
}

// Función para crear el efecto del slider
let slideIndex = 0;

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 4000); // Cambia cada 3 segundos
}

showSlides();  // Iniciar el slider