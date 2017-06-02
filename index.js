let title = document.querySelector('#title')
let body = document.querySelector('#body')
let button = document.querySelector('#create-button')


let makeCard = () => {
  let card = document.createElement('div')
  let showTitle = document.createElement('p')
  showTitle.setAttribute('contenteditable', 'true')
  showTitle.append(title.value)
  let showBody = document.createElement('p')
  showBody.setAttribute('contenteditable', 'true')
  showBody.append(body.value)
  let deleteButton = document.createElement('button')
  deleteButton.classList.add('delete')
  deleteButton.append('Delete')
  let deleteCard = () => {
    card.remove()
  }
  deleteButton.addEventListener('click', deleteCard)
  card.append(showTitle, showBody, deleteButton)
  document.body.append(card)
  body.value = ''
  title.value = ''
}




button.addEventListener('click', makeCard)
