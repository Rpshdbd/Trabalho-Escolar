let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {
const lista = document.getElementById("listaTarefas");
lista.innerHTML = "";

tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");
    li.textContent = tarefa.texto;

    if (tarefa.concluida) {
    li.classList.add("concluida");
    }

    li.onclick = () => {
    tarefas[index].concluida = !tarefas[index].concluida;
    salvarTarefas();
    renderizarTarefas();
    };

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.onclick = (event) => {
      event.stopPropagation(); // impede marcar como concluída ao clicar no botão
    tarefas.splice(index, 1);
    salvarTarefas();
    renderizarTarefas();
    };

    li.appendChild(botaoRemover);
    lista.appendChild(li);
});
}

function adicionarTarefa() {
const input = document.getElementById("novaTarefa");
const texto = input.value.trim();

if (texto === "") return;

tarefas.push({ texto, concluida: false });
input.value = "";
salvarTarefas();
renderizarTarefas();
}

// Renderiza ao carregar
renderizarTarefas();
