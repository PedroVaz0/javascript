var btn = document.getElementById('btn')
btn.addEventListener('click' , calcular)

function calcular(){
    var nome = prompt('Digite o nome do produto:')
    var preco = prompt('Digite o preco do produto')
    var qntRecebida = prompt('Digite o valor dado pelo cliente')

    var troco = Number(qntRecebida) - Number(preco)
    if(troco > 0){
        alert(`Troco: R$${troco}`)
    }
    else if(troco < 0){
        alert(`O cliente ainda deve R$${troco * -1}`)
    }else{
        alert('Não é necessário troco')
    }
}