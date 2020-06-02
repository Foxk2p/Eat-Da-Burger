
document.getElementById('addBurger').addEventListener('click', event => {
  event.preventDefault()
  axios.post('/burgers', {
    text: document.getElementById('burger').value,
    devoured: false
  })
    .then(() => {
      getBurgers()
      document.getElementById('burger').value = ''
    })
    .catch(err => console.error(err))
})

const updateBurger = burger_name => {
  axios.put(`/burgers/${burger_name}`)
    .then(() => getBurgers())
    .catch(err => console.error(err))
}

const deleteBurger = burger_name => {
  axios.delete(`/burgers/${burger_name}`)
    .then(() => getBurgers())
    .catch(err => console.error(err))
}

document.addEventListener('click', event => {
  switch (event.target.className) {
    case 'updateBurger':
      updateBurger(event.target.dataset.burger)
      break
    case 'deleteBurger':
      deleteBurger(event.target.dataset.burger)
      break
  }
})

const getBurgers = () => {
  axios.get('/burgers')
    .then(({ data }) => {
      document.getElementById('burgers').innerHTML = ''
      data.forEach(burger => {
        let itemElem = document.createElement('li')
        itemElem.innerHTML = `
            <span style="color: ${burger.devoured ? 'green' : 'black'}">${burger.burger_name}</span>
            <button class="updateBurger" data-item="${burger.burger_name}">✓</button>
            <button class="deleteBurger" data-item="${burger.burger_name}">X</button>
          `
        document.getElementById('burgers').append(burgerElem)
      })
    })
    .catch(err => console.error(err))
}

getBurgers()


// favoriteapp movie.js for reference

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
