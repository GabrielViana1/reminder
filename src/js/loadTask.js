import { checkFunc } from "./checkTask.js"
import { deleteTask} from "./deleteTask.js"
import { editTask } from "./editTask.js"

//Função que carrega as tarefas quando o site é iniciado
export function loadTask(indice) {
    let value2 = indice
    const lista = document.getElementById("todoList")
    /*Aqui colocamos o ID da div como o valor digitado
      no input, para remover através do ID*/
    const div = document.createElement("div")
    div.id = value2
    div.className = "divList"
    div.dataset.remove = 'divListRemove'
    div.style.animation = 'fadeInDown'
    div.style.animationDuration = '1s'
  
    const div2 = document.createElement("div")
    div2.className = "divForCheck"
  
    let check = document.createElement("div")
    check.id = "checkList"
    check.className = value2
    check.setAttribute('data-id', 'check')
  
    const p = document.createElement("span")
    p.innerText = indice
    p.id = "pDisplay"
    p.className = value2
  
    const newDiv = document.createElement("div")
    newDiv.className = "newDiv"
  
    const editList = document.createElement("button")
    editList.id = "spanImageEdit"
    editList.className = value2
    editList.innerHTML = "<img src='/src/image/editar-texto.png'>"
  
    const deleteList = document.createElement("button")
    deleteList.id = "spanImageDelete"
    deleteList.className = value2
    deleteList.innerHTML = "<img src='/src/image/lata-de-lixo.png'>"
  
    //Criar tarefa
    if (p.innerText != "") {
      newDiv.append(editList, deleteList)
      div2.append(check, p)
      div.append(div2, newDiv)
      lista.append(div)
    }
  
    //Marcar tarefa como feito
    check.addEventListener("click", function (ev) {
      const button = ev.currentTarget
      checkFunc(button)
    })
  
    //Editar tarefa
    editList.addEventListener("click", function (ev) {
      const btnEdit = ev.currentTarget
      editTask(btnEdit)
    })
  
    //Deletar tarefa
    deleteList.addEventListener("click", function (ev) {
      const btnDelete = ev.currentTarget
      deleteTask(btnDelete)
    })
  }