document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll("aside img");
  const watchedElements = document.querySelectorAll(".watched");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = [...watchedElements].indexOf(entry.target);

          images.forEach((img, i) => {
            if (i === index) {
              img.style.opacity = "1";
              img.style.transform = "translateY(0px)"; // Imagen activa queda en su sitio
            } else {
              img.style.opacity = "0";
              img.style.transform = "translateY(20px)"; // Suave desplazamiento hacia abajo
            }
          });
        }
      });
    },
    { threshold: 0.6 }
  ); // Detecta cuando la problematica está más visible

  watchedElements.forEach((el) => observer.observe(el));
});
