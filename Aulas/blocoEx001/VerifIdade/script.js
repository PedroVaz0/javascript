var anoAtual = new Date().getFullYear()
document.getElementById('button').addEventListener('click' , verificar)
var result = document.getElementsByClassName('result')[0]


function verificar(){
    var data = document.getElementById('data').value
    if (data === "" || Number(data) > anoAtual){
        window.alert('Data inválida');
        return;
    }
    
    var sex = document.getElementsByName('sex')
    if (sex[0].checked){
        result.innerHTML += 'Seu sexo é masculino'
    }else if(sex[1].checked){
        result.innerHTML += 'Seu sexo é feminino'
    }else{
        window.alert('Adicione o seu sexo')
        return
    }

    var idade =  anoAtual - Number(data)
    result.innerHTML += `<br>Sua idade é de ${idade} anos`
}