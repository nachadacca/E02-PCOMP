// Seleccionamos el div con id "zona"

const zona = document.getElementById("zona");

zona.addEventListener("mouseenter", () => {
  console.log("Mouse dentro del punto");
  zona.style.transform = "scale(1.5)";
  zona.style.backgroundColor = "#5E929F";
});

zona.addEventListener("mouseleave", () => {
  console.log("Mouse fuera del punto");
  zona.style.transform = "scale(1)";
  zona.style.backgroundColor = "#74AAB7";
});

const zona2 = document.getElementById("zona2");

zona2.addEventListener("mouseenter", () => {
  console.log("Mouse dentro del punto");
  zona2.style.transform = "scale(1.5)";
  zona2.style.backgroundColor = "#5E929F";
});

zona2.addEventListener("mouseleave", () => {
  console.log("Mouse fuera del punto");
  zona2.style.transform = "scale(1)";
  zona2.style.backgroundColor = "#74AAB7";
});

const zona3 = document.getElementById("zona3");

zona3.addEventListener("mouseenter", () => {
  console.log("Mouse dentro del punto");
  zona3.style.transform = "scale(1.5)";
  zona3.style.backgroundColor = "#5E929F";
});

zona3.addEventListener("mouseleave", () => {
  console.log("Mouse fuera del punto");
  zona3.style.transform = "scale(1)";
  zona3.style.backgroundColor = "#74AAB7";
});

//oficial

document.querySelectorAll('.region').forEach(region => {
  region.addEventListener('click', () => {
    const nombre = region.getAttribute('title') || region.id;
    document.getElementById('info').textContent = `Hiciste clic en: ${nombre}`;
  });
});
// CITA A CHAT GPT"
