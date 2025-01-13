function Slider(){
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