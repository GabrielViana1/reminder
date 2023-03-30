import { todo } from "./createTask.js"
import { clearAll } from "./deleteTask.js";
import { loadTask } from "./loadTask.js"
import { switchTheme } from "./theme.js"
import "../styles/index.css"

//(FOR) Para andar por todos slots do localStorage
for (let i = 0; i < localStorage.length; i++) {
  // Obtendo a chave e o valor para cada item
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  loadTask(value)
}

//Criar tarefa
document.getElementById('sendTask').addEventListener('click', todo)

//Criar tarefa atraves da tecla "Enter"
const todoKeyBoard = document.getElementById("todo")
todoKeyBoard.addEventListener("keydown", function (ev) {
  if (ev.key === "Enter") {
    todo()
  }
})

//Apagar todas tarefas
document.getElementById('clearAll').addEventListener('click', function() {
  const confirmation  = confirm("Você deseja realmente excluir todas as tarefas?")
  if(confirmation) {
    clearAll()
  }
})

//Trocar tema   
document.querySelector('.ball').addEventListener('click', switchTheme)