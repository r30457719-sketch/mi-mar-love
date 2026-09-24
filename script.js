function entrar() {

    const boton = document.querySelector("button");

    boton.innerHTML = "Entrando a nuestro mundo... 🌊";

    boton.style.pointerEvents = "none";

    setTimeout(() => {

        alert("Aquí comenzará nuestro mundo ❤️");

        boton.innerHTML = 'Entrar a nuestro mundo <span>→</span>';

        boton.style.pointerEvents = "auto";

    }, 1000);
}
