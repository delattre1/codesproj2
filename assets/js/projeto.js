document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['cat']
  let proj = params['pro']
  let db = coDesConnect('https://entrega1codes.firebaseio.com/')

  db.download('/', function(data) {
    context = data
    coDesReplace('.nav-cat-sup', context)

    context = data['portfolio'][value]['projetos'][proj]
    console.log(context)
    coDesReplace('.k1', context)
    coDesReplace('.k2', context)
    coDesReplace('.k3', context)
    coDesReplace('.k4', context)

  })
})
