//Deletar tudo
export function clearAll() {
    const todoList =  document.getElementById('todoList')
    const divList = document.querySelectorAll('div[data-remove="divListRemove"]')
    //O forEach passa por todas tarefas removendo uma por uma
    divList.forEach((element) => {
      todoList.removeChild(element)
    }) 
    localStorage.clear()
  }


//Deletar tarefa
export function deleteTask(btn) {
    const divList = document.querySelectorAll('div[data-remove="divListRemove"]')
    const restore = document.getElementById('restore')
    divList.forEach(function(element) {
      if(element.id === btn.className) {
        const todoList = document.getElementById('todoList')
        const cancelDiv = document.createElement('div')
        
        cancelDiv.className = 'cancelDiv'
        const cancel = document.createElement('span')
        
        cancel.className = 'cancelTask'
        cancel.innerText = 'Restaurar'
        
        const cancelImg = document.createElement('img')
        cancelImg.src = '/src/image/refazer.png'
        
        cancelDiv.append(cancel, cancelImg)
        restore.appendChild(cancelDiv)
        
        //Se o botão de restaurar for clicado colocamos o elemento excluido de volta nas tarefas
        cancelDiv.addEventListener('click', () => {
          todoList.appendChild(element)
          localStorage.setItem(element.id, element.id)
          restore.removeChild(cancelDiv)
        })
        //Tempo para o botão de restaurar a tarefa desaparecer
        setTimeout(() => {
          restore.removeChild(cancelDiv)
        }, 4500);
        localStorage.removeItem(element.id)
        element.remove()
      }
    })
  }