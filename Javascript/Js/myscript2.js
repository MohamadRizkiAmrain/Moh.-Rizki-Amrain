let currentImageIndex = 0;

function showImage(index) {
  const mainImage = document.getElementById("main");
  mainImage.src = document.querySelectorAll(".side_view img")[index].src;
  currentImageIndex = index;
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % 5;
  showImage(currentImageIndex);
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + 5) % 5;
  showImage(currentImageIndex);
}

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") {
    prevImage();
  } else if (event.key == "ArrowRight") {
    nextImage();
  }
});
