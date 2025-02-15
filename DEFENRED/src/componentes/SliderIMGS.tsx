import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "src/assets/img/reunion_defenred.jpg",
    thumbnail: "src/assets/img/reunion_defenred.jpg",
  },
  {
    original: "src/assets/img/señoraLeyendo_defenred.jpg",
    thumbnail: "src/assets/img/señoraLeyendo_defenred.jpg",
  },
  {
    original: "src/assets/img/salón_defenred.jpg",
    thumbnail: "src/assets/img/salón_defenred.jpg",
  },
];
class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} showBullets={true} />;
  }
}
export default MyGallery;
