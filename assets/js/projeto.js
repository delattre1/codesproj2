document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let db = coDesConnect('https://codes-daniel.firebaseio.com/')
  db.download('/', function(data) {
    
    context = data
    coDesReplace('.nav-cat-sup', context)
    // coDesReplace('title', context['biblioteca'][value])
    // coDesReplace('.menu-list', context)
    // coDesReplace('.call', context['biblioteca'][value])
    context = data['portfolio'][value]
    console.log(context)
    coDesReplace('.container', context)
  })
})
