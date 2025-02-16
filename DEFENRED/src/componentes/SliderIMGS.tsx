import React from "react";
import ImageGallery, { ReactImageGalleryItem } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "./css/sliderIMGS.css";
// Extender la interfaz para incluir la propiedad "text"
interface CustomImageGalleryItem extends ReactImageGalleryItem {
  text: {
    title: string;
    description: string;
  };
}

const images: CustomImageGalleryItem[] = [
  {
    original: "src/assets/img/reunion_defenred.webp",
    thumbnail: "src/assets/img/reunion_defenred.webp",
    text: {
      title: "Reunión en Defenred",
      description: "Trabajando juntos por un futuro mejor.",
    },
  },
  {
    original: "src/assets/img/señoraLeyendo_defenred.webp",
    thumbnail: "src/assets/img/señoraLeyendo_defenred.webp",
    text: {
      title: "Aprendiendo juntos",
      description: "Educación y crecimiento para todos.",
    },
  },
  {
    original: "src/assets/img/salón_defenred.webp",
    thumbnail: "src/assets/img/salón_defenred.webp",
    text: {
      title: "Nuestro espacio",
      description: "Un lugar para compartir y crecer.",
    },
  },
];

class MyGallery extends React.Component {
  render() {
    return (
      <ImageGallery
        items={images}
        showBullets={true}
        autoPlay={true}
        renderItem={(item) => {
          const customItem = item as CustomImageGalleryItem; // Type casting
          return (
            <div style={{ position: "relative", width: "100%", height: "100vh" }}>
              <img
                src={customItem.original}
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="image-text-inicio"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <h1>{customItem.text.title}</h1>
                <p>{customItem.text.description}</p>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

export default MyGallery;