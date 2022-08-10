let persons = document.querySelector('.persons')
let starships = document.querySelector('.starships')
let planets = document.querySelector('.planets')
let btn = document.querySelector('.btn-text')
let textBtn = document.querySelector('.text-api')
let namePerson = document.querySelector('.name-person')
let heightPerson = document.querySelector('.height-person')
let skin = document.querySelector('.skin-color')


fillCounters()

function fillCounters(){
  
  Promise.all([
    getData('people/'),
    getData('starships/'),
    getData('planets/')
  ])
  .then(data => {
    persons.innerHTML = data[0].count
    starships.innerHTML = data[1].count
    planets.innerHTML = data[2].count
  })
  .catch(error => console.log(error))
}


function getData(param){
    return fetch(`https://swapi.dev/api/${param}`)
    .then(res => res.json())
    .catch(error => console.log(error))
}


function getText(){

  const randomNumber = Math.floor(Math.random() * (82 - 1) + 1)

  return fetch(`https://swapi.dev/api/people/${randomNumber}`)
  .then(res => res.json())
  .then(data =>{
      namePerson.innerHTML = ' Nome: ' + data.name
      heightPerson.innerHTML =  ' Altura: ' + data.height + ' cm '
      skin.innerHTML = ' Cor: ' + data.skin_color
  })
}

function newTextApi(){
  btn.addEventListener('click', () => {
    getText()
  })
}
newTextApi()
