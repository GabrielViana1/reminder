//SWITCH THEME
const root = document.querySelector(':root')
const main = document.getElementById('main')
const ballTheme = document.getElementById('ballTheme')
document.querySelector('.ball').addEventListener('click', (e)=>{
  e.target.classList.toggle('ball-move');
  document.body.classList.toggle('dark');
  if (main.dataset.theme === 'dark') {
    main.style.backgroundImage = 'url(/src/image/bg-new.jpg)'
    root.style.setProperty('--font-color', '#ffff')
    root.style.setProperty('--bg-color', '#603b5d')
    root.style.setProperty('--border-color', '#c78aab')
    ballTheme.style.backgroundImage = 'url(/src/image/lua-theme.png)'
    main.dataset.theme = 'light'
} else {
  main.style.backgroundImage = 'url(/src/image/bg-lua.jpg)'
    root.style.setProperty('--bg-color', '#000f26')
    root.style.setProperty('--font-color', '#e8e8e8')
    root.style.setProperty('--border-color', '#01458e')
    ballTheme.style.backgroundImage = 'url(/src/image/sol.png)'
    main.dataset.theme = 'dark'
}
});

//Trocar a cor do CHECK conforme troca o tema
export function switchTheme() {
  const checked = document.querySelectorAll('div[data-id="check"]')
  checked.forEach(function(element) {
    if (element.id === "checked" && main.dataset.theme === 'dark') {
      element.style.backgroundImage = 'url(/src/image/verifica.png)'
    } else if(element.id === "checked" && main.dataset.theme === 'light') {
      element.style.backgroundImage = 'url(/src/image/verifica-light.png)'
    }
  })
}