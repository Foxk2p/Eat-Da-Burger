document.getElementById('addMovie').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/api/movies', {
    title: document.getElementById('title').value
  })
    .then(({ data }) => {
      let movieElem = document.createElement('li')
      movieElem.innerHTML = `
        ${document.getElementById('title').value}
        <button class="deleteMovie" data-id="${data.insertId}">X</button>
      `
      document.getElementById('movies').append(movieElem)
    })
})

document.addEventListener('click', event => {
  if (event.target.className === 'deleteMovie') {
    axios.delete(`/api/movies/${event.target.dataset.id}`)
      .then(() => {
        event.target.parentNode.remove()
      })
  }
})

// Copy of favoriteapp movie.js for reference

// document.getElementById('addMovie').addEventListener('click', event => {
//   event.preventDefault()
//   axios.post('/api/movies', {
//     title: document.getElementById('title').value
//   })
//     .then(({ data }) => {
//       let movieElem = document.createElement('li')
//       movieElem.innerHTML = `
//         ${document.getElementById('title').value}
//         <button class="deleteMovie" data-id="${data.insertId}">X</button>
//       `
//       document.getElementById('movies').append(movieElem)
//     })
// })

// document.addEventListener('click', event => {
//   if (event.target.className === 'deleteMovie') {
//     axios.delete(`/api/movies/${event.target.dataset.id}`)
//       .then(() => {
//         event.target.parentNode.remove()
//       })
//   }
// })

// tdr reference----------------------------------------

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