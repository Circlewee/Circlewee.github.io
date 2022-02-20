// prettier-ignore
const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = new Image();

bgImage.src = `./assets/img/${chosenImage}`;
bgImage.classList.add("background");
document.body.appendChild(bgImage);
