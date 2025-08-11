function verificar() {
 var name = document.getElementById('name').value
 var weight = document.getElementById('weight').value
 var height = document.getElementById('height').value
 var peso = Number(weight)
 var altura = Number(height)
 if (name == '' || peso == '' || altura == '') {
  alert('Preencha todos os dados corretamente')
  return;
 }
 var imc = peso / (altura * altura)
    var classificacao = ' '
    if (imc < 18.5) {
        classificacao = 'abaixo do peso'
    } else if (imc < 25) {
        classificacao = 'com peso ideal'
    } else if (imc < 30) {
        classificacao = 'com sobrepeso'
    } else if (imc < 35) {
        classificacao = 'com obesidade grau I'
    } else {
        classificacao = 'com obesidade grau II ou mais'
    }
    msg.innerText = `Olá ${name}! seu IMC e de ${imc} e baseado nele está ${classificacao}`
}