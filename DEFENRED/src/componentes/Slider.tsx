//
import React, { useEffect, useRef } from "react";
import Inicio from "../linkedPages/inicio"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/slider.css"

function Slider() {
    const galleryItemsRef = useRef<HTMLImageElement[]>([]); // Referencia para las imágenes
    let currentIndex = 0; // Índice de la imagen actual
  
    useEffect(() => {
      const galleryItems = Array.from(
        document.querySelectorAll<HTMLImageElement>(".gallery-item")
      );
      galleryItemsRef.current = galleryItems;
  
      // Función para actualizar la imagen mostrada
      function updateGallery() {
        galleryItems.forEach((el, i) => {
          if (i === currentIndex) {
            el.classList.add("active");
          } else {
            el.classList.remove("active");
          }
        });
      }
  
      // Función para pasar a la siguiente imagen
      function nextImage() {
        currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
        updateGallery();
      }
  
      // Función para pasar a la imagen anterior
      function prevImage() {
        currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
        updateGallery();
      }
  
      // Añadir eventos a los botones
      const prevButton = document.getElementById("prevButton");
      const nextButton = document.getElementById("nextButton");
  
      if (prevButton && nextButton) {
        prevButton.addEventListener("click", () => {
          prevImage();
          resetCarousel();
        });
        nextButton.addEventListener("click", () => {
          nextImage();
          resetCarousel();
        });
      }
  
      // Funcionalidad del carrusel automático
      let carouselInterval = setInterval(nextImage, 5000);
  
      // Función para reiniciar el intervalo del carrusel
      function resetCarousel() {
        clearInterval(carouselInterval);
        carouselInterval = setInterval(nextImage, 5000);
      }
  
      // Cleanup: eliminar listeners y detener el intervalo
      return () => {
        if (prevButton) prevButton.removeEventListener("click", prevImage);
        if (nextButton) nextButton.removeEventListener("click", nextImage);
        clearInterval(carouselInterval);
      };
    }, []);
    return (
        <section>
          <div className="gallery">
            <div className="gallery-container">
              <img
                className="gallery-item active"
                src="https://static1.thetravelimages.com/wordpress/wp-content/uploads/2023/04/alcala-de-henarez.jpeg"
                data-index="1"
                alt="Alcalá de Henares"
              />
              <img
                className="gallery-item"
                src="https://upload.wikimedia.org/wikipedia/commons/a/ae/Tres_Cantos_-_Ayuntamiento_1.JPG"
                data-index="2"
                alt="Tres Cantos"
              />
              <img
                className="gallery-item"
                src="https://www.comunidad.madrid/sites/default/files/img/carteleria/la_sede_del_gobierno_regional_en_la_puerta_del_sol_luce_en_su_balcon_principal_la_bandera_de_venezuela_2.jpeg"
                data-index="3"
                alt="Puerta del Sol"
              />
              <img
                className="gallery-item"
                src="https://masmadrid.org/wp-content/uploads/2023/10/Free_Palestina57-scaled.jpg"
                data-index="4"
                alt="Manifestación"
              />
              <img
                className="gallery-item"
                src="https://grupo-ae.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-03-04-at-15.53.12.jpeg"
                data-index="5"
                alt="Evento Grupo AE"
              />
            </div>
          </div>
          <div className="nav-buttons">
            <button className="nav-button" id="prevButton">
              Anterior
            </button>
            <button className="nav-button" id="nextButton">
              Adelante
            </button>
          </div>
        </section>
      );
    }
    
    export default Slider;