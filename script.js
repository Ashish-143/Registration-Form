const scriptURL = 'https://script.google.com/macros/s/AKfycbyacqO8FoR1Ue2XGMQ85GyKC7FLD5OF8u2wxypjWyCQVQVh1__4f6pw9GzVRoRrWZDK/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})
