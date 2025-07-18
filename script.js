
let materias = [];
let estadoMaterias = {};

function renderMalla(filtro = "all") {
  const cont = document.getElementById("malla-container");
  cont.innerHTML = "";
  materias.forEach((m) => {
    if (filtro !== "all" && m.modulo !== filtro) return;
    const card = document.createElement("div");
    card.className = `card ${m.modulo.replace(/ /g, "_")}`;
    card.id = m.codigo;
    if (estadoMaterias[m.codigo]) card.classList.add("checked");
    card.innerHTML = `<strong>${m.nombre}</strong> (${m.codigo})<br>
      <span class="tooltip">Créditos: ${m.creditos} | Prereqs: ${m.prerequisitos.join(", ") || "Ninguno"}</span>`;
    card.onclick = () => toggleMateria(m.codigo);
    cont.appendChild(card);
  });
}

function toggleMateria(codigo) {
  estadoMaterias[codigo] = !estadoMaterias[codigo];
  renderMalla(document.getElementById("filterModule").value);
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function resetMalla() {
  estadoMaterias = {};
  renderMalla(document.getElementById("filterModule").value);
}

function filterByModule(modulo) {
  renderMalla(modulo);
}

window.onload = () => {
  materias = window.MATERIAS;
  renderMalla();
};
