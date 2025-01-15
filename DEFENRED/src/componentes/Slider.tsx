function Slider(){
    // Seleccionar todos los elementos de la galería
const galleryItems = document.querySelectorAll('.gallery-item'); 
let currentIndex = 0; // Índice de la imagen actual

// Función para actualizar la imagen mostrada
function updateGallery() {
    galleryItems.forEach((el, i) => {
        if (i === currentIndex) {
            el.classList.add('active'); // Añadir clase activa a la imagen actual
        } else {
            el.classList.remove('active'); // Eliminar clase activa de otras imágenes
        }
    });
}

// Función para pasar a la siguiente imagen
function nextImage() {
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1; // Actualizar el índice
    updateGallery(); // Actualizar la galería
}

// Función para pasar a la imagen anterior
function prevImage() {
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1; // Actualizar el índice
    updateGallery(); // Actualizar la galería
}

// Añadir eventos a los botones (CORREGIR, cualquier fallo evita la recarga de la página)
//document.getElementById('prevButton').addEventListener('click', prevImage); 
//document.getElementById('nextButton').addEventListener('click', nextImage); 
// Funcionalidad del carrusel automático
let carouselInterval = setInterval(nextImage, 5000); // Cambiar imagen cada 5 segundos (ajustable)

// Función para reiniciar el intervalo del carrusel
function resetCarousel() {
    clearInterval(carouselInterval); // Limpiar intervalo actual
    carouselInterval = setInterval(nextImage, 5000); // Reiniciar intervalo
}

    return(
        <section>
                <nav className="grid navbar">
        <a href="#inicio-index">Inicio</a>
        <a href="./registro.php">Registrarse</a>
        <a href=""></a>
        <a href="./galeria.php">Galería</a>
        <a href="">Favoritos</a>
    </nav>
    <div className="gallery">
        <div className="gallery-container">
            <img className="gallery-item active" src="https://instronic.com/wp-content/uploads/PORTADA-FULL-SIZE-1-scaled.jpg" data-index="1"/>
            <img className="gallery-item" src="https://fotografias.larazon.es/clipping/cmsimages01/2023/08/03/B3F57F5E-B3A6-441B-8FAA-152CAA6441BF/formacion-pelicula-sector-expansion-asi-son-grados-the-core_98.jpg?crop=1116,628,x43,y0&width=1900&height=1069&optimize=low&format=webply" data-index="2"/>
            <img className="gallery-item" src="https://www.thecoreschool.com/wp-content/uploads/2023/11/FP_innovacion.jpg" data-index="3"/>
            <img className="gallery-item" src="https://www.periodicopublicidad.com/media/lapublicidad/images/2022/03/23/20220323091553116676.jpg" data-index="4"/>
            <img className="gallery-item" src="https://www.morillas.com/assets/themes/www.morillas.com/img/gallery/galeria_thecore_2/es/thecore6a_min.jpg" data-index="5"/></div>
            </div>
    <div className="nav-buttons">
        <button className="nav-button" id="prevButton">Anterior</button>
        <button className="nav-button" id="nextButton">Adelante</button>
    </div>
         </section>
    )
}
export default Slider;