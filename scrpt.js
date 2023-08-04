

// JavaScript for the image carousel
document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "image1.jpg",
      "image2.jpg",
      "image3.jpg",
      // Add more image file names here
    ];
  
    let currentImageIndex = 0;
    const imageElement = document.getElementById("carousel-image");
  
    function showImage() {
      imageElement.src = images[currentImageIndex];
    }
  
    function nextImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      showImage();
    }
  
    function prevImage() {
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      showImage();
    }
  
    document.getElementById("next-button").addEventListener("click", nextImage);
    document.getElementById("prev-button").addEventListener("click", prevImage);
  
    showImage();
  });

