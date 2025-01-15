function Slider(){
// Seleccionar todos los elementos de la galería
const galleryItems = document.querySelectorAll('.gallery-item'); 
// Índice de la imagen actual
let currentIndex = 0; 

// Función para actualizar la imagen mostrada
function updateGallery() {
    galleryItems.forEach((el, i) => {
        if (i === currentIndex) {
            // Añadir clase activa a la imagen actual
            el.classList.add('active'); 
        } else {
            // Eliminar clase activa de otras imágenes
            el.classList.remove('active'); 
        }
    });
}

// Función para pasar a la siguiente imagen
function nextImage() {
    // Actualizar el índice
    currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1; 
    // Actualizar la galería
    updateGallery(); 
}

// Función para pasar a la imagen anterior
function prevImage() {
    // Actualizar el índice
    currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1; 
    // Actualizar la galería
    updateGallery(); 
}

// Añadir eventos a los botones (CORREGIR, cualquier fallo evita la recarga de la página)
//document.getElementById('prevButton').addEventListener('click', prevImage); 
//document.getElementById('nextButton').addEventListener('click', nextImage); 

// Funcionalidad del carrusel automático
// Cambiar imagen cada 5 segundos (ajustable)
let carouselInterval = setInterval(nextImage, 5000); 

// Función para reiniciar el intervalo del carrusel
function resetCarousel() {
    // Limpiar intervalo actual
    clearInterval(carouselInterval); 
    // Reiniciar intervalo
    carouselInterval = setInterval(nextImage, 5000); 
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
            <img className="gallery-item active" src="https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/04/alcala-de-henarez.jpeg" data-index="1"/>
            <img className="gallery-item" src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Tres_Cantos_-_Ayuntamiento_1.JPG" data-index="2"/>
            <img className="gallery-item" src="https://www.comunidad.madrid/sites/default/files/img/carteleria/la_sede_del_gobierno_regional_en_la_puerta_del_sol_luce_en_su_balcon_principal_la_bandera_de_venezuela_2.jpeg" data-index="3"/>
            <img className="gallery-item" src="https://masmadrid.org/wp-content/uploads/2023/10/Free_Palestina57-scaled.jpg" data-index="4"/>
            <img className="gallery-item" src="https://grupo-ae.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-04-at-15.53.12.jpeg" data-index="5"/></div>
            </div>
    <div className="nav-buttons">
        <button className="nav-button" id="prevButton">Anterior</button>
        <button className="nav-button" id="nextButton">Adelante</button>
    </div>
         </section>
    )
}
export default Slider;