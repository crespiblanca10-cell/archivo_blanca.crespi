console.log("Portfolio cargado correctamente");

// ------------------------------
// AUTO-HIDE NAVBAR
// ------------------------------
let lastScroll = 0;
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.style.transform = "translateY(-100%)"; // ocultar
    } else {
        navbar.style.transform = "translateY(0)"; // mostrar
    }

    lastScroll = currentScroll;
});

// ------------------------------
// FUNCIÓN SCROLL HORIZONTAL
// ------------------------------
function activarScrollHorizontal(carrusel) {
    carrusel.addEventListener("wheel", (e) => {
        e.preventDefault();
        carrusel.scrollLeft += e.deltaY;
    });
}

// ------------------------------
// CARRUSEL PROYECTOS
// ------------------------------
const carrusel = document.getElementById("carrusel");

// duplicar imágenes para efecto infinito
carrusel.innerHTML += carrusel.innerHTML;

// activar scroll horizontal
activarScrollHorizontal(carrusel);

// ------------------------------
// CARRUSEL FOTOGRAFÍAS
// ------------------------------
const carruselFotos = document.getElementById("carrusel2");

// duplicar imágenes para efecto infinito
carruselFotos.innerHTML += carruselFotos.innerHTML;

// activar scroll horizontal
activarScrollHorizontal(carruselFotos);

// ------------------------------
// FLECHAS PARA AMBOS CARRUSELES
// ------------------------------
document.querySelectorAll(".flecha").forEach(flecha => {
    flecha.addEventListener("click", () => {
        const targetId = flecha.dataset.target;
        const carrusel = document.getElementById(targetId);

        const desplazamiento = 200;

        if (flecha.classList.contains("izq")) {
            carrusel.scrollLeft -= desplazamiento;
        } else {
            carrusel.scrollLeft += desplazamiento;
        }
    });
});

// ------------------------------
// VISOR
// ------------------------------
const visor = document.getElementById("visor");
const visorImg = document.getElementById("visor-img");
const visorTexto = document.getElementById("visor-texto");
const cerrar = document.getElementById("cerrar");

// abrir visor al hacer clic en cualquier miniatura
document.querySelectorAll(".mini").forEach(img => {
    img.addEventListener("click", () => {
        visorImg.src = img.src;
        visorTexto.textContent = img.dataset.texto;
        visor.classList.remove("oculto");
    });
});

// cerrar visor
cerrar.addEventListener("click", () => {
    visor.classList.add("oculto");
});



// MODAL SOBRE MÍ
const modalSobreMi = document.getElementById("modal-sobre-mi");
const cerrarSobreMi = document.getElementById("cerrar-sobre-mi");

// abrir modal al hacer clic en el navbar
document.getElementById("btn-sobre-mi").addEventListener("click", () => {
    modalSobreMi.classList.remove("oculto");
});

// cerrar modal
cerrarSobreMi.addEventListener("click", () => {
    modalSobreMi.classList.add("oculto");
});

// cerrar haciendo clic fuera del contenido
modalSobreMi.addEventListener("click", (e) => {
    if (e.target === modalSobreMi) {
        modalSobreMi.classList.add("oculto");
    }
});

