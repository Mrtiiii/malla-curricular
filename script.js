document.addEventListener("DOMContentLoaded", () => {
  fetch("data/malla_curricular.json")
    .then(res => res.json())
    .then(malla => {
      const container = document.getElementById("malla-container");

      malla.forEach(ramo => {
        const div = document.createElement("div");
        div.classList.add("ramo");
        div.innerText = `${ramo.nombre}\n(${ramo.semestre}° Sem.)`;

        div.addEventListener("click", () => mostrarRamo(ramo));
        container.appendChild(div);
      });
    });
});

function mostrarRamo(ramo) {
  document.getElementById("detalle-ramo").classList.remove("oculto");
  document.getElementById("nombre-ramo").innerText = ramo.nombre;
  document.getElementById("codigo-ramo").innerText = ramo.id;
  document.getElementById("creditos-ramo").innerText = ramo.creditos;
  document.getElementById("prerrequisitos-ramo").innerText =
    ramo.prerrequisitos.length ? ramo.prerrequisitos.join(", ") : "Ninguno";
}
