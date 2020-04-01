document.addEventListener('DOMContentLoaded', function() {
  let db = coDesConnect('https://entrega1codes.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    console.log(data)
    coDesReplace('.meio', context)
    // coDesReplace('.section-list', context)
  })
})


// secao.html?key={{@key}}