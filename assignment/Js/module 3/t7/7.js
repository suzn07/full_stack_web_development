const triger = document.getElementById("trigger");
const target = document.getElementById("target");

const originalImage = "img/picA.jpg";
const hoverImage = "img/picB.jpg";

triger.addEventListener("mouseover", () => {
  target.src = hoverImage;
});

target.addEventListener("mouseout", () => {
  target.src = originalImage;
});
