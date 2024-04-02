const menuDiv = document.querySelector(".menu");
const direct = document.querySelector(".direct");

const sr = ScrollReveal({ reset: true });

const defaultConfig = {
  distance: "-40px", // A distancia do origin para a posição original do elemento.
  duration: 1000, // A duração da animação em ms
  delay: 200,
  reset: false,
};

sr.reveal(".form-img-div", { origin: "bottom", ...defaultConfig });
sr.reveal(".contact-form", { origin: "top", ...defaultConfig });

menuDiv.addEventListener("click", () => {
  menuDiv.classList.toggle("active");
  direct.classList.toggle("show");
});


const sendEmail = (e) => {
  e.preventDefault()
}

