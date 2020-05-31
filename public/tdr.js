document.getElementById('addItem').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/items', {
    text: document.getElementById('item').value,
    isDone: false
  })
    .then(() => {
      getItems()
      document.getElementById('item').value = ''
    })
    .catch(err => console.error(err))
})

const updateItem = text => {
  axios.put(`/items/${text}`)
    .then(() => getItems())
    .catch(err => console.error(err))
}

const deleteItem = text => {
  axios.delete(`/items/${text}`)
    .then(() => getItems())
    .catch(err => console.error(err))
}

document.addEventListener('click', event => {
  switch (event.target.className) {
    case 'updateItem':
      updateItem(event.target.dataset.item)
      break
    case 'deleteItem':
      deleteItem(event.target.dataset.item)
      break
  }
})

const getItems = () => {
  axios.get('/items')
    .then(({ data }) => {
      document.getElementById('items').innerHTML = ''
      data.forEach(item => {
        let itemElem = document.createElement('li')
        itemElem.innerHTML = `
            <span style="color: ${item.isDone ? 'green' : 'black'}">${item.text}</span>
            <button class="updateItem" data-item="${item.text}">✓</button>
            <button class="deleteItem" data-item="${item.text}">X</button>
          `
        document.getElementById('items').append(itemElem)
      })
    })
    .catch(err => console.error(err))
}

getItems()