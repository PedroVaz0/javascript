var btn = document.getElementById('btn')

btn.addEventListener('click' , iniciar)

function iniciar(){
    var nome = window.prompt('Digite seu nome')
    var idade = window.prompt('Digite sua idade:')
    window.alert(`O seu nome é ${nome} e você tem ${idade} anos`)
}