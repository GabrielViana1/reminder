//Função para marcar tarefa como feita
export function checkFunc(button) {
  //Verificação se o tema é dark ou ligth para colocar o check conforme o tema
    const p = document.querySelectorAll("#pDisplay")
    if (button.id === "checkList") {
      if(main.dataset.theme === 'dark') {
        button.style.backgroundImage = `url(/src/image/verifica.png)`
        button.id = "checked"
      } else {
        button.style.backgroundImage = `url(/src/image/verifica-light.png)`
        button.id = "checked"
      }
      //O forEach passa por todos "P" o que tiver a classe igual a do botão e atribuido o style
      p.forEach(function (element) {
        if (element.className === button.className) {
          element.style.textDecoration = "line-through"
        }
      })
      //Se estiver desmarcado ele tira o style fazendo o mesmo processo de cima
    } else if (button.id === "checked") {
      button.style.backgroundImage = "none"
      p.forEach(function (element) {
        if (element.className === button.className) {
          element.style.textDecoration = "none"
        }
      })
      button.id = "checkList"
    }
  }