function Enviar() {
    var txt01 = window.document.getElementById('txt01').value
    var txt02 = window.document.getElementById('txt02').value
    var txt03 = window.document.getElementById('txt03').value
    var txt04 = window.document.getElementById('txt04').value
     var check01 = window.document.getElementById('check01')
     var check02 = window.document.getElementById('check02')
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var peso = Number(txt03)
    var altura = Number(txt04)
    var imc = peso / (altura * altura)
    var classificacao = ''
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
    msg.innerText = `Olá ${txt01}, você pesa ${peso}kg, tem ${altura}m de altura e de acordo com suas respostas está ${classificacao}`
    msg2.innerText = `Obrigado por visitar meu projeto!`
}