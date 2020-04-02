document.addEventListener('DOMContentLoaded', function() {
  let params = coDesExtract()
  let value = params['key']
  let value2 = document.querySelector('.batatinha')
  value2.href = "projeto.html?cat="+value+"&pro={{@key}}"
  value2.src  = "assets/img/{{key}}.jpg"
  console.log(value2)
  let db = coDesConnect('https://entrega1codes.firebaseio.com/')
  db.download('/', function(data) {
    
    context = data
    coDesReplace('.nav-cat-sup', context)

    console.log(value)

    context = data['portfolio'][value]
    console.log(context)
    coDesReplace('title', context)
    coDesReplace('.k1', context)
    coDesReplace('.descricao',context)
    coDesReplace('.container', context)

  })
})


