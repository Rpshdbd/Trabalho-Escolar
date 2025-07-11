function adicionarTarefa() {
const input = document.getElementById("novaTarefa");
const texto = input.value.trim();

if (texto === "") return;

const lista = document.getElementById("listaTarefas");

const item = document.createElement("li");
item.textContent = texto;

lista.appendChild(item);
input.value = "";
}
