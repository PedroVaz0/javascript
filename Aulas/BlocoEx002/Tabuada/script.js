var botao = document.getElementById('button')
botao.addEventListener('click' , gerar)
var lista = document.getElementById('lista')

function gerar(){
    var numero = document.getElementById('numero').value
    if(numero == null){
        alert('Invalido, digite um número')
    }else{
        for(i = 0; i <= 10 ; i++){
        var resul = Number(numero) * i
        lista.innerHTML += `<option> ${i} x ${numero} = ${resul} </option>`
    }
    }
}