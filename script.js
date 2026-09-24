function entrar() {
    const boton = document.querySelector("button");

    boton.innerHTML = "Entrando a nuestro mundo... 🌊";
    boton.style.pointerEvents = "none";

    setTimeout(() => {
        window.location.href = "mundo.html";
    }, 1000);
}
