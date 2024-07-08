const input = document.getElementById('new-task')
const list = document.getElementById('item')

input.addEventListener('keydown',(Event) =>{
    if(Event.key=='Enter'){
        const inputValue = input.value.trim();
        if(inputValue!=''){
            addItemToList(inputValue);
            input.value = '';
        }
    }
});


  function addItemToList(item) {
    const listItem = document.createElement('li');
    listItem.classList.add('container__lista-item');
    listItem.textContent = item;

    // Cria o botão principal que contém o SVG
    const mainButton = document.createElement('button');
    mainButton.classList.add('main-button');
    mainButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
      </svg>`;

    // Adiciona o evento de clique ao item da lista para removê-lo
    listItem.addEventListener('click', () => removeItemFromList(listItem));

    // Adiciona o botão principal ao item da lista
    listItem.appendChild(mainButton);

    // Adiciona o item da lista à lista
    list.appendChild(listItem);
  }

  function removeItemFromList(item) {
    list.removeChild(item);
  }