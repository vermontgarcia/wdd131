const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){
  if (input.value.trim() !== '') {
    // Create a li element and populate it with the input value
    const li = document.createElement('li');
    li.textContent = input.value;
    // Create delete button and add an event listener
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'X';
    deleteButton.addEventListener('click', function(){
      list.removeChild(li)
    })
    
    // Add delete buttop to the li
    li.append(deleteButton);
    
    // Add li to the list
    list.append(li);
    
    // Clear input value
    input.value = ''
    
  } else {
    // If input empty then focus
    input.focus();
  }
})