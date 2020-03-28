document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://codes-daniel.firebaseio.com')

  db.download('/', function(data) {
    context = data

    for (let key in data) {
      console.log(data[key])
    }
    coDesReplace('.meio', context)
    // coDesReplace('.section-list', context)

  })
})





// secao.html?key={{@key}}