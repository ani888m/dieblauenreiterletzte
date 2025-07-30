function addToCart(title, price) {
  const quantity = parseInt(document.getElementById("quantity").value) || 1;
  alert(`${quantity}x "${title}" zum Warenkorb hinzugefügt! Gesamt: €${(price * quantity).toFixed(2)}`);
  
  // Hier könntest du den Warenkorb-Status z. B. im localStorage speichern
  // oder ein AJAX-Call machen, je nach Projektstruktur.
}
let currentImage = 0;

function showImage(index) {
  const images = document.querySelectorAll('.carousel-image');
  images.forEach((img, i) => {
    img.classList.toggle('active', i === index);
  });
}

function prevImage() {
  const images = document.querySelectorAll('.carousel-image');
  currentImage = (currentImage - 1 + images.length) % images.length;
  showImage(currentImage);
}

function nextImage() {
  const images = document.querySelectorAll('.carousel-image');
  currentImage = (currentImage + 1) % images.length;
  showImage(currentImage);
}

document.addEventListener("DOMContentLoaded", () => {
  showImage(currentImage);
});


