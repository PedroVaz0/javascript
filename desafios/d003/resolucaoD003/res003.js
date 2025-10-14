var btn = document.getElementById('btn')

btn.addEventListener('click', iniciar)

function iniciar(){
    var numeroString = prompt('Digite um número inteiro')
    var numero = Number(numeroString)
    var ante = numero - 1
    var suce = numero + 1

    alert(`O valor é ${numero}, seu antecessor é ${ante} e seu sucessor é ${suce}`)
}