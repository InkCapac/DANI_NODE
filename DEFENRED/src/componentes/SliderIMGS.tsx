import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "src/assets/img/reunion_defenred.webp",
    thumbnail: "src/assets/img/reunion_defenred.webp",
  },
  {
    original: "src/assets/img/señoraLeyendo_defenred.webp",
    thumbnail: "src/assets/img/señoraLeyendo_defenred.webp",
  },
  {
    original: "src/assets/img/salón_defenred.webp",
    thumbnail: "src/assets/img/salón_defenred.webp",
  },
];
class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} showBullets={true} />;
  }
}
export default MyGallery;
