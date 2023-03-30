//Função para editar a tarefa
export function editTask(btnEdit) {
    const p = document.querySelectorAll("#pDisplay")
    const divList = document.querySelectorAll(".divList")
    const btnDelete = document.querySelectorAll('#spanImageDelete')
    const check = document.querySelectorAll('div[data-id="check"]')
    //Todos forEach abaixo percorre as constantes acima e verifica se são iguais para fazer a mudança 
    p.forEach(function(elementP) {
      if (elementP.className === btnEdit.className) { 
            divList.forEach(function(elementDivList) {
              if(elementDivList.id === elementP.className){
                  btnDelete.forEach(function(elementDelete) {
                    if(elementDelete.className === elementDivList.id) {
                      check.forEach(function(checkElement) {
                        if(checkElement.className === elementDivList.id) {
                          const label = elementDivList
                          
                          //Após achar todas iguais passamos como parametro para poder editar todos elementos
                          callEdit(label, btnEdit, elementDelete, elementP, checkElement)
                        }
                      })
                    }
                  })
              }
            })
          }
        })
      }
  
      //Trocar o campo de tarefa para um input do tipo texto e tornar a tarefa editavel
    export function callEdit(label, btnEdit, elementDelete, elementP, checkElement) {
          //Removemos do localstorage
          localStorage.removeItem(elementP.innerText)
          
          const divEdit = document.createElement("div")
          divEdit.className = "divEdit"
          divEdit.id = "divEdit"
          
          const inputEdit = document.createElement("input")
          inputEdit.type = "text"
          inputEdit.value = elementP.innerText
          inputEdit.className = "inputEdit"
          inputEdit.id = "edit"
          
          //Trocamos o a div por um input de texto
          label.parentNode.replaceChild(divEdit, label)
          const save = document.createElement("img")
          save.src = "/src/image/verificado.png"
          save.id = "save"
          save.className = "save"
          divEdit.append(inputEdit, save)
          inputEdit.focus()
  
          //Salvar edição
          save.addEventListener("click", function edit() {
            if(inputEdit.value === '') {
              alert(`Preencha o campo com alguma tarefa!`)
            } else {
              /*Trocamos o input text para a div, e tambem alteramos todos outros
              elementos conforme o que for escrito no input*/
              divEdit.parentNode.replaceChild(label, divEdit)
              checkElement.className = inputEdit.value
              elementDelete.className = inputEdit.value
              btnEdit.className = inputEdit.value
              label.id = inputEdit.value
              elementP.innerText = inputEdit.value
              elementP.className = inputEdit.value
              elementP = inputEdit.value
              localStorage.setItem(inputEdit.value, inputEdit.value)
            }
          })
  
          //Salvar edição da terefa com a tecla "Enter"
          const keyboardEdit = document.getElementById("edit")
          keyboardEdit.addEventListener("keydown", function (ev) {
            if (ev.key === "Enter") {
              if(inputEdit.value === '') {
                alert(`Preencha o campo com alguma tarefa!`)
              } else {
                divEdit.parentNode.replaceChild(label, divEdit)
                checkElement.className = inputEdit.value
                elementDelete.className = inputEdit.value
                btnEdit.className = inputEdit.value
                label.id = inputEdit.value
                elementP.innerText = inputEdit.value
                elementP.className = inputEdit.value
                elementP = inputEdit.value
                localStorage.setItem(inputEdit.value, inputEdit.value)
              }
            }
          })
        }