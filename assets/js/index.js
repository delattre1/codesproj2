document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://codes-daniel.firebaseio.com')

  db.download('/', function(data) {
    context = data
    console.log(data)
    coDesReplace('.meio', context)
    // coDesReplace('.section-list', context)
  })
})





// secao.html?key={{@key}}